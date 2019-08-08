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
    public class SocietyEventController : ControllerBase
    {
        private readonly ISocietyEventRepository _repo;

        private readonly IMapper _mapper;
        public SocietyEventController(ISocietyEventRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetSocietyEvents()
        {
            var societyEvents = await _repo.GetEvents();
            var societyEventsToReturn = _mapper.Map<IEnumerable<SocietyEventForListDto>>(societyEvents);
            return Ok(societyEventsToReturn);
        }
    }
}