import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron/"
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
    state = {
        results: [],
        search: "",
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.search)
            .then(res => {
                console.log(res.data)
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.items });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <b><h1 className="text-center text-white"><i className="fas fa-search"></i>   Search for a book </h1></b>
                </Jumbotron>

                <form className="search container">
                    <div className="form-group mb-5">
                        <b><label className="text-primary" htmlFor="book">Book Name:</label></b>
                        <input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="book"
                            list="books"
                            type="text"
                            className="form-control"
                            placeholder="Enter a book"
                            id="book"
                        />
                        <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary mt-3 mb-5">
                            Search 
                        </button>
                        <div id="books">
                            {this.state.results.map(book => (
                                <div value={book} key={book}>
                                    <hr></hr>
                                    <h2 className="text-center text-primary mt-2">{book.volumeInfo.title}</h2>
                                    <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No author listed"}</p>
                                    <img className="rounded mx-auto d-block" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "No Image Listed"}></img>
                                    <p>To view a preview of the book, <a href={book.volumeInfo.previewLink} target="_blank">Click Here.</a></p>
                                    <p>Description: {book.volumeInfo.description}</p>
                                    <button className="btn btn-primary rounded mx-auto d-block mb-5" onClick={API.saveBook(book)}>Save Book</button>
                                    
                                </div>
                            ))}
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
