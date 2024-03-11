import api from "./apiConfig.js";

export const getJokes = async () => {
    try {
        const response = await api.get("/jokes");
        return response.data;
    } catch (error) {
        console.error("Error Getting all Jokes: ", error);
    }
};

export const getJoke = async (id) => {
    try {
        const response = await api.get(`/jokes/${id}`)
        return response.data;
    } catch (error) {
        console.error("Error Getting Joke: ", error);
    }
};

export const createJoke = async (jokeData) => {
    try {
        const response = await api.post("/jokes", jokeData);
        return response.data;
    } catch (error) {
        console.error("Error Creating Joke: ", error);
    }
};

export const editJoke = async (id, jokeData) => {
    try {
        const response = await api.put(`/jokes/${id}`, jokeData);
        return response.data;
    } catch (error) {
        console.error("Error Updating Joke: ", error);
    }
};

export const deleteJoke = async (id) => {
    try {
        const response = await api.delete(`/jokes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error Deleting Joke: ", error);
    }
};
