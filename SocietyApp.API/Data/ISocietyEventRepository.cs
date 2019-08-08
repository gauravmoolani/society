using System.Collections.Generic;
using System.Threading.Tasks;
using SocietyApp.API.Models;

namespace SocietyApp.API.Data
{
    public interface ISocietyEventRepository
    {
          void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<IEnumerable <SocietyEvent>> GetEvents();
         Task<SocietyEvent> GetEvent(int id);
    }
}