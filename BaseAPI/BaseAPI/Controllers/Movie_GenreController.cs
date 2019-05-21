using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BaseAPI.Models;

namespace BaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Movie_GenreController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public Movie_GenreController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Genre
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Genre>>> Getmovie_genre()
        {
            return await _context.movie_genre.Include(x => x.genre).Include(y => y.movie).ToListAsync();
        }

        // GET: api/Movie_Genre/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Genre>> GetMovie_Genre(int id)
        {
            var movie_Genre = await _context.movie_genre.FindAsync(id);

            if (movie_Genre == null)
            {
                return NotFound();
            }

            return movie_Genre;
        }

        // PUT: api/Movie_Genre/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Genre(int id, Movie_Genre movie_Genre)
        {
            if (id != movie_Genre.g_genreID)
            {
                return BadRequest();
            }

            _context.Entry(movie_Genre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_GenreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movie_Genre
        [HttpPost]
        public async Task<ActionResult<Movie_Genre>> PostMovie_Genre(Movie_Genre movie_Genre)
        {
            _context.movie_genre.Add(movie_Genre);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_GenreExists(movie_Genre.g_genreID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Genre", new { id = movie_Genre.g_genreID }, movie_Genre);
        }

        // DELETE: api/Movie_Genre/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Movie_Genre>> DeleteMovie_Genre(int id)
        {
            var movie_Genre = await _context.movie_genre.FindAsync(id);
            if (movie_Genre == null)
            {
                return NotFound();
            }

            _context.movie_genre.Remove(movie_Genre);
            await _context.SaveChangesAsync();

            return movie_Genre;
        }

        private bool Movie_GenreExists(int id)
        {
            return _context.movie_genre.Any(e => e.g_genreID == id);
        }
    }
}
