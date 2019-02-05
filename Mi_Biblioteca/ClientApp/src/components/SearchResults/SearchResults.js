import React from 'react';
import { Container, Col } from 'react-bootstrap';

class SearchResults extends React.Component {
    render() {
        const {booksDetails} = this.props
        return (
            <div className="text-center">
                <Col xs={6} md={4}>
                    <img src={booksDetails.volumeInfo.imageLinks.thumbnail}/>
                <h4>{booksDetails.volumeInfo.title}</h4>
                    <h5>{booksDetails.volumeInfo.categories}</h5>
                    <button className="btn btn-default btn-sm glyphicon glyphicon-bookmark pull-left" ></button>
                    <button className="btn btn-default btn-sm glyphicon glyphicon-bookmark pull-right" ></button>
                    
                </Col>
            </div>
            )
    }
}

export default SearchResults;
