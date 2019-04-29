import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import List from "../../components/List";
import Jumbotron from "../../components/JumbotronSaved"
import Nav from "../../components/Nav";

class Saved extends Component {

  state = {
    results: [],
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getAllBooks()
      .then(res => {
        this.setState({
          results: res.data
        })
      })
      .catch(err => console.log(err));
  };

  deleteBook = bookTitle => {
    const book = this.state.results.find(book => book.title = bookTitle);
    // console.log(this.state.results)
    // console.log(book)
    console.log(book.title)
    console.log(book._id)
    API.deleteBook(book.title)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-white">Saved Books</h1>
        </Jumbotron>
        {console.log("results state", this.state.results)}

        <div id="books" className="container px-5">
          {this.state.results.map(book => {
            // keyCount++;
            return (
              <div className="pb-2 mb-2 " value={book} >
                <hr></hr>
                <h2 className="text-center text-info mt-2">{book.title}</h2>
                <p className="text-center">Author: {book.author}</p>
                <img className="rounded mx-auto d-block" src={book.image}></img>
                <p className="pt-4">Description: {book.description}</p>
                <div className="buttonContainer text-center">
                  <a href={book.link} target="_blank">
                    <button className="btn btn-info rounded mx-2 mb-4 bookButton">Book preview</button>
                  </a>                  
                  <button className="btn btn-info rounded mx-2 mb-4 bookButton" onClick={() => this.deleteBook(book.title)}>Delete Book</button>
                </div>
              </div>

            )
          })}
        </div>
      </div>)

  }

};

export default Saved;