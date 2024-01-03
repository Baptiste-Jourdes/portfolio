import './timeline.css'

function TimelineCard(props) {

    return (
                <li>
                    <span></span>
                    <div className="title">{props.title}</div>
                    <div className="name">{props.name}</div>
                    <div className="info">{props.desc}</div>
                    <div className="localisation">{props.loc}</div>
                    <div className="time">
                        <span>{props.date2}</span>
                        <span>{props.date1}</span>
                        
                    </div>
                </li>
    )

}

export default TimelineCard