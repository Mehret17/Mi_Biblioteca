import React from 'react';
import getBooks from '../../APICalls/BooksRequest';
//import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import BookResults from '../BooksResult/BookResults';

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
                    <BookResults
                        key={book.id}
                        booksDetails={book}
                    />
                )
            })
        }
        return (
            <div className="Global">
                <h2>Book Explorer!</h2>
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