import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const [userName, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName]= useState();
    const [birthDate, setBirthDate]= useState();
    const [email, setEmail]= useState();
    const [error, setError]= useState(false);
    const [loading, setLoading]= useState(false);
    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const response = await axios.get('http://localhost:4000/users/66a97d2fcfbd7dacd3512480');
                setFirstName(response.data.firstName);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
// if else statement to render profile
    return(
        <p>{firstName}</p>
    )
}
export default Profile