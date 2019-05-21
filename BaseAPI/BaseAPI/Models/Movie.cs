using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BaseAPI.Models
{
    public class Movie
    {
        [Key]
        public int movieID { get; set; }
        public string movieTitle { get; set; }
        public string movieDesc { get; set; }
        public string movieReleaseDate { get; set; }
        public string movieRating { get; set; }

        List<Genre> movieGenres { get; set; }

        public Movies Get(List<Genre> g, List<GenreMovie> gm)
        {
            var first = gm.Where(x => x.m_movieID == this.movieID).ToList();
            var genres = g.Where(x => first.Select(y=>y.g_genreID).Contains(x.genreID)).ToList();

            return new Movies
            {
                movieID = this.movieID,
                movieTitle = this.movieTitle,
                movieDesc = this.movieDesc,
                movieReleaseDate = this.movieReleaseDate,
                movieRating = this.movieRating,
                movieGenres = genres
            };
        }
    }
}
