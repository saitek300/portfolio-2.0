import React from "react";
import Project from "../Project";
import movieAppImg from "../../images/movieApp-image.jpg";
import plantAppImg from "../../images/plant-social-media-image.jpg";
import jateImg from "../../images/Screenshot 2023-02-07 150354.jpg";
import passGenImg from "../../images/generator capture.jpg";
import bseImg from "../../images/BSE-clip.gif";
import techBlogImg from "../../images/tech-blog-home.jpg";

const movieApp = {
    img: movieAppImg,
    title: 'What should I watch next',
    description: 'Random Movie Generator',
    link: "https://saitek300.github.io/what-should-i-watch-next/",
    github: 'https://github.com/saitek300/what-should-i-watch-next',

}

const plantApp = {
    img: plantAppImg,
    title: "Botany Plants Lately",
    description: "plant social media",
    link: "https://botany-plants-lately.herokuapp.com/",
    github: "https://github.com/saitek300/Botany-plants-lately",

}

const jate = {
    img: jateImg,
    title: "J.A.T.E.",
    description: "snippet editor",
    link: "https://obscure-sands-80583.herokuapp.com/",
    github: "https://github.com/saitek300/snippets-offline",
}

const passGen = {
    img: passGenImg,
    title: "Is this Secure?",
    description: "Password Generator",
    link: "https://saitek300.github.io/is-this-secure/",
    github: "https://github.com/saitek300/is-this-secure",
}

const bse = {
    img: bseImg,
    title: "Looking For Books?",
    description: "Mern Stack",
    link: "N/A",
    github: "https://github.com/saitek300/looking-for-books",
}

const techBlog = {
    img: techBlogImg,
    title: "Blogging Tech",
    description: "Coding blog",
    link: "https://fierce-crag-04843.herokuapp.com/",
    github: "https://github.com/saitek300/blogging-tech",
}

const styles={
    folioStyle:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}

export default function Portfolio() {
    return (
        <div style={styles.folioStyle}>
            <Project img={movieApp.img} title={movieApp.title} description={movieApp.description} link={movieApp.link} github={movieApp.github} />

            <Project img={plantApp.img} title={plantApp.title} description={plantApp.description} link={plantApp.link} github={plantApp.github} />

            <Project img={jate.img} title={jate.title} description={jate.description} link={jate.link} github={jate.github} />

            <Project img={passGen.img} title={passGen.title} description={passGen.description} link={passGen.link} github={passGen.github} />

            <Project img={bse.img} title={bse.title} description={bse.description} link={bse.link} github={bse.github} />

            <Project img={techBlog.img} title={techBlog.title} description={techBlog.description} link={techBlog.link} github={techBlog.github} />
        </div>
    )
}