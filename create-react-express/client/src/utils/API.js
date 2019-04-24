import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "+intitle&key=AIzaSyBRJY6cbFl0IW1cAy0kLLzhhnYwutwEJ8U";

export default {
  // Queries Google Books API
    searchBooks: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },
    getAllBooks(){
        return axios.get("/api/books")
    },
    saveBook(){
        return axios.post("/api/books")
    },
    getBook: function (id){
        return axios.get("/api/books/:id")
    },
    deleteBook: function (id){
        return axios.delete("/api/books/:id")
    },
   
};

