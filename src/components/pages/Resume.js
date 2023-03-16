import React from "react";
import pdf from "./Milo-Ellsworth-Full-Stack-Resume.pdf"

export default function Resume() {
    return (
        <div>
            <a className="resumeContainer" href={pdf}>Download Resume</a>
                <div className="resumeListContainer">
                    <h2>Front-End</h2>
                    <ul>
                        <li>
                            Html
                        </li>
                        <li>
                            Css
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            JQuery
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Responsive Design
                        </li>
                        
                    </ul>
                    <h2>Back-End</h2>
                    <ul>
                        <li>
                            APIs
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            MySQL,Sequelize
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ul>
                </div>
        </div>

    )
}