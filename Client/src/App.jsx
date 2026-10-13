import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Home/Profile";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Experiences from "./components/Experiences/Experiences";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Profile />
        <AboutMe />
        <Technologies />
        <Experiences />
        <Certifications />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
