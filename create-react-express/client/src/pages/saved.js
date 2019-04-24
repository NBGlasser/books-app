import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Grid from "../components/Grid";
import List from "../components/List";
import Nav from "../components/Nav";

class saved extends Component{

    state={
        results =[],

    }

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