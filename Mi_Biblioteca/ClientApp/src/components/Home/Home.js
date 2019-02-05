import React from 'react';
import getBooks from '../../APICalls/BooksRequest';
//import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import SearchResults from '../SearchResults/SearchResults';
import "./Home.css";

class Home extends React.Component {
    state = {
        books: [],
        searchResult: '',
    }

    searchBooks = (e) => {
        if (e.key === 'Enter') {
            getBooks(this.state.searchResult)
                .then(results => {
                    this.setState({ books: results.items })
                })
                .catch(err => {
                    console.error('error in searching books', err)
                })
        }
    }

    searchInput = (e) => {
        this.setState({ searchResult: e.target.value });
    }
    render() {
        if (this.state.books) {
            this.booksComponent = this.state.books.map(book => {
                return (
                    <SearchResults
                        key={book.id}
                        booksDetails={book}
                    />
                )
            })
        }
        return (
            <div className="Home">
                <h2>Explore</h2>
                <input
                    type="text"
                    placeholder="Search for a book"
                    onChange={this.searchInput}
                    onKeyPress={this.searchBooks}
                />
                {this.booksComponent}
            </div>

        )
    }
}

export default Home;