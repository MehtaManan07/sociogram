import Axios from "axios"

export const getProfile = (token,id) => {
    return Axios.get(`/api/user/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => {
        console.log(res)
        return res.data
    }).catch(err => {
        console.log(err);
        return err.response.data
    })
}