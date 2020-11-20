import React from 'react'; // Maybe I can remove it

const CreatingFunctions = () => (
    <>
    <h1>Creating Functions</h1>
    <p>As you can see in the previous post, Python gives you many built-in functions like <code>print(), input()</code> etc. But you can also create your own functions. </p>
    <p>
        <b>Definition</b><br/>
        A function is a block of code that is used to preform a single task . Functions provide better modularity for your program and a high degree of code reusing.
    </p>
    <b>Creating a function</b>
    <ol>
        <li>A function begin with the keyword def followed by the function name and parentheses.</li>
        <li>Arguments are placed within these parentheses and separated with a comma.</li>
        <li>The code within a function starts after a colon (:) and is indented.</li>
        <li>A function can return an expression to the caller.</li>
    </ol>
    <p>
        <u>Example:</u><br/>
        <code>
            def sayHello(name):<br/>
            &emsp;&emsp;print("Hello", name)
        </code>
    </p>
    <p>
        <b>Can you have more than one function with the same name?</b> Yes! but....<br/>
        You can have more than one function with the same name (this called Function Overloading), but can only use the latest defined function.
    </p>
    <code>
        def sayHello(firstName):<br/>
        &emsp;&emsp;print("Hello", firstName)<br/>
        def sayHello(firstName, lastName):<br/>
        &emsp;&emsp;print("Hello", firstName, lastName)
    </code>
    <p>
        <code>sayHello("Tomer", "Lieber")</code> - this line will call the second function.<br/>
        But,<br/>
        <code>sayHello("Tomer")</code> - this line will produce an error because the latest defined sayHello function takes two arguments.
    </p>
    </>
);

export default CreatingFunctions;