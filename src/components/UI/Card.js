import "./Card.css"
function Card(props){
    const classes = 'card' + props.className
    return <div className={classes}>{Props.children}</div>
}

export default Card