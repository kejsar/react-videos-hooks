import axios from "axios";

const KEY = "AIzaSyCD711-BOJzw2D27uY5oOF8npEhIxRKAdU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
