import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Footer from './footer';
import BlogPage from './BlogPage';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <main className="flex-grow">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/user/Dashboard" element={<UserPage />} /> */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App
