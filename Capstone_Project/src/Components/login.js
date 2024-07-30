import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import '../Style/login.css';

function Authlog(){
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post("/login",{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      } else {
        setData({});
        navigate("/")
      }
    } catch(error) {
      
    }
  }
  // if else statement if someone is logged in to display or not display login card
  // await axios statement ot determine that the user has logged in
    return(
        <div className="card">
          <h4>Member Login</h4>
          <form onSubmit={loginUser} method="post" name="theForm" id="theForm">
            <input name="client_id" type="hidden" value="web"></input>
            <input name="return" type="hidden" value=""></input>
              <table>
                <tbody>
                  <tr className="email">
                    <td className="label"><label htmlFor="email">E-Mail:</label></td>
                    <td className="input"><input type="email" name="email" id="email" autoComplete="email" required="" autoFocus=""></input></td>
                  </tr>
                  <tr className="password">
                    <td className="label"><label htmlFor="password">Password:</label></td>
                    <td className="input"><input name="password" type="password" id="password" autoComplete="current-password" required=""></input></td>
                  </tr>
                  <tr className="remember">
                    <td></td>
                    <td>
                      <input type="checkbox" name="remember" value="yes" id="checkbox"></input>
                      <label htmlFor="checkbox">Remember my E-mail</label>
                    </td>
                  </tr>
                  <tr className="buttons">
                    <td></td>
                    <td>
                      <button type="submit" className="loginbtn" value="login">Login</button>
                      <button type="submit" className="signupbtn" value="signup">Sign-Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </form>
          <a className="forgot" href="/reset">Forgot your password?</a>
        </div>
    )
}

export default Authlog