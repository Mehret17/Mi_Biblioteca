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
    public class MyLibraryStorage
    {
        // private IConfiguration config;

        private readonly string ConnectionString;

        public MyLibraryStorage(IConfiguration config)
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

         public void addBookToLibrary(BooksItem bookitem)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                connection.Execute(@"INSERT INTO BooksItem(ID, title, authors, description, categories, MyLibraryId, WishListId, ImageLink)
                                     values (@ID, @title, @authors, @description, @categories, @MyLibraryId, @WishListId, @ImageLink)", bookitem);
                                      
            }
        }
    }
}
