

import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Tesimonials from "./Testimonials";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";


function App() {
  return ( <>
  <Navbar/>
  <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/testimonials" element={<Testimonials/>}></Route>
    <Route path="/blogs" element={<Blogs/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
  </>
   
  );
}

export default App;
