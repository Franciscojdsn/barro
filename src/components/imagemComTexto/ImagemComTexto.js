import styles from "./ImagemComTexto.module.css"
import imagem from "../../assets/2021.03.02_Pernambuco_Alto-do-Moura_07de10.jpg"

export default function ImagemComTexto({ row, texto, title }) {

    return (
        <>
            <div className={styles[row]}>
                <div>
                    <img src={imagem} alt="imagem do barro"></img>
                </div>
                <div>
                    <h1>{title}</h1>
                    <p> {texto} </p>
                </div>
            </div>
        </>

    )

}


