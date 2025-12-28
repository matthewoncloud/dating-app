using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController(AppDbContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetMembers()
        {
            var users = await context.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMember(string id)
        {
            var user = await context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
