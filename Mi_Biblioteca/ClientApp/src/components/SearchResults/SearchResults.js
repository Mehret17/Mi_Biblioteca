import React from 'react';
//import {
//    Container, Col, Card, CardImg, CardText, CardBody,
//    CardTitle, CardSubtitle
//} from 'react-bootstrap';
//import { Card } from 'react-bootstrap/Card';

class SearchResults extends React.Component {
    //state = {
    //    Title: 'Title',
    //    Author: 'Author',
    //    Category: 'Category',
    //    Description: 'Description' 
    //}

    render() {
        const { booksDetails } = this.props
        //  const { Title, Author, Category, Description } = this.state;
        const saveToLibrary = e => {
            this.props.saveBook(this.props.booksDetails)
        }
        const saveToWishList = e => {
            this.props.saveWishListBook(this.props.booksDetails)
        }

        return (

            <div className="">
                <div className="col-xs-6 col-md-3">
                    <div className="thumbnail">
                        <img src={booksDetails.volumeInfo.imageLinks !== undefined ? booksDetails.volumeInfo.imageLinks.thumbnail : ''} />
                        <div class="caption">
                            <h4><strong>Title:</strong> {booksDetails.volumeInfo.title}</h4>
                            <h5><strong>Author:</strong> {booksDetails.volumeInfo.authors}</h5>
                            <h5><strong>Category:</strong> {booksDetails.volumeInfo.categories}</h5>
                            <span>
                            <button className="btn btn-default btn-sm glyphicon glyphicon-bookmark pull-left" onClick={saveToLibrary} ></button>
                            <button className="btn btn-default btn-sm glyphicon glyphicon-plus pull-right" onClick={saveToWishList} ></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}

export default SearchResults;
