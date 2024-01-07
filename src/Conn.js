
import axios from "axios";

const axiosConn = require("axios");

const apiKey = process.env.REACT_APP_API_KEY;
const secKey = process.env.REACT_APP_SEC_KEY;

const fetchGames = async (searchTerm = "", pageSize = 20) => {
  const options = {
    method: "GET",
    url: `https://rawg-video-games-database.p.rapidapi.com/games?key=${apiKey}`,
    headers: {
      "X-RapidAPI-Key": secKey,
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
    params: {
      search: searchTerm,
      page_size: pageSize,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(options);
    console.log(response.data.results);
    return response.data.results;

  } catch (error) {
    console.error("error u axiosu " + error);
    return null;
  }
};

export default fetchGames;
