import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import About from "./Components/Pages/About/About.jsx";
import Courses from "./Components/Pages/Courses/Courses.jsx";
import Shop from "./Components/Pages/Shop/Shop.jsx";
import Blog from "./Components/Pages/Blog/Blog.jsx";
import Contact from "./Components/Pages/Contact/Contact.jsx";

import "./index.css";
import Layout from "./Components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
