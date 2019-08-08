using System.Collections.Generic;
using SocietyApp.API.enums;
using SocietyApp.API.Models;

namespace SocietyApp.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
 public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string FlatNo { get; set; }
        public bool IsActive { get; set; }
        public Gender Gender { get; set; }
        public UserType UserType { get; set; }
        public string ContactNumber { get; set; }
        public string EmailAddress { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}