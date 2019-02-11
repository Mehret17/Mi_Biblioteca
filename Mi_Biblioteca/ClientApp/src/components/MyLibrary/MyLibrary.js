import React from 'react';
import getBooks from '../../APICalls/BooksRequest';

class MyLibrary extends React.Component {

    state = {
        myLibrary: []
    }

    componentDidMount = () => {
       this.getBooksItem();
    }

    getBooksItem = () => {
        getBooks
            .getMyLibrary()
            .then((result) => {
                this.setState({ myLibrary: result })
            })
            .catch((err) => {
                console.error("error in getting my library", err)
            })
    }

    deleteBooksItem = (Pk_id) => {
        //    const id = e.target.dataset.id;
        getBooks
            .deleteBook(Pk_id)
            .then(() =>
            {
                this.getBooksItem();
            })
            .catch((err) => {
                console.error('error in delete request', err)
            })
    }

    render() {
        const myLibraryList = this.state.myLibrary.map((book, i)=> {
            return (
                <div className="col-xs-6 col-md-3" key={i}>
                    <div className="thumbnail">
                        <img src={book.imageLink} />
                        <div className="caption">
                            <h5>Title: {book.title}</h5>
                            <h5>Author: {book.authors}</h5>
                            <button className="btn btn-danger btn-sm glyphicon glyphicon-trash" onClick={() => this.deleteBooksItem(book.pk_Id)}></button>
                        </div>
                    </div>
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
