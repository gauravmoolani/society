using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SocietyApp.API.Models;

namespace SocietyApp.API.Data
{
    public class SocietyEventRepository : ISocietyEventRepository
    {
        private readonly DataContext _context;
        public SocietyEventRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<SocietyEvent> GetEvent(int id)
        {
            var societyevent = await _context.SocietyEvents.FirstOrDefaultAsync(u => u.Id == id);
            return societyevent;
        }


        public async Task<IEnumerable<SocietyEvent>> GetEvents()
        {
            var societyevents = await _context.SocietyEvents.ToListAsync();
            return societyevents;
        }

        public Task<bool> SaveAll()
        {
            throw new System.NotImplementedException();
        }
    }
}