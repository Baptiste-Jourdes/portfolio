import './index.css'

function Separator() {

    return (

        <div class="separator">
        </div>

    )

}

function NavSeparator() {

    return (

        <div class="separator little">
        </div>

    )

}

function Title(props) {

    return (

        <div id={props.anchor} class="sectionTitle">
            <div></div>
            <span>{props.text}</span>
        </div>

    )

}

export {Separator}
export {NavSeparator}
export {Title}