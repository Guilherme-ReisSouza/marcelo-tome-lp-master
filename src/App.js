import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './screen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/especialidades" index element={<Index />} />
        <Route path="/atuacao" index element={<Index />} />
        <Route path="/depoimentos" index element={<Index />} />
        <Route path="/contato" index element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

