import "./style.css";
import MainPhoto from "../../assets/main.jpg"

const About = () => {

    return(
        <div className="cv__about section__padding" data-section id="about">
            <h1>About <span className="gradient__text">Myself</span></h1>

            <div className="cv__about-photo">
                <img src={MainPhoto} alt="about-photo"/>
                <div className="cv__about-photo_circle"></div>
            </div>

            <p>Hey there! I'm a passionate Junior Frontend Developer who has been immersing oneself in the world of web development for nearly 2 years now. With a solid foundation in HTML, CSS, and React, I pay meticulous attention to detail in my designs. What sets me apart is my 4 years of valuable experience as a Product Owner, which has given me a unique perspective on delivering exceptional user experiences. I'm constantly eager to learn and stay up-to-date with the latest industry trends. I'm now seeking an opportunity to join a team of professionals where I can leverage my skills and make a real impact. Let's collaborate and create something extraordinary!</p>
            <div type="button" className="main__button">Read more</div>
        </div>
    )
}

export default About;