import axios from "axios";

const axiosConn = require("axios");

const fetchGames = async (searchTerm ='', pageSize = 20) => {
  const options = {
    method: "GET",
    url: 'https://www.freetogame.com/api/games',
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
