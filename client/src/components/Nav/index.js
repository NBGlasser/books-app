import React from "react";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark pt-2 pb-2">
        <i className="fas fa-book fa-2x ml-2 text-primary"></i><a className="navbar-brand ml-2 mr-5 text-white">Books-App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link text-white" href="/"><i className="fas fa-home fa-lg text-primary mr-1"></i> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" href="Saved"><i className="fas fa-book-reader fa-lg text-primary mr-2 ml-3"></i>Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Nav;