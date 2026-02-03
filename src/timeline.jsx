import TimelineCard from './timeline-card'
import './timeline.css'

function Timeline() {

    return (

        <div className="box">
            <ul id="first-list">
                <TimelineCard
                    title = "Maîtrise en Génie Logiciel"
                    name = "ETS - Ecole de Technologie Supérieure"
                    desc ="Double-Diplomation"
                    date1 = "Septembre 2023"
                    date2 = "Août 2025"
                    loc="Montréal - CANADA"

                />
                <TimelineCard
                    title = "Ecole d'ingénieurs en Informatique"
                    name = "ENSIM - École Nationale Supérieure d'Ingénieurs du Mans"
                    desc= "Spécialité : Architecture des Systèmes Temps-Réel et Embarqués (ASTRE)"
                    date1 = "Septembre 2021"
                    date2 = "Double-diplomation"
                    loc="Le Mans - FRANCE"

                />
                <TimelineCard
                    title = "Diplôme Universitaire de Technologie (DUT)"
                    name = "(équivalent québécois : DEC + 2 ans)"
                    desc = "Génie Electrique et Informatique Industrielle (GEII),
                    Spécialité : informatique embarquée"
                    date1 = "Septembre 2019"
                    date2 = "Juin 2021"
                    loc="Brive-la-Gaillarde - FRANCE"

                />
                
            
            </ul>
            </div>
    )

}

export default Timeline