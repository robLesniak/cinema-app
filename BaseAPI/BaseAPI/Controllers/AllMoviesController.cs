using BaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BaseAPI.Data;

namespace BaseAPI.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class AllMoviesController : ControllerBase
    {
        private DataBaseContext _context;
        public AllMoviesController(DataBaseContext webAPIDataContext)
        {
            _context = webAPIDataContext;
            _context.Database.EnsureCreated();
        }

        [HttpGet]
        public IQueryable<Movies> GetAllMovies()
        {
            var result = new DataSource()
            {
                genreMovies = _context.movie_genre.ToList(),
                genre = _context.genre.ToList(),
                trailer = _context.trailer.ToList(),
                poster = _context.poster.ToList(),
                role = _context.role.ToList(),
                person = _context.person.ToList(),
            };

            return _context.movie.Select(x => x.Get(result));
        }
    }
}
