

using System.Collections.Generic;
using SocietyApp.API.enums;

namespace SocietyApp.API.Models
{
    public class User : ModelBase
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FlatNo { get; set; }
        public bool IsActive { get; set; }
        public Gender Gender { get; set; }
        public UserType UserType { get; set; }
        public string ContactNumber { get; set; }
        public string EmailAddress { get; set; }
        public ICollection<Photo> Photos { get; set; }

    }
}