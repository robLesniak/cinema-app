using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BaseAPI.Models
{
    public class Movies
    {
        public int movieID { get; set; }
        public string movieTitle { get; set; }
        public string movieDesc { get; set; }
        public string movieReleaseDate { get; set; }
        public string movieRating { get; set; }
        public List<Genre> movieGenres { get; set; }
       
    }
}
