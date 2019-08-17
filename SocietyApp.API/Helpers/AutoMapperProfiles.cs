using System.Linq;
using AutoMapper;
using SocietyApp.API.Dtos;
using SocietyApp.API.Models;

namespace SocietyApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(g => g.Photos.FirstOrDefault(h => h.IsMain).Url);
            });
            CreateMap<User, UserForListDto>().ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(g => g.Photos.FirstOrDefault(h => h.IsMain).Url);

            }).ForMember(dest => dest.UserType, opt =>
            {
                opt.MapFrom(g => g.UserType.ToString());
            });
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForRegisterDto, User>();
             CreateMap<UserForUpdateDto, User>();
            CreateMap<SocietyEvent, SocietyEventForListDto>();
            CreateMap<Noticeboard, NoticeboardForListDto>();
        }
    }
}