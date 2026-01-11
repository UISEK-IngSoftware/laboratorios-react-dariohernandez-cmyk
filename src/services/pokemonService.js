import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:8000/api";

export const fetchPokemonData = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemon`);
  console.log(response.data);
  return response.data;
};

export const addPokemon = async (pokemon) => {
  const token = localStorage.getItem("access_token");
  const response = await axios.post(`${API_BASE_URL}/pokemon`, pokemon, {
    headers: {
      Authorization: `Bearer ${token}`,   
    },
  });
  return response.data;
}
export const deletePokemon = async (id) => {
  const token = localStorage.getItem("access_token");
  const response = await axios.delete(`${API_BASE_URL}/pokemon/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,   
    },
  });
  return response.data;
}