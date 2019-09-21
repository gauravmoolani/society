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
    public class SocietyRuleController: ControllerBase
    {
        private readonly ISocietyRuleRepository _repo;
        private readonly IMapper _mapper;
        public SocietyRuleController(ISocietyRuleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetSocietyRules()
        {
            var societyRules = await _repo.GetRules();
            var societyRulesToReturn = _mapper.Map<IEnumerable<SocietyRuleForListDto>>(societyRules);
            return Ok(societyRulesToReturn);
        }
    }
}