import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../components/css/Home.css";

function Home() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
    return (
       <div>
            <div class="container-login">
            <div class="row">
                <h2 class="title-reets">Acesse o Chat com a sua conta</h2>
             <hr/>
             </div>
             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group">
          <label></label>
          <input type="email"  class="form-control" id="email" placeholder="E-mail"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </div>
        <div class="form-group">
            <label></label>
            <input type="password"  class="form-control" id="password" placeholder="Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn-login btn-primary" onClick={login} >Login</button>
              </form>
              <h4 class="aviso-senha"><a href="#">Esqueceu a senha?</a></h4>
              <hr/>
              <button href="#" class="btn-nova-conta btn-primary" >Criar nova conta</button>
            </div>
            </div>
            </div>
     </div>
    );
  }
  
  export default Home;