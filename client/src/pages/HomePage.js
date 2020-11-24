import React from 'react'; // Maybe I can remove it
import Header from '../Header';
import Background from '../img/home-bg.jpg'

const HomePage = () => (
    <>
    {/* <h1>Welcome to My Python Blog</h1> */}
    <Header heading={"Python Blog"} subheading={"A blog by Tomer Lieber"} image={Background} />
    <div id="page-body">
        <p>
            Welcome to my new blog about Python!
            The blog contains mostly posts about Python at a basic level. 
            It will help people who want to learn the language. 
            However, even people with previous experience will be able to find helpful posts here.
            Feel free to comment on the posts and give a like if you liked what you read.
        </p>
    </div>
    </>
);

export default HomePage;