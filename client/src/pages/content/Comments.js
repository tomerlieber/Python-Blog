import React from 'react'; // Maybe I can remove it

const Comments = () => (
    <>
    {/* <h1>Comments</h1> */}
    <p>When writing code in any programming language, it's important to make the code readable and clear so other people (include you) can easily maintain and develop the program. One way to do it is to use comments.</p>
    <p>In python there are two types of comments:</p>
    <ol>
        <li>
            <b>Single-line</b> comments are created by beginning with the hash (#) character, and they are automatically terminated by the end of line.<br/>
            <code>
            # This is a single-line comment in python
            </code>
        </li>
        <li>
            <b>Multi-line</b> comments are created by adding a delimiter (""") on the beginning and on the end of the comment.<br/>
            <code>
            """ This is a <br/>
            multi-line comment <br/>
            in python"""
            </code>
        </li>
    </ol>
    </>
);

export default Comments;