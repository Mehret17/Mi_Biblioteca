using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Mi_Biblioteca.Models;
using Microsoft.Extensions.Configuration;

namespace Mi_Biblioteca.DataAccess
{
    public class BooksItemStorage
    {
        // private IConfiguration config;

        private readonly string ConnectionString;

        public BooksItemStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        //public void addBookToLibrary(OrderLines orderLine)
        //{
        //    using (var connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();

        //        connection.Execute(@"insert into OrderLines(OrderId, ProductId) values (@OrderId,@ProductId)", orderLine);
        //    }
        //}

         public void addBookToLibrary(MyLibBooksItem bookitem)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"INSERT INTO BooksItem(title, authors, description, categories, ImageLink, userId)
                                     values (@title, @authors, @description, @categories, @ImageLink, @userId)", bookitem);
                                      
            }
        }

        public void addBookToWishList(WishBooksItem wishbookitem)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"INSERT INTO BooksItem(title, authors, description, categories, ImageLink, wantToRead)
                                     values (@title, @authors, @description, @categories, @ImageLink,  @wantToRead)", wishbookitem);

            }
        }
    }
}
