import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Queries Google Books API
    searchBooks: function(query) {
        return axios.get(BASEURL + query );
    },
    getAllBooks(){
        return axios.get("/api/books/saved")
    },
    saveBook(book){
        return axios.post("/api/books/saved", book)
    },
    getBook: function (id){
        return axios.get("/api/books/:id")
    },
    deleteBook: function (id){
        return axios.delete("/api/books/:id")
    },
   
};

