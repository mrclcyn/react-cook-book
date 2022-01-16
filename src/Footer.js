import { Link } from "react-router-dom";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from 'react-bootstrap-icons';
import {Twitter} from 'react-bootstrap-icons'
import { Youtube } from "react-bootstrap-icons";

const Footer = () => {
    return (
            <div>
                <div className="container p-0">
                    <div classNames="col-lg-12 ">
                        <ul className=" list-unstyled list-inline text-right ">
                        
                            <a rel={'external'} href={"https://www.facebook.com"}><li className="fab fa-facebook" style={{ fontsize:'30px', color:'#1E8449'  }}><Facebook></Facebook></li></a> 
                            
                            <a rel={'external'} href={"https://www.instagram.com"}><li className="fab fa-instagram" style={{ fontsize: '30px', color:'#1E8449'}}><Instagram></Instagram></li></a> 
                            
                            <a rel={'external'} href={"https://www.twitter.com"}><li className="fab fa-twitter-square" style={{ fontsize: '30px', color: '#1E8449 '}}><Twitter></Twitter></li></a>
                            
                            <a  rel={'external'} href={"https://www.youtube.com"}><li className="fab fa-youtube-square" style={{fontsize: '30px', color: '#1E8449 '}}><Youtube></Youtube></li></a> 
                        </ul>
                    </div>
                </div>
                    
                <div className="container">
                    <div className="col-lg-12 text-left p-1">
                            <ul className=" list-unstyled list-inline" style={{paddingleft: '10px', paddingright: '10px'}}>
                                <li className="list-inline-item">© Copyright 2021</li>
                                <li className="list-inline-item">All Rights Reserved by Cook Book</li>
                                <Link to="/tac"className="text-black"><li className="list-inline-item">Terms and conditions </li></Link>
                            </ul>
                    </div>
                </div>
            </div>

        

    )
}

export default Footer;