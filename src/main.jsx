import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Courses from "./Pages/Courses/Courses.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

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
