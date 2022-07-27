import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Split } from "./components/Split";
import { Manual } from "./components/Manual";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="split" element={<Split />} />
          <Route path="manual" element={<Manual />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


