// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Header } from "./component/Header.jsx";
import { Footer } from "./component/Footer.jsx";
import { Services } from "./component/Services.jsx";
import { Skills } from "./component/Skills & Education.jsx";
import { Contact } from "./component/Contact.jsx";

import "./assets/Styles/style.css";
import "./assets/Styles/responsive.css";
import Porto1 from "./assets/images/Portofolio/Porto1.png";
import Porto2 from "./assets/images/Portofolio/Porto2.png";
import Todolist from "./assets/images/Portofolio/Todolist.png";
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
      <section id="portofolios">
        <div
          className="portofolios main-container"
          style={{ background: "white" }}
        >
          <h3 className="pre-tittle">My Works</h3>
          <h1 className="section-tittle">Featured Portofolios</h1>

          <div className="grid-3">
            <div className="portofolio">
              <div className="portofolio-cover">
                <img src={Porto1} alt="Portofolio 1" />
              </div>

              <div className="portofolio-info">
                <div className="portofolio-tittle">
                  <h4>Clone OLX Home Page</h4>
                  <a href="/" className="portofolio-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>

                <div className="portofolio-tags">
                  <div>HTML</div>
                  <div>CSS</div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus quasi quaerat enim eaque fugiat perferendis,
                  exercitationem quod sit delectus harum?
                </p>
              </div>
            </div>

            <div className="portofolio">
              <div className="portofolio-cover">
                <img src={Porto2} alt="Portofolio 2" />
              </div>

              <div className="portofolio-info">
                <div className="portofolio-tittle">
                  <h4>Clone OLX Detail</h4>
                  <a href="/" className="portofolio-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>

                <div className="portofolio-tags">
                  <div>HTML</div>
                  <div>CSS</div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus quasi quaerat enim eaque fugiat perferendis,
                  exercitationem quod sit delectus harum?
                </p>
              </div>
            </div>

            <div className="portofolio">
              <div className="portofolio-cover">
                <img src={Todolist} alt="ToDoList" />
              </div>

              <div className="portofolio-info">
                <div className="portofolio-tittle">
                  <h4>To Do List</h4>
                  <a
                    href="https://to-do-list-azure-beta.vercel.app/"
                    target="_blank"
                    className="portofolio-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>

                <div className="portofolio-tags">
                  <div>React JS</div>
                  <div>Vite</div>
                  <div>JavaScript</div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus quasi quaerat enim eaque fugiat perferendis,
                  exercitationem quod sit delectus harum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
