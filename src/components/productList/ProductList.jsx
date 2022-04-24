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
                    
                    <p className="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                    unde beatae Quis
                    </p>
                    <ul className="project__stack">
                    <li className="project__stack-item">SASS</li>
                    <li className="project__stack-item">TypeScript</li>
                    <li className="project__stack-item">React</li>
                    </ul>

                </div>

                <div className="project">
                  <h3><GoMarkGithub/>  Project 2</h3>
                    <p class="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                    unde beatae Quis
                    </p>
                    <ul className="project__stack">
                    <li className="project__stack-item">SASS</li>
                    <li className="project__stack-item">TypeScript</li>
                    <li className="project__stack-item">React</li>
                    </ul>

                </div>

                <div className="project">
                    <h3><GoMarkGithub/>  Project 3</h3>
                    <p class="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                    unde beatae Quis
                    </p>
                    <ul className="project__stack">
                    <li className="project__stack-item">SASS</li>
                    <li className="project__stack-item">TypeScript</li>
                    <li className="project__stack-item">React</li>
                    <li className="project__stack-item">React</li>
                    </ul>
                </div>
                </div>
            </section>
    </>
)

export default ProductList;