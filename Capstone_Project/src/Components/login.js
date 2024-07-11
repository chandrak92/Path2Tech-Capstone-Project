import React from 'react';
// import axios from 'axios';

function Authlog(){
    return(
        <div class="card">
          <h4>Member Login</h4>
          <form action=" " method="post" name="theForm" id="theForm">
            <input name="client_id" type="hidden" value="web"></input>
            <input name="return" type="hidden" value=""></input>
              <table>
                <tbody>
                  <tr class="email">
                    <td class="label"><label for="email">E-Mail:</label></td>
                    <td class="input"><input type="email" name="email" id="email" autocomplete="email" value="" required="" autofocus=""></input></td>
                  </tr>
                  <tr class="password">
                    <td class="label"><label for="password">Password:</label></td>
                    <td class="input"><input name="password" type="password" id="password" autocomplete="current-password" required=""></input></td>
                  </tr>
                  <tr class="remember">
                    <td></td>
                    <td>
                      <input type="checkbox" name="remember" value="yes" id="checkbox"></input>
                      <label for="checkbox">Remember my E-mail</label>
                    </td>
                  </tr>
                  <tr class="buttons">
                    <td></td>
                    <td>
                      <button type="submit" class="loginbtn" name="action" value="login">Login</button>
                      <button type="submit" class="signupbtn" name="action" value="signup">Sign-Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </form>
          <a class="forgot" href="/reset">Forgot your password?</a>
        </div>
    )
}

export default Authlog