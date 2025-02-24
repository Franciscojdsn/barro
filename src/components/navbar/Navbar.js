import imagem from "../../assets/dsc_8769.jpg"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <>
            <nav className={styles.container_nav}>
                <img src={imagem} alt="imagem"></img>
                <ul className={styles.nav}>
                    <li>                  
                        <Link to="/"> Home </Link>
                    </li>
                    <li>                  
                        <Link to="Sobre"> Sobre </Link>
                    </li>
                    <li>                  
                        <Link to="Acervo"> Acervo </Link>
                    </li>
                    <li>                  
                        <Link to="Contatos"> Contatos </Link>
                    </li>
                </ul>
            </nav>
        </>

    )

}