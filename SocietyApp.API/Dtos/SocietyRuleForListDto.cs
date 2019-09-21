using System;

namespace SocietyApp.API.Dtos
{
    public class SocietyRuleForListDto
    {
         public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTill { get; set; }
    }
}