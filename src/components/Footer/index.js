import React from "react";
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="content">
                <img  className="imagem1" src="images/logoUFLA.png" alt="ufla"></img>
                <img  className="imagem2" src="images/logoUFT.png" alt="uft"></img>
            </div>
            <p className="text">O desenvolvimento da ciência é muito importante para todos nós!</p>
        </div>
    )
}

export default Footer;