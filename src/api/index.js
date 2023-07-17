import axios from "axios";

const baseUrl = 'https://api.rawg.io/api';
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchGames = async (params = {}) => {
    const endPoint = `${baseUrl}/games?key=${apiKey}`;
    try{
        const response = await axios.get(endPoint, {
            params: params
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}