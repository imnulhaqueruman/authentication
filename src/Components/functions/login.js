import axios from 'axios';

export const loginUser = async(userData) =>{
    await axios.post('http://localhost:4000/api/auth',userData)
}