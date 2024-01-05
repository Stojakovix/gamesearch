import axios from "axios";

const axiosConn = require("axios");

const fetchGames = async (searchTerm ='', pageSize = 20) => {
  const options = {
    method: "GET",
    url: 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D',
    headers: {
      "X-RapidAPI-Key": "979c11dea69548709ad941d3a96b2c85",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
    params: {
      search: searchTerm,
      page_size:pageSize,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchGames;
