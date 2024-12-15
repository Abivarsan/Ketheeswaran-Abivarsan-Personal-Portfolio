// import { BrowserRouter } from "react-router-dom";
// import {About, Contact, Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//         <Navbar />
//         <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         {/* <Feedbacks /> */}
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <div className="bg-footer-pattern bg-cover bg-no-repeat bg-center">
//           <Footer />  {/* Added Footer component here */}
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer, // Import Footer
} from "./components";

const App = () => {
  return (
    <BrowserRouter BasePath={process.env.NODE_ENV === "production"  ? "/AbivarsanK_Personal_Portfolio" 
      : ""}>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* Uncomment Feedbacks if needed */}
        {/* <Feedbacks /> */}

        {/* Contact and Stars Canvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer Section */}
        <div className="bg-footer-pattern bg-cover bg-no-repeat bg-center">
          <Footer />  {/* Footer component */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
