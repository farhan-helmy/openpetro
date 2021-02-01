import axios from 'axios';

export default {
    async register() {
        let res = await axios.post("http://localhost:3000/users");
        return res.data;
    }
}