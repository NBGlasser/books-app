import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "./Jumbotron"
import { Col, Row, Container } from "./Grid";

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

    handleSaveBook = id => {
        const book = this.state.results.find(book => book.key = id)
        console.log("LOL hi", book)

        // event.preventDefault();
        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.previewLink,
        })

    }

    render() {

        let keyCount = -1;
        return (
            <div>
                <Jumbotron>
                    <b><h1 className="text-center text-white"><i className="fas fa-search"></i>   Search for a book </h1></b>
                </Jumbotron>

                <div className="search container pt-2 my-1">
                    <div className="form-group mb-4">
                        <b><label className="text-info" htmlFor="book">Book Name:</label></b>
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
                        <button onClick={this.handleFormSubmit} className="btn btn-info mt-3 mb-2">
                            Search
                        </button>
                    </div>
                </div>
                <div id="books" className="container px-5">
                    {this.state.results.map(book => {
                        keyCount++;
                        return (<div className="pb-1 mb-2" value={book} key={keyCount}>
                            <hr></hr>
                            <h2 className="text-center text-info mt-2">{book.volumeInfo.title}</h2>
                            <p className="text-center">Author: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No author listed"}</p>
                            <img className="rounded mx-auto d-block" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "No Image Listed"}></img>
                            <p>To view a preview of the book, <a className="text-info" href={book.volumeInfo.previewLink} target="_blank">Click Here.</a></p>
                            <p>Description: {book.volumeInfo.description}</p>
                            <button className="btn btn-info rounded mx-auto d-block mb-4" onClick={() => this.handleSaveBook(keyCount)}>Save Book</button>

                        </div>)
                    })}
                </div>

            </div>
        )
    }
}

export default Search;
