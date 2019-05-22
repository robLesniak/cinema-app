using BaseAPI.Data;
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

        public Movies Get(DataSource data)
        {
            var helper = data.genreMovies.Where(x => x.m_movieID == this.movieID).ToList();
            var genres = data.genre.Where(x => helper.Select(y => y.g_genreID).Contains(x.genreID)).ToList();
            var trailers = data.trailer.Where(x => x.t_movieID == this.movieID).ToList();
            var posters = data.poster.Where(x => x.p_movieID == this.movieID).ToList();
            var role = data.role.Where(x => x.m_movieID == this.movieID).ToList();
            var persons = data.person.Where(x => role.Select(y => y.p_personID).Contains(x.personID)).ToList();

            return new Movies
            {
                id = this.movieID,
                title = this.movieTitle,
                description = this.movieDesc,
                releaseDate = this.movieReleaseDate,
                rating = this.movieRating,
                genres = genres,
                trailers = trailers,
                posters = posters,
                role = role
            };
        }
    }
}
