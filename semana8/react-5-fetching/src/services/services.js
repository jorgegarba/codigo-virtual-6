import axios from "axios";

const endpoint = "https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=31d4104a52ad4a5a8bcbd3148f5f46ea&language=es&q=";
const enpointPopular = "https://newsapi.org/v2/top-headlines?apiKey=31d4104a52ad4a5a8bcbd3148f5f46ea&category=general";

export const getNewsByTag = async (tag = "facebook") => {
  const rpta = await axios.get(endpoint + tag);
  return rpta;
}

export const getNewsPopular = async () => {
  const rpta = await axios.get(enpointPopular);
  return rpta;
}