using BaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BaseAPI.Controllers
{
    [Route("api/clients")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private ClientsContext _clientsContext;
        public ClientController(ClientsContext webAPIDataContext)
        {
            _clientsContext = webAPIDataContext;
            _clientsContext.Database.EnsureCreated();
        }

        [HttpGet]
        public IQueryable<Client> GetClients()
        {
            return _clientsContext.customers;
        }

        [HttpGet("{id}")]
        public IQueryable<Client> GetSingleClient(int id)
        {
            return _clientsContext.customers.Where(x =>x.customerNumber == id);
        }

        [HttpPost]
        public ActionResult<Client> PostClient(Client item)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutClient(long id, Client item)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteClient(long id)
        {
            return Ok();
        }
    }
}
