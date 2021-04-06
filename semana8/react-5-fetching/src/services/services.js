import axios from "axios";

const endpoint = "https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=31d4104a52ad4a5a8bcbd3148f5f46ea&language=es&q=";

export const getNewsByTag = async (tag = "facebook") => {
  const rpta = await axios.get(endpoint + tag);
  return rpta;
}