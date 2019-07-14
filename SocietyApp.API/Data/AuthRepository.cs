using System;
using System.Threading.Tasks;
using SocietyApp.API.Models;
using Microsoft.EntityFrameworkCore;
namespace SocietyApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            this._context = context;
        }
        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var cmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = cmac.Key;
                passwordHash = cmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(d => d.Username == username);
            if (user == null)
                return null;
            if (VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return user;
            }
            return null;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var cmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {

                var couputedHash = cmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < couputedHash.Length; i++)
                {
                    if (couputedHash[i] != passwordHash[i]) return false;

                }
                return true;
            }

        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(f => f.Username == username))
                return true;
            return false;
        }
    }
}