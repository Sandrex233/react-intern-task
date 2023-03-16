import axios from "axios";

const API_URL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

export const fetchUsers = async (page, size) => {
    try {
        const response = await axios.get(`${API_URL}/user/${page}/${size}`);
        return response.data.list;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchUserFriends = async (userId, page, size) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}/friends/${page}/${size}`);
        return response.data.list;
    } catch (error) {
        console.error(`Error fetching user ${userId} friends:`, error);
        throw error;
    }
};

export const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};