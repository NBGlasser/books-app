import React from "react";

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-dark mb-5 pt-2 pb-2">
        <i class="fas fa-book fa-2x ml-2 text-primary"></i><a class="navbar-brand ml-2 mr-5 text-white">Books-App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link text-white" href="/"><i class="fas fa-home fa-lg text-primary mr-1"></i> Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="Saved"><i class="fas fa-book-reader fa-lg text-primary mr-2 ml-3"></i>Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Nav;