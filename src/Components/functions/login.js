import axios from 'axios';

export const loginUser = async(userData) =>{
    await axios.post(`${process.env.REACT_APP_API}/api/auth`,userData)
}