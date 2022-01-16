import {Facebook} from 'react-bootstrap-icons'
import { Instagram } from 'react-bootstrap-icons';
import {Twitter} from 'react-bootstrap-icons'
import { Youtube } from "react-bootstrap-icons";
import { Github } from 'react-bootstrap-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
            <footer className="bg-light text-center">
                    <div classNames="container p-4 pb-0">
                        <section className="mb-4">
                            <Facebook rel={'external'} href={"https://www.facebook.com"} style={{ padding: '0px', marginright: '3ßpx', }}></Facebook>
                            <Instagram rel={'external'} href={"https://www.instagram.com"}></Instagram> 
                            <Twitter rel={'external'} href={"https://www.twitter.com"}></Twitter>
                            <Youtube rel={'external'} href={"https://www.youtube.com"}></Youtube>
                            <Github rel={'external'} href={"https://www.youtube.com"}></Github> 
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
