import React from "react";
import { GoMarkGithub } from "react-icons/go";
import './productList.css'
const ProductList = () => (
    <>
         {/* <!-- Projects --> */}
         <section id="projects" className="section projects">
                <h2 className="section__title">Projects</h2>

                <div className="projects__grid">
                <div className="project">
                    <h3><GoMarkGithub/>  Project 1</h3>
                    
                    <a href=" https://github.com/Eloquade/Django-3.0-Crash-Course-Tutorials-Customer-Manage"><p className="project__description">
                    Customer-Manage
                    </p></a>
                    <ul className="project__stack">
                    <li className="project__stack-item">Python</li>
                    <li className="project__stack-item">Django</li>
                    <li className="project__stack-item">Html</li>
                    <li className="project__stack-item">Css</li>
                    
                    </ul>
                    
                </div>

                <div className="project">
                  <h3><GoMarkGithub/>  Project 2</h3>
                  <a href="https://github.com/Eloquade/login-and-register"> <p  class="project__description">
                    login-and-register
                    </p></a>
                    <ul className="project__stack">
                    <li className="project__stack-item">Php</li>
                    <li className="project__stack-item">Javascript</li>
                    <li className="project__stack-item">Html</li>
                    <li className="project__stack-item">Css</li>
                    </ul>

                </div>
                
                <div className="project">
                    <h3><GoMarkGithub/>  Project 3</h3>
                    <a href="https://github.com/Eloquade/Capstone"><p class="project__description">
                    Contribute Capstone
                    </p></a>
                    <ul className="project__stack">
                    <li className="project__stack-item">Php</li>
                    <li className="project__stack-item">Javascript</li>
                    <li className="project__stack-item">Html</li>
                    <li className="project__stack-item">Css</li>
                    </ul>
                </div>
                </div>
            </section>
    </>
)

export default ProductList;