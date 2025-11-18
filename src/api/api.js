import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${apiKey}/`,
});

export const currencyConverter = async (fromCurrency, toCurrency, amount) => {
  try {
    const response = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
    return response.data.conversion_result;
  } catch (error) {
    console.error("Error fetching currency data:", error);
    throw error;
  }
};
