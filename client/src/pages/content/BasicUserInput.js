import React from 'react'; // Maybe I can remove it

const BasicUserInput = () => (
    <>
    <h1>Basic User Input</h1>
    <p>Programs sometimes need to interact with users through the keyboard. In Python 3, the function <code>input()</code> is used for it.</p>
    <p>
        <b>Example 1</b><br/>
        Ask for the name of the user and print it:<br/>
        <code>
            --&gt; print("Enter your name: ")<br/>
            --&gt; name = input()<br/>
            --&gt; print("Hello " + name)<br/>
            Enter your name:<br/>
            Tomer<br/>
            Hello Tomer
        </code>
    </p>
    <p>
        <b>Example 2</b><br/>
        You can use the prompt parameter to write a message before the input:<br/>
        <code>
            --&gt; name = input("Enter your name: ")<br/>
            --&gt; print("Hello " + name)<br/>
            Enter your name: Tomer<br/>
            Hello Tomer
        </code>
    </p>
    <p>
        <b>Example 3</b><br/>
        The <code>input()</code> function converts the input it receives into a string.
        In order to handle input of data type numbers, you may use the function <code>int()</code>.
        This function tries to convert the string into an integer, otherwise, it throws an exception.<br/>
        <code>
            --&gt; age = input("Enter your age: ")<br/>
            --&gt; print("Next year you will be " + (age + 1) + " years old")<br/>
            Enter your age: 25<br/>
            Next year you will be 26 years old
        </code>
    </p>
    </>
);

export default BasicUserInput;