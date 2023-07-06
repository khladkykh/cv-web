import "./style.css"
import {ReactComponent as HtmlIcon} from "../../assets/skill-icons_html.svg"
import {ReactComponent as CssIcon} from "../../assets/skill-icons_css.svg"
import {ReactComponent as ReactIcon} from "../../assets/skill-icons_react-dark.svg"
import {ReactComponent as JsIcon} from "../../assets/Vector.svg"
import {ReactComponent as JiraIcon} from "../../assets/jira.svg"
import {ReactComponent as ConfluenceIcon} from "../../assets/confluence.svg"
import {ReactComponent as SlackIcon} from "../../assets/slack.svg"
import {ReactComponent as SapIcon} from "../../assets/sap.svg"
import {ReactComponent as PsIcon} from "../../assets/ps.svg"
import {ReactComponent as AiIcon} from "../../assets/ai.svg"
import {ReactComponent as FigmaIcon} from "../../assets/figma.svg"
import {ReactComponent as EnIcon} from "../../assets/flag-gb.svg"
import {ReactComponent as DeIcon} from "../../assets/flag-de.svg"
import {ReactComponent as UaIcon} from "../../assets/flag-ua.svg"
import {ReactComponent as RuIcon} from "../../assets/flag-ru.svg"


const Skills = () => {

    return(
        <div className="cv__skills section__padding" data-section id="skills">
            <h1>My <span className="gradient__text">Skills</span></h1>
            <div className="cv__skills-content">
                <div className="cv__skills-content_dev">
                    <h2>Web Development</h2>
                    <div className="cv__skills-content_dev-icons">
                        <HtmlIcon/>
                        <CssIcon />
                        <ReactIcon />
                        <JsIcon />
                    </div>
                   
                </div>
                <div className="cv__skills-content_manage">
                    <h2>Project Management</h2>
                    <div className="cv__skills-content_manage-icons">
                        <JiraIcon/>
                        <ConfluenceIcon/>
                        <SlackIcon/>
                        <SapIcon/>
                    </div>
                    
                </div>
                <div className="cv__skills-design">
                    <h2>Web Design</h2>
                    <div className="cv__skills-design-icons">
                        <PsIcon/>
                        <AiIcon/>
                        <FigmaIcon/>
                    </div> 
                </div>
            </div>

            <div className="cv__skills-languages">
                <h2>Languages</h2>
                <div className="cv__skills-languages_content">
                    <div className="cv__skills-languages_content-english">
                        <EnIcon className="icon-flag"/>
                        <h3>Fluent</h3>
                    </div>
                    <div className="cv__skills-languages_content-german">
                        <DeIcon className="icon-flag"/>
                        <h3>Intermediate</h3>
                    </div>
                    <div className="cv__skills-languages_content-ukr">
                        <UaIcon className="icon-flag"/>
                        <h3>Native</h3>
                    </div>
                    <div className="cv__skills-languages_content-rus">
                        <RuIcon className="icon-flag"/>
                        <h3>Native</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;