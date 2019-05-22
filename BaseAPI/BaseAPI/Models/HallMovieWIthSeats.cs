using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace BaseAPI.Models
{
    public class HallMovieWIthSeats
    {
        public int id { get; set; }
        public int hallID { get; set; }
        public int movieID { get; set; }
        public DateTime seanceDate { get; set; }

        public List<Seat> seatsBooked { get; set; }


    }
}
