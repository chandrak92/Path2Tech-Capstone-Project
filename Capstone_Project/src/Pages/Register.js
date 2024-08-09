import React from "react";
import "../Style/register.css"

const Registration = ({ registerUser, userData, setUserData }) => {
   
    return(
        <section className="register-container">
            <p>Welcome</p>
            <section className="register-card">
                <form method="post" name="registerForm">
                    <h3>Sign Up</h3>
                    <table>
                        <tbody>
                            <tr className="reg-email">
                                <td className="label"><label htmlFor="email">Email:</label></td>
                                <td className="input"><input
                                type= "email"
                                name="email"
                                id="email"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                required></input></td>
                            </tr>
                            <tr className="reg-password">
                                <td className="label"><label htmlFor="password">Password:</label></td>
                                <td className="input"><input
                                type= "password"
                                name="password"
                                id="password"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                required></input></td>
                            </tr>
                            <tr className="reg-username">
                                <td className="label"><label htmlFor="username">Username:</label></td>
                                <td className="input"><input
                                type= "username"
                                name="userName"
                                id="username"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                required></input></td>
                            </tr>
                            <tr className="reg-firstname">
                                <td className="label"><label htmlFor="firstname">First Name:</label></td>
                                <td className="input"><input
                                type= "firstname"
                                name="firstName"
                                id="firstname"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                required></input></td>
                            </tr>
                            <tr className="reg-lastname">
                                <td className="label"><label htmlFor="lastname">Last Name:</label></td>
                                <td className="input"><input
                                type= "lastname"
                                name="lastName"
                                id="lastname"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                ></input></td>
                            </tr>
                            <tr className="reg-birthdate">
                                <td className="label"><label htmlFor="birthdate">Birth Date:</label></td>
                                <td className="input"><input
                                type= "birthdate"
                                name="birthDate"
                                id="birthdate"
                                onChange= {(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                                ></input></td>
                            </tr>
                            <tr className="reg-profileimage">
                                <td className="label"><label htmlFor="profile-image">Upload Image</label></td>
                                <td className="input"><input
                                type="file"
                                name="profileImage"
                                id="profile-image"
                                ></input></td>
                            </tr>
                            <tr>
                                <td className="reg-button">
                                    <button type="button" className="signup-btn" value="sign-up" onClick={registerUser}>Sign-Up</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        </section>
    )
}
export default Registration 