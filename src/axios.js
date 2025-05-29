import axios from 'axios'

const instance = axios.create({
    baseURL:'https://newairbnbbackend-2c630f16ea66.herokuapp.com/8000/api/user'
});
export default instance
