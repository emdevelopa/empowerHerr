import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./footer";
import BlogPage from "./BlogPage";
import Navbar from "./components/Navbar";
import { Menu, X } from "lucide-react";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutUs";
import ImpactPage from "./pages/impact";
import BlogUpload from "./pages/BlogUpload";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <main className="flex-grow">
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Routes>
          <Route path="/" element={<Home menuOpen={menuOpen} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/uploadBlog" element={<BlogUpload/>} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/user/Dashboard" element={<UserPage />} /> */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
