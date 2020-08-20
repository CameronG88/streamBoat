import axios from "axios";

export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },
    //Get all artists
    getArtists: function() {
        return axios.get("api/artists")
    },
    //Get the artists with a specific ID
    getArtist: function(id) {
        return axios.get("api/artists/" + id)
    },
    deleteArtist: function(id) {
        return axios.delete("api/artists" + id);
    },
    saveArtist: function(artistData) {
        return axios.post("api/artists", artistData)
    }
}