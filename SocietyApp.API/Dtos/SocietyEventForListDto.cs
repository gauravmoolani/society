using System;

namespace SocietyApp.API.Dtos
{
    public class SocietyEventForListDto
    {
        public string EventName{get;set;}
        public string Description{get;set;}
        public int Contribution{get;set;}
        public DateTime EventDate{get;set;}
    }
}