using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SocietyApp.API.Models;

namespace SocietyApp.API.Data {
    public class SocietyRuleRepository : ISocietyRuleRepository {
        private readonly DataContext _context;

        public SocietyRuleRepository (DataContext context) {
          _context = context;

        }
        public void Add<T> (T entity) where T : class {
            throw new System.NotImplementedException ();
        }

        public void Delete<T> (T entity) where T : class {
            throw new System.NotImplementedException ();
        }

        public Task<SocietyRule> GetRule (int id) {
            throw new System.NotImplementedException ();
        }

        public async Task<IEnumerable<SocietyRule>> GetRules () {
            var societyrules = await _context.SocietyRules.ToListAsync ();
            return societyrules;
        }

        public Task<bool> SaveAll () {
            throw new System.NotImplementedException ();
        }
    }
}