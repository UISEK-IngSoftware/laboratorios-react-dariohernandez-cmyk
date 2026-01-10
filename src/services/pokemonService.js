import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:8000/api";

export const fetchPokemonData = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemon`);
  console.log(response.data);
  return response.data;
};
