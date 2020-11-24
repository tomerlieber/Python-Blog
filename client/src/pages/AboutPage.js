import React from 'react'; // Maybe I can remove it
import Header from '../Header';
import Background from '../img/about-bg.jpg'

const AboutPage = () => (
    <>
    {/* <h1>About me</h1> */}
    <Header heading={"About Me"} subheading={"This is what I do"} image={Background}/>
    <div id="page-body">
        <p>
            Hey, my name is Tomer.
            As a software developer with 4 years of experience, I advocate the principle of code reuse.
            So, instead of telling about myself here, I invite you to 
            visit <a href="https://www.linkedin.com/in/tomer-lieber/" target="_blank" rel="noopener noreferrer">my linkein profile</a> and know me better.
        </p>
    </div>
    </>
);

export default AboutPage;