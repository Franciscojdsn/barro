import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Acervo from "../pages/Acervo/Acervo";
import Contatos from "../pages/Contatos/Contatos";
import Sobre from "../pages/Sobre/Sobre"


export default function AppRoutes() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Acervo" element={<Acervo />}></Route>
                    <Route path="Contatos" element={<Contatos />}></Route>
                    <Route path="Sobre" element={<Sobre />}></Route>
                </Routes>
                <Footer />
            </Router>
        </>

    )

}