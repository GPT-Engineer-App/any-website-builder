import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ServerInfo from "./pages/ServerInfo.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/server-info" element={<ServerInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
