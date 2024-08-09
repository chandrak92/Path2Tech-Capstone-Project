import React from 'react';
//  import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import '../Style/login.css';

const Authlog = ({loginUser, loginData, setLoginData}) => {
  const navigate = useNavigate();

  //     // view inspect to review the data received on Front End
  //     // console.log(response);
  //     // console.log(response.data);
  //     if(response.error){
  //       toast.error(response.error)
  //     } else {
  //       setData({});
  //       navigate("/")
  //     }
  //   } catch(error) {
  //     console.log(error)
  //   }

  const goToSignUp = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return(
    <section className="card">
      <h4>Member Login</h4>
      <form method="post" name="theForm" id="theForm">
        <input name="client_id" type="hidden" value="web"></input>
        <input name="return" type="hidden" value=""></input>
          <table>
            <tbody>
              <tr className="email">
                <td className="label"><label htmlFor="email">E-Mail:</label></td>
                <td className="input"><input type="email" name="email" id="email" autoComplete="email" required="" onChange={(e) => setLoginData({...loginData, [e.target.name]: e.target.value})}autoFocus=""></input></td>
              </tr>
              <tr className="password">
                <td className="label"><label htmlFor="password">Password:</label></td>
                <td className="input"><input name="password" type="password" id="password" autoComplete="current-password" required="" onChange={(e) => setLoginData({...loginData, [e.target.name]: e.target.value})}></input></td>
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
                  <button type="button" className="loginbtn" value="login" onClick={loginUser}>Login</button>
                  <button type="button" className="signupbtn" value="signup" onClick={goToSignUp}>Sign-Up</button>
                </td>
              </tr>
            </tbody>
          </table>
      </form>
    </section>
  )
}

export default Authlog