using System;
using System.Collections.Generic;

namespace webApi.Models
{
    public partial class Usuario
    {
        public int Idusuario { get; set; }
        public string Nomeusuario { get; set; }
        public string Username { get; set; }
        public bool Isativo { get; set; }
    }
}
