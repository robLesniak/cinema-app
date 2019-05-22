using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BaseAPI.Models
{
    public class Role
    {
        [Key]
        public int roleID { get; set; }
        public string roleDesc { get; set; }
        public int m_movieID { get; set; }
        public int p_personID { get; set; }
    }
}
