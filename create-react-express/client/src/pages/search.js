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
                this.setState({ results: res.data.items});
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                <b><h1 class="text-center text-white">Search for a book</h1></b>
                </Jumbotron>
                
                <form className="search container">
                    <div className="form-group mb-5">
                        <label htmlFor="book">Book Name:</label>
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
                        <div id="books">
                            {this.state.results.map(book => (
                                <div value={book} key={book}>
                                    <h2 className="text-center text-primary">{book.volumeInfo.title}</h2>
                                    <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No author listed"}</p>
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "No Image Listed"}></img>
                                    <p><a href={book.volumeInfo.previewLink}>Click Here </a>to view a priview of the book!</p>
                                    <p>Description: {book.volumeInfo.description}</p>
                                    <button className="btn btn-primary" onClick={API.saveBook(book)}>Save Book</button>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                        <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
