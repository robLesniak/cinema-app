using BaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace BaseAPI.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private DataBaseContext _movieContext;
        public MovieController(DataBaseContext webAPIDataContext)
        {
            _movieContext = webAPIDataContext;
            _movieContext.Database.EnsureCreated();
        }

        [HttpGet]
        public IQueryable<Movie> GetMovies()
        {
            try {

              //  var ss2 = _movieContext.movie_genre.ToList();

           //    var ss = _movieContext.genre;
                return _movieContext.movie.Include(x => x.genre);
            }
            catch (Exception o)
            {


            }

            return null;
            }
    }
}
