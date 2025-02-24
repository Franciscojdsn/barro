import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

import styles from "./Footer.module.css"

export default function Footer() {

    return (
        <>
            <footer>
                <div className={styles.footer_container}>
                    <div>
                        <BsTelephone />
                        <TfiEmail />
                        <CiLocationOn />
                    </div>
                    <div>
                        <p>contato</p>
                        <p>rede</p>
                        <p>sobre</p>
                        <p>acervo</p>
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                </div>
            </footer>
        </>

    )

}