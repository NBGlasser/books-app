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

  deleteBook = id => {
    const book = this.state.results.find(book => book.key = id );
    console.log(this.state.results)
    API.deleteBook(book)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-primary">Saved Books</h1>
        </Jumbotron>
        {console.log("results state", this.state.results)}

        <div id="books" className="container px-5">
          {this.state.results.map(book => {
            // keyCount++;
            return (
            <div value={book} >
              <hr></hr>
              <h2 className="text-center text-primary mt-2">{book.title}</h2>
              <p>Author: {book.author}</p>
              <img className="rounded mx-auto d-block" src={book.image}></img>
              <p>Description: {book.description}</p>
              <div><a href={book.link} target="_blank"><button className="btn btn-info rounded mx-auto d-block mb-4">Book preview</button></a>
              <button className="btn btn-info rounded mx-auto d-block mb-4" onClick={() => this.deleteBook(this.state.title)}>Delete Book</button></div>
            </div>
            )
          })}
        </div>
      </div>)

  }

};

export default Saved;