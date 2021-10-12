import axios from 'axios';

export const createUser = async(userData) =>{
    await axios.post(`${process.env.REACT_APP_API}/api/register`,userData)
}