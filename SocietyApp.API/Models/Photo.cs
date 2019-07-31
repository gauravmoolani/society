namespace SocietyApp.API.Models
{
    public class Photo:ModelBase
    {
        public int Id {get;set;}
        public string Url {get;set;}
        public string Description{get;set;}
        public bool IsMain {get;set;}
        public User User {get;set;}
        public int UserId{get;set;}
    }
}