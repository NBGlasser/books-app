import axios from "axios";

export default {
    deleteBook: function (){
        return axios.delete("/api/books/:id")
    },
    getBooks(){
        return axios.get("/api/books")
    }

}