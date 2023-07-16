import './timeline.css'

function TimelineCard(props) {

    return (
                <li>
                    <span></span>
                    <div class="title">{props.title}</div>
                    <div class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                    <div class="name">-</div>
                    <div class="time">
                        <span>{props.date1}</span>
                        <span>{props.date2}</span>
                        
                    </div>
                </li>
    )

}

export default TimelineCard