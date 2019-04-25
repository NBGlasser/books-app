import React from "react";

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-dark mb-5">
        <a class="navbar-brand ml-5 mr-5 text-white">Books-App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-white mr-2" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="Saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Nav;