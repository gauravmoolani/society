using SocietyApp.API.enums;

namespace SocietyApp.API.Dtos
{
    public class UserForListDto
    {
           public int Id { get; set; }
        public string Username { get; set; }       
        public string FlatNo { get; set; }
        public bool IsActive { get; set; }
        public Gender Gender { get; set; }
        public UserType UserTypes { get; set; }
        public string ContactNumber { get; set; }
        public string EmailAddress { get; set; }
        public string PhotoUrl { get; set; }
    }
}