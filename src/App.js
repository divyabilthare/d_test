
  

 import React from "react";
import Navbar from "./components/Navbar";

// import Footer from "./components/Footer.js";
 import Home from "./components/Home.js";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import AboutUs from './components/AboutUs';
 import Contact from './components/Contact.js';
 import Services from './components/Services.js';


 
 function App() {
   
     
 
   return (
     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
       <Router>
          <Navbar/> 
 
         <div style={{ flex: 1, overflowY: "auto" }}>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<AboutUs />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/services" element={<Services />} />
          
           </Routes>
         </div>
 
         {/* <Footer />  */}
       </Router>
     </div>
   );
 }
 
 export default App;
