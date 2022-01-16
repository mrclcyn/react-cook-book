import { Link } from "react-router-dom";
import { Facebook } from "react-bootstrap-icons";

import { Instagram } from 'react-bootstrap-icons';
import {Twitter} from 'react-bootstrap-icons'
import { Youtube } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
            <footer className="bg-light text-center text-white">
                    <div classNames="container p-4 pb-0">
                        <section className="mb-4">
                            <a rel={'external'} href={"https://www.facebook.com"}><i className="fab fa-facebook" style={{ fontsize:'30px', color:'#1E8449'  }}><Facebook></Facebook></i></a> 
                            <a rel={'external'} href={"https://www.instagram.com"}><i className="fab fa-instagram" style={{ fontsize: '30px', color:'#1E8449'}}><Instagram></Instagram></i></a> 
                            <a rel={'external'} href={"https://www.twitter.com"}><i className="fab fa-twitter-square" style={{ fontsize: '30px', color: '#1E8449 '}}><Twitter></Twitter></i></a>
                            <a rel={'external'} href={"https://www.youtube.com"}><i className="fab fa-youtube-square" style={{fontsize: '30px', color: '#1E8449 '}}><Youtube></Youtube></i></a> 
                        </section>
                    </div>
                    

                    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                            © 2022 Copyright:
                            <a className="text-white" href="https://cook-book.com/">Cook-Book</a>
                    </div>
            </footer>

        

    )
}

export default Footer;
