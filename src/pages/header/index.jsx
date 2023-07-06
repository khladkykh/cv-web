import "./style.css"
import { LinkedIn, GitHub, Facebook } from "@mui/icons-material";
import HeaderImg from "../../assets/header.png"

const Header = () => {

    return(
        <div className="cv__header" data-section id="home">
            <div className="cv__header-content">
                <h1 className="gradient__text">Kateryna Hladkykh</h1>
                <h2>Junior Frontend Developer</h2>
                <ul>
                    <li>Proficient in HTML, CSS, and React</li>
                    <li>Skilled in Responsive Web Design</li>
                    <li>Experienced in Modern Frontend Frameworks</li>
                    <li>Having solid Product Owner background, able to grasp the big picture of product development, including business goals, market trends and project requirements</li>
                    <li>Bachelor's degree in Computer Science</li>
                    <li>Allowed to work in NL (residence permit)</li>
                </ul>

                <div className="cv__header-content_media">
                    <a href="https://www.linkedin.com/in/kateryna-hladkykh/"><LinkedIn sx={{ fontSize: 30, background: "linear-gradient(to right, #9c27b0 0%, #ff5722 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent" }}/></a>
                    <a href="https://github.com/khladkykh"><GitHub sx={{ fontSize: 30 }}/></a>
                    <a><Facebook sx={{ fontSize: 30 }}/></a>
                </div>
            </div>

            <div className="cv__header-img"/>
        </div>
    )
}

export default Header;