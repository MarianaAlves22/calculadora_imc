import styles from "../Perfil/Perfil.module.css";
import medicoImage from "../Images/medico.jpeg";

const Perfil = () => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={medicoImage} alt="Imagem com três medicos e frutas" />
            <h1 className={styles.name}>Calculadora IMC</h1>
        </header>
    )
}

export default Perfil;