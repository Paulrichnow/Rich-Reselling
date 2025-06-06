using Microsoft.AspNetCore.Mvc;

namespace Rich_Reselling.Api.Controllers;
    [ApiController]
    [Route("api/RichReselling")]
    public class RichResellingControllers : ControllerBase
    {
        [HttpGet("ping")]
        public IActionResult Ping()
        {
            var response = new { message = "Hello from backend" };
            return Ok(response); // <-- THIS returns JSON with content
        }
}