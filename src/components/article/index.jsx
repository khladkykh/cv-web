import "./style.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Article = (props) => {

    return(
        <div className="cv__article">
            <div className="cv__article-date">
                <CalendarMonthIcon className="date-icon" sx={{ fontSize: "24px", color: "var(--color-text)"}}/>
                <h4>{props.date}</h4>
            </div>
            <h3><span className="gradient__text">{props.title}</span>{props.subtitle}</h3>

            {props.toggleExp && 
            
            <div className="cv__article-features">
                <div className="cv__article-feature">
                    <BusinessIcon sx={{ fontSize: "24px", color: "#E1BEE7"}}/>
                    <h5 >{props.businessFeature}</h5>
                </div>
                <div className="cv__article-feature">
                    <PersonIcon sx={{ fontSize: "24px", color: "#E1BEE7"}}/>
                    <h5 >{props.personFeature}</h5>
                </div>
                <div className="cv__article-feature">
                    <EventAvailableIcon sx={{ fontSize: "24px", color: "#E1BEE7"}}/>
                    <h5 >{props.timeFeature}</h5>
                </div>
            </div>}
            
            <p>{props.description}</p>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
            
        </div>
    )
}

export default Article;