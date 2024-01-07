
import axios from "axios";

const axiosConn = require("axios");

const fetchGames = async (searchTerm = "", pageSize = 20) => {
  const options = {
    method: "GET",
    url: "https://rawg-video-games-database.p.rapidapi.com/games?key=979c11dea69548709ad941d3a96b2c85",
    headers: {
      "X-RapidAPI-Key": "e9335c9d74mshc1de2f919abf4cfp110e5ejsn3cb322b33f68",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
    params: {
      search: searchTerm,
      page_size: pageSize,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.results);
    return response.data.results;

  } catch (error) {
    console.error("error u axiosu " + error);
    return null;
  }
};

export default fetchGames;
