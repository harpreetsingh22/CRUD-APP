import axios from 'axios';


const URL='http://localhost:8000/users'   ;


export const getUsers=async(id)=>{
    id = id || '';
    return await axios.get(`${URL}/${id}`);
     
}

export const addUsers=async(user)=>{
    return await axios.post(`${URL}/add`,user)  ;
}

export const editUser=async(id,user)=>{
    return await axios.put(`${URL}/${id}`, user)
}


export const deleteUser = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}