
using SocietyApp.API.Models;
using System.Threading.Tasks;
namespace SocietyApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username , string password);
         Task<bool> UserExists(string username);

    }
}