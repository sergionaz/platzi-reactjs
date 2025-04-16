// import "./styles.css"
//import styles from "./Card.module.css"
import styles from "./Card.module.sass"

const Card = () => {
    const textStyles = {
        color: "blue", 
        fontSize: "2rem",
        textAlign: "center"
    }

    return (
        // <div className={styles.card}>
        // <div style={{ color: "blue", fontSize: "2rem"}}>
        <div style={textStyles}>
            Soy una Card!
        </div>
    )
}

export default Card;
