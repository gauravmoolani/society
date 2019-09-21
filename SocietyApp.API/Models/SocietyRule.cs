using System;

namespace SocietyApp.API.Models
{
    public class SocietyRule
    {

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTill { get; set; }

    }
}