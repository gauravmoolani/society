using System;

namespace SocietyApp.API.Models
{
    public class Noticeboard
    {
        public int Id { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Title { get; set; }
        public string NoticeInformation { get; set; }
        public bool Approved { get; set; }
    }
}