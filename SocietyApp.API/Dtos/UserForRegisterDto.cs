using System.ComponentModel.DataAnnotations;

namespace SocietyApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string FlatNo { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Please enter password between 4 and 8 charachters")]
        public string Password { get; set; }
    }
}