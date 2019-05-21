using BaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

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
            var genre = _context.genre.ToList();
            var genreMovie = _context.movie_genre.ToList();

            return _context.movie.Select(x => x.Get(genre, genreMovie));
        }
    }
}
