import axios from 'axios';

async function postData(url, data) {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors (e.g., display an error message to the user)
    }
}

export default postData;
