using System.ComponentModel.DataAnnotations;

namespace BaseAPI.Models
{
    public class Client
    {
        [Key]
        public int customerNumber { get; set; }
        public string customerName { get; set; }
        public string contactLastName { get; set; }
        public string contactFirstName { get; set; }
        public string phone { get; set; }
        public string addressLine1 { get; set; }
        public string addressLine2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string postalCode { get; set; }
        public string country { get; set; }
        public string salesRepEmployeeNumber { get; set; }
        public decimal? creditLimit { get; set; }
    }
}
