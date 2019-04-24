import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"

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
        API.search(this.state.search)
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
                <Nav />
                <h1>Search for a book</h1>
                <form className="search">
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
                        <datalist id="books">
                            {this.state.books.map(book => (
                                <option value={book} key={book} onClick={API.post(book)}>
                                SAVE BOOK
                                </option>
                            ))}
                        </datalist>
                        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
