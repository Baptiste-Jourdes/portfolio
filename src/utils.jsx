import './index.css'

function Separator() {

    return (

        <div className="separator">
        </div>

    )

}

function NavSeparator() {

    return (

        <div className="separator little">
        </div>

    )

}

function Title(props) {

    return (

        <div id={props.anchor} className="sectionTitle AnchorSection">
            <div></div>
            <span>{props.text}</span>
        </div>

    )

}

function SkillTitle(props) {

    return (

        <div id={props.anchor} className="sectionTitle skillTitle">
            <div></div>
            <span>{props.text}</span>
            <div></div>
        </div>

    )

}

export {Separator}
export {NavSeparator}
export {Title}
export {SkillTitle}