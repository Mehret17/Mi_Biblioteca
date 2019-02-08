import React from 'react';
import { Container, Col } from 'react-bootstrap';

class SearchResults extends React.Component {
    state = {
        Title: 'Title',
        Author: 'Author',
        Category: 'Category',
        Description: 'Description'
    }

    render() {
        const { booksDetails } = this.props
        const { Title, Author, Category, Description } = this.state;
        const saveToLibrary = e => {
            this.props.saveBook(this.props.booksDetails)
        }

        return (
            <div className="text-center">
                <Col xs={6} md={4}>
                    <img src={booksDetails.volumeInfo.imageLinks.thumbnail}/>
                    <h4><strong>Title:</strong> {booksDetails.volumeInfo.title}</h4>
                    <h5><strong>Author:</strong> {booksDetails.volumeInfo.authors}</h5>
                    <h5><strong>Category:</strong> {booksDetails.volumeInfo.categories}</h5>
                    <h5>{booksDetails.volumeInfo.description}</h5>
                    <button className="btn btn-default btn-sm glyphicon glyphicon-bookmark pull-left" onClick={saveToLibrary} ></button>
                  
                    
                </Col>
            </div>
            )
    }
}

export default SearchResults;
