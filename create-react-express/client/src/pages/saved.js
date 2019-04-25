import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import Grid from "../components/Grid";
import List from "../components/List";
import Nav from "../components/Nav";

class saved extends Component{

    state={
        results: [],
        title: "",
        author: "",
        description: "",
        img: "",
        link: ""

    }

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getAllBooks()
          .then(res =>
            this.setState({ results: res.data, title: "", author: "", description: "", img: "", link: "" })
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

    render(){
        return(
          <Grid>
          {this.state.map(results => (
            <div>
              <List className="data-block"
                title={results.title}
                author={results.author}
                img={results.img}
                description={results.description}
                link={results.link}
              />
              <DeleteBtn onClick={() => this.deleteBook(results._id)} />
            </div>
          ))}
        </Grid>
  
        )

    }

};

export default saved;