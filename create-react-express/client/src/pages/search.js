import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron/"

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
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
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
                    <div className="form-group">
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
                                    <h2>{book.title}</h2>
                                    <p>Author: {book.author}</p>
                                    <img src={book.img}></img>
                                    <a href={book.link}>Link</a>
                                    <p>{book.description}</p>
                                    <button onClick={API.saveBook(book)}>Save Book</button>
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
