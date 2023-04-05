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
    description: 'Movie/show generator app for when you dont know what to watch next.',
    link: "https://saitek300.github.io/what-should-i-watch-next/",
    github: 'https://github.com/saitek300/what-should-i-watch-next',
    tech:"JavaScript / Server Side API / Bootstrap"

}

const plantApp = {
    img: plantAppImg,
    title: "Botany Plants Lately",
    description: "Blog application for storing personal plant information",
    link: "https://botany-plants-lately.herokuapp.com/",
    github: "https://github.com/saitek300/Botany-plants-lately",
    tech:"Handlebars / Node / Express / MySQL / RESTful API"

}

const jate = {
    img: jateImg,
    title: "J.A.T.E.",
    description: "PWA for editing code snippets in JavaScript",
    link: "https://obscure-sands-80583.herokuapp.com/",
    github: "https://github.com/saitek300/snippets-offline",
    tech:"PWA / Webpack"
}

const passGen = {
    img: passGenImg,
    title: "Is this Secure?",
    description: "Password generator with custom criteria",
    link: "https://saitek300.github.io/is-this-secure/",
    github: "https://github.com/saitek300/is-this-secure",
    tech:"JavaScript / HTML / CSS"
}

const bse = {
    img: bseImg,
    title: "Looking For Books?",
    description: "Search Engine for Google Books",
    link: "N/A",
    github: "https://github.com/saitek300/looking-for-books",
    tech:"React / GraphQL / Apollo / MERN"
}

const techBlog = {
    img: techBlogImg,
    title: "Blogging Tech",
    description: "Mock blog for a coding forum",
    link: "https://fierce-crag-04843.herokuapp.com/",
    github: "https://github.com/saitek300/blogging-tech",
    tech:"Handlebars / MVC / MySQL / Sequelize / bcrypt"
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
            <Project img={movieApp.img} title={movieApp.title} description={movieApp.description} link={movieApp.link} github={movieApp.github} tech={movieApp.tech} />

            <Project img={plantApp.img} title={plantApp.title} description={plantApp.description} link={plantApp.link} github={plantApp.github} tech={plantApp.tech} />

            <Project img={jate.img} title={jate.title} description={jate.description} link={jate.link} github={jate.github} tech={jate.tech} />

            <Project img={passGen.img} title={passGen.title} description={passGen.description} link={passGen.link} github={passGen.github} tech={passGen.tech} />

            <Project img={bse.img} title={bse.title} description={bse.description} link={bse.link} github={bse.github} tech={bse.tech} />

            <Project img={techBlog.img} title={techBlog.title} description={techBlog.description} link={techBlog.link} github={techBlog.github} tech={techBlog.tech} />
        </div>
    )
}