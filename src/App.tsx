import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ViewMarkdown from "./components/viewMarkdown";
import Microser from "./components/microservices";
import MyPDFViewer from "./components/Document1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view" element={<ViewMarkdown />} />
        <Route path="/micro" element={<Microser />} />
        <Route path="/document" element={<MyPDFViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
