import React from "react";

const styles = {
  navbarStyle: {
    margin:"0px",
    color: '#ffffff',
    display:'flex',
    justifyContent:'space-evenly'
  },
};

export default function Project(props) {
  console.log(props.img)
    return(
    <div className="projectContainer">
          <div className="project">
            <img
              className="project-img-top"
              src={props.img}
              alt={props.title}
            />
            <div className="project-body">
              <a href={props.link} className="project-link">{props.title}</a>
              <a href={props.github} className="fa-brands fa-github fa-2x"></a>
              <p className="project-description">{props.description}</p>
            </div>
          </div>
    </div>
    )
}