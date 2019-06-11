using System;
using System.Collections.Generic;

namespace webApi.Models
{
    public partial class Produto
    {
        public int Idproduto { get; set; }
        public string Descproduto { get; set; }
        public string Unidproduto { get; set; }
        public bool Isativo { get; set; }
    }
}
