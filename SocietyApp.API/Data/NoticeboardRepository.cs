using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SocietyApp.API.Models;

namespace SocietyApp.API.Data {
    public class NoticeboardRepository : INoticeboardRepository {
        private readonly DataContext _context;
        public NoticeboardRepository (DataContext context) {
            _context = context;

        }
        public void Add<T> (T entity) where T : class {
            throw new System.NotImplementedException ();
        }

        public void Delete<T> (T entity) where T : class {
            throw new System.NotImplementedException ();
        }

        public Task<Noticeboard> GetNoticeboard (int id) {
            throw new System.NotImplementedException ();
        }

        public async Task<IEnumerable<Noticeboard>> GetNoticeboards () {
            var noticeboards = await _context.Noticeboards.ToListAsync ();
            return noticeboards;
        }

        public Task<bool> SaveAll () {
            throw new System.NotImplementedException ();
        }
    }
}