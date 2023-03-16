import axios from "axios";

export const fetchUsers = async (page, size) => {
    const response = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`
    );
    return response.data.list;
};
