import logo from './logo.svg';
import '../src/App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <div className="box-1">
            <h1>Learn to code by watching others</h1>
            <p> See how experienced developers solve problems in real-time. 
                Watching sripted tutorials is great, but understanding how
                developers this is unvaluable</p>
      </div>
      <div className="box-2">
        <div className="BTN">
                <button class="fbutton">Try it free days <span>then $20/mo. thereafter</span></button>
        </div>
        <div className="Info">
          <form className=" form">
            <input name=" Fname" type="text" placeholder="First Name" required/>
            <input name=" Lname" type="text" placeholder="Last Name"required/>
            <input name=" EmailAdress" type="email" placeholder="Email Address" required/>
            <input name=" Password" type="password" placeholder="Password" required/>
            <input class="submit" type="submit" value="CLAIM YOUR FREE TRIAL"required/>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services </span></p>
          </form>
        </div>
      </div>
              
    </div>             
    
  );
}


export default App;
