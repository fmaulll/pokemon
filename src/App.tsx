import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonProvider from "./context/PokemonContext";
import Layout from "./layout";
import Bag from "./pages/Bag";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Layout>
          <Routes>
            <Route path="/pokemon/" element={<Home />} />
            <Route path="/pokemon/bag" element={<Bag />} />
          </Routes>
        </Layout>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
