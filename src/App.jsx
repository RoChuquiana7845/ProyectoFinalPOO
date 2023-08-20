import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { ThemeProvider } from "./context/ColorTheme.jsx";
import EditarGrupo from './pages/EditarGrupo';
import NuevoGrupo from "./pages/NuevoGrupo.jsx";
import { CambiarPassword } from './pages/CambiarPassword';
import EditarMeeti from "./pages/EditarMeeti.jsx";
import MapView from './components/MapView';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <header className="w-screen">
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/editar-grupo" element={<EditarGrupo />}></Route>
            <Route path="/nuevo-grupo" element={<NuevoGrupo/>}></Route>
            <Route path="/cambiar-password" element={<CambiarPassword/>}></Route>
            <Route path="/editar-meeti" element={<EditarMeeti/>}></Route>
            <Route path="/mapa" element={<MapView/>}></Route>
          </Routes>
        </main>
        <footer className="w-screen">
          <Footer />
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
