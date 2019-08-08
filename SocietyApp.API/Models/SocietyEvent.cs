using System;

namespace SocietyApp.API.Models
{
    public class SocietyEvent
    {
        public int Id {get;set;}
        public string EventName{get;set;}
        public string Description{get;set;}
        public int Contribution{get;set;}
        public DateTime EventDate{get;set;}
    }
}