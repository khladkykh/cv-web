import "./style.css"
import { ContactPhone, Email, LinkedIn, ArrowUpward } from "@mui/icons-material";

const Footer = () => {

    return(
        <footer className="section__padding" data-section id="contacts">
            <h1>Contact <span className="gradient__text">Me!</span></h1>
            <div className="cv__footer-content">
                <div className="cv__footer-content_data">
                    <div className="cv__footer-content_data-line">
                        <ContactPhone sx={{ fontSize: 40, color: "var(--color-text)" }}/>
                        <p>+ 31  6 17603289</p>
                    </div>
                    <div className="cv__footer-content_data-line">
                        <Email sx={{ fontSize: 40, color: "var(--color-text)"}}/>
                        <p>gladkihkv@gmail.com</p>
                    </div>
                    <div className="cv__footer-content_data-line">
                        <LinkedIn sx={{ fontSize: 40, color: "var(--color-text)" }}/>
                        <a href="https://www.linkedin.com/in/kateryna-hladkykh/"><p>linkedin.com/in/kateryna-hladkykh</p></a>
                    </div>
                </div>

                <div className="cv__footer-iconTop">
                    <a href="#"><ArrowUpward/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;