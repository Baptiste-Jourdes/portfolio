import TimelineCard from './timeline-card'
import './timeline.css'

function Timeline() {

    return (

        <div class="box">
            <ul id="first-list">
                <TimelineCard
                    title = "ENSIM"
                    date1 = "Septembre 2020"
                    date2 = "juin 2025"
                />
                <TimelineCard
                    title = "DUT"
                    date1 = "Septembre 2020"
                    date2 = "juin 2025"
                />
                <TimelineCard
                    title = "BAC"
                    date1 = "Septembre 2020"
                    date2 = "juin 2025"
                />
                
            
            </ul>
            </div>
    )

}

export default Timeline