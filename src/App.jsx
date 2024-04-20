// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Header } from "./component/Header.jsx";
import { Footer } from "./component/Footer.jsx";
import { Services } from "./component/Services.jsx";
import { Skills } from "./component/Skills & Education.jsx";
import { Contact } from "./component/Contact.jsx";
import Portofolios from "./component/Portofolios.jsx";

import "./assets/Styles/style.css";
import "./assets/Styles/responsive.css";

function App() {
  // const navSlide = () => {
  //   const burger = document.querySelector(".burger");
  //   const navLists = document.querySelector("nav");

  //   burger.addEventListener("click", () => {
  //     navLists.classList.toggle("nav-active");
  //     burger.classList.toggle("toggle-burger");
  //   });
  // };

  // navSlide();

  // window.onbeforeunload = () => {
  //   for (const form of document.getElementsByTagName("form")) {
  //     form.reset();
  //   }
  // };

  return (
    <>
      <Header />
      <Services />
      <Portofolios />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
