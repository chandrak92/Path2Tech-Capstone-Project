import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"

const Registration = () => {
    // Registration Logic
    const navigate = useNavigate();
    const [data, SetData]= useState({
        firstName:"",
        userName:"",
        email: "",
        password: "",
    })
    const registerUser = async (e) => {
        e.preventdefault();
        const {firstName, userName, email, password} = data
        try {
            const {data} = await axios.post("/register", {
                firstName, userName, email, password
            })
            if(data.error) {
                toast.error(data.error);
            } else {
                SetData({})
                toast.success("Login Successful. Welcome!");
                navigate("/home");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <p>Welcome</p>
    )
}
export default Registration 