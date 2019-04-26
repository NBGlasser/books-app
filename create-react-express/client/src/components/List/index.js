import React from "react";

function List(props){
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.author}</li>
            <li>{props.image}</li>
            <li>{props.description}</li>
            <li>{props.link}</li>
        </ul>
    )
}

export default List;