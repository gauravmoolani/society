using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SocietyApp.API.Data;
using SocietyApp.API.Dtos;

namespace SocietyApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NoticeBoardController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly INoticeboardRepository _repo;
        public NoticeBoardController(INoticeboardRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetNoticeboards()
        {
            var noticeboards = await _repo.GetNoticeboards();
            var noticeboardsToReturn = _mapper.Map<IEnumerable<NoticeboardForListDto>>(noticeboards);
            return Ok(noticeboardsToReturn);
        }
    }
}