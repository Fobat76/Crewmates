import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import CreatePokemon from "./pages/CreatePokemon";
import ReadPokemon from "./pages/ReadPokemon";
import EditPokemon from "./pages/EditPokemon";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"><button>Main</button></Link>
        <Link to="/create"><button>Create Pokémon</button></Link>
        <Link to="/team"><button>View Team</button></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<CreatePokemon />} />
        <Route path="/team" element={<ReadPokemon />} />
        <Route path="/edit/:id" element={<EditPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
