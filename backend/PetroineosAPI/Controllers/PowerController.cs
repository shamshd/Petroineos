using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PetroineosAPI.Models;

namespace PetroineosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PowerController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<PowerTrade> Get(DateTime date)
        {
            PowerService ps = new PowerService();

            IEnumerable<PowerTrade> powerTrades = null;

            try
            {
                powerTrades = ps.GetTrades(date);
            }
            catch(Exception e)
            {
                // ***** In a real production system I would use some sort of Logger rather than Console.WriteLine *****
                Console.WriteLine("ERROR IN PowerController Get method: " + Environment.NewLine + e.Message + Environment.NewLine + e.StackTrace);
            }       

            return powerTrades;
        }
    }
}
