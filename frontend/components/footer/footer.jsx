import React from "react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { FaAngellist } from 'react-icons/fa';



class Footer extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div className="footer">
                <div className="footer-left">
                    <Link to='/'><img src={window.logo} alt="tripaide" className="footer-logo"/></Link>
                    <div>
                        <div className="copyright">&copy; 2022 TripAide | Evie Zeng | All rights reserved.</div>
                        <div className="footer-skill">
                            <span>JavaScript</span>
                            <span>Ruby on Rails</span>
                            <span>React</span>
                            <span>Redux</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-project">
                        <span>Other Projects: </span>
                        <span><a href="https://evieeee123.github.io/catch_jerry" target="_blank" rel="noopener noreferrer">Catch Jerry</a></span>
                        <span><a href="https://meal-in.herokuapp.com" target="_blank" rel="noopener noreferrer">Meal'in</a></span>
                    </div>
                    <div className="footer-social-icon">
                        <span><a href="https://www.linkedin.com/in/evie-zeng-863a3622a/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className="footer-linkedin" /></a></span>
                        <span><a href="https://github.com/evieeee123" target="_blank" rel="noopener noreferrer"><ImGithub className="footer-github" /></a></span>
                        <span><a href="https://angel.co/u/evie-zeng" target="_blank" rel="noopener noreferrer"><FaAngellist className="footer-github"/></a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;