import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Grid from "../components/Grid";
import List from "../components/List";
import Nav from "../components/Nav";

class saved extends Component{

    state={
        results =[],
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
        API.getBooks()
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
                <Nav />
                <div>
                    {this.state.map( state.results)}
                    <List className="data-block"></List>
                
                </div>
            </Grid>
        )

    }

};

export default saved;