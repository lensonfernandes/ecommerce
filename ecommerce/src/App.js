import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
          
              </>
            }
          />
          <Route path="/checkout" element={<h1> Checkout</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
