import React from "react";
import "./App.css";
import ProfilPhoto from "./Profil/ProfilPhoto.js";
import FullName from "./Profil/FullName.js";
import Adress from "./Profil/Adress.js";
import { Button } from "react-bootstrap";
import "./style.css";
const App = () => {
  return (
    <div className="main">
      <FullName />
      <Adress />
      <ProfilPhoto />
      <Button variant="primary" size="lg" block>
        <img
          src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg"
          alt="facebook" 
        />
        Contact Facebook
      </Button>
      <Button variant="secondary" size="lg" block >
        <img
          src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png"
          alt="linkedin" 
        />
        Contact Linkedin
      </Button>
    </div>
  );
};
export default App;
