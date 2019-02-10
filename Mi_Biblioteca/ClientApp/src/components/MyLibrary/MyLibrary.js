import React from 'react';
import getBooks from '../../APICalls/BooksRequest';

class MyLibrary extends React.Component {

    state = {
        myLibrary: []
    }

    componentDidMount = () => {
        getBooks
            .getMyLibrary()
            .then((result) => {
                this.setState({myLibrary : result})
            })
            .catch((err) => {
                console.error("error in getting my library", err)
            })
    }

    render() {
        const myLibraryList = this.state.myLibrary.map(book => {
            return (
                <div key={book.id} className='well well-sm'>
                    <img src={book.imageLink} />
                    <h5>Title: {book.title}</h5>
                    <h5>Author: {book.authors}</h5>
                 
                </div>
            );
        }).reverse();
       
        return (
            <div>
                {myLibraryList}
            </div>
            )
    }
}

export default MyLibrary;
