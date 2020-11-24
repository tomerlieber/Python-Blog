import React from 'react'; // Maybe I can remove it

const BasicOutput = () => (
    <>
    {/* <h1>Basic Output</h1> */}
    <p>The <code>print()</code> function prints the given object to the screen. The object will be converted into a string before written to the screen.</p>
    <p>
        <b>Example 1</b> - How to print one object:<br/>
        <code>
        <br/>
        --&gt; print("Hello World);<br/>
        Hello World<br/>
        <br/>
        --&gt; print(34);<br/>
        34<br/>
        </code>
    </p>
    <p>
        <b>Example 2</b> - How to print more than one object:<br/>
        <code>
        <br/>
        --&gt; print("Hello World", "Tomer");<br/>
        Hello World Tomer<br/>
        <br/>
        --&gt; print("My favorite number is:", 10);<br/>
        My favorite number is: 10
        </code>
    </p>
    <p>* Put attention that the default separator between objects is space (" "). You can change it in the following way:</p>
    <code>
        --&gt; print(866, 326, 7484, sep="-");<br/>
        866-326-7484
        </code>
        <p>* Another thing that you can notice is that the newline character is printed at the end of the line, so each line is printed in a new line. You can change it in the following way:</p>
        <code>
        --&gt;print("Hello,", end=" ");<br/>
        --&gt;print("how are you?");<br/>
        Hello, how are you?<br/><br/>
    </code>
    <p>
        <b>Example 3</b> - How to control the size of float output:<br/>
        <p>First, we use &#123;:f&#125; in order to format float number. Second, we specify two numbers on both sides of a point &#123;:10.2f&#125;. The left number represents the length of the complete output, and the right number limits the number of positions after the decimal point.</p>
        <code>
            --&gt; print('&#123;:10.2f&#125;'.format(3.141592653589793));<br/>
            3.14
        </code>
        <p>In this example we want our output to have at least 10 characters with 2 after the decimal point.</p>
    </p>
    </>
);

export default BasicOutput;