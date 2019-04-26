import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import List from "../../components/List";
import Jumbotron from "../../components/JumbotronSaved"
import Nav from "../../components/Nav";

class saved extends Component {

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
    API.deleteBook(id)
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

        <div id="books">
          {this.state.results.map(book => {
            // keyCount++;
            return (
            <div value={book} >
              <hr></hr>
              <h2 className="text-center text-primary mt-2">{book.title}</h2>
              <p>Author: {book.author}</p>
              <img className="rounded mx-auto d-block" src={book.image}></img>
              <p>To view a preview of the book, <a href={book.link} target="_blank">Click Here.</a></p>
              <p>Description: {book.description}</p>
             
            </div>
            )
          })}
        </div>
      </div>)

  }

};

export default saved;