using System.Collections.Generic;
using System.Threading.Tasks;
using SocietyApp.API.Models;

namespace SocietyApp.API.Data
{
    public interface INoticeboardRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Noticeboard>> GetNoticeboards();
        Task<Noticeboard> GetNoticeboard(int id);
    }
}