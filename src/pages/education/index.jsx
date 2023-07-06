import "./style.css"
import Article from "../../components/article";
import { useState } from "react";

const Education = () => {

    const [toggleExp, setToggleExp] = useState(false)

    return(
        <div className="cv__education section__padding" data-section id="education">
            <h1>My <span className="gradient__text">Journey</span></h1>

            <div className="cv__education-row">

                <div className="cv__education-column">
                    <h2>Education</h2>
                    <div className="cv__education-column_box">
                        <div className="cv__education-column_box-content">
                            <Article 
                            date="2019 - Present" 
                            title="BACHELOR'S DEGREE"
                            subtitle=" - State University of Intellectual Technologies and Communications"
                            description="Assistance in updating the annual curriculum to improve the level of teaching"
                            description1="Development of scientific presentations for demonstration to foreign and local students"
                            />
                        </div>
                        <div className="cv__education-column_box-content">
                            <Article 
                            date="2015 - 2017" 
                            title="ASSOCIATE DEGREE"
                            subtitle=" - Kyiv College of Telecommunications"
                            description="Participation in organisation of distance learning and digitalisation program"
                            />
                        </div>
                    </div>
                </div>

                <div className="cv__education-column">
                    <h2>Experience</h2>
                    <div className="cv__education-column_box">
                        <div className="cv__education-column_box-content">
                            <Article 
                                date="2017 - 2019" 
                                title="PRODUCT OWNER OF CLOUD SOLUTIONS"
                                subtitle=" - Vodafone Ukraine"
                                toggleExp="true"
                                businessFeature="over 500 employees"
                                personFeature="over 15,8 ml customers"
                                timeFeature="since 1994"
                                description="Collect, analyse and refine product requirements from the Product Management team"
                                description1="Ownership across the product lifecycle of a feature from concept through launch and managing the ongoing analysis and optimisation phases"
                                description2="Collaborate with engineering teams to provide Top Management with development estimates and proposed priorities"
                            />
                        <div className="cv__education-column_box-content">
                            <Article 
                                date="2015 - 2017" 
                                title="CARRIER RELATION EXPERT"
                                subtitle=" - IPnet Ukraine"
                                toggleExp="true"
                                businessFeature="over 250 employees"
                                personFeature="over 1 ml customers"
                                timeFeature="since 2001"
                                description="Developing and maintaining peer relationships"
                                description1="Analysis of business processes to reduce expenses and increase profits"
                                description2="Planning and analysing the data"
                            />
                        </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Education;