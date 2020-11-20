import React from 'react'; // Maybe I can remove it

const CallingFunctions = () => (
    <>
    <h1>Calling Functions</h1>
    <p>The Python programming language comes with a variety of build-in functions. Some functions are part of the base language and others require you to import from python modules.</p>
    <p>
        <b>Calling a function</b><br/>
        To call a function, use the function name followed by parenthesis:<br/>
        <code>input()</code>
    </p>
    <p>
        <b>Calling a function with parameters</b><br/>
        Parameters are specified after the function name, inside the parentheses. Parameters are separated with a comma:<br/>
        <code>print("Hello World", "Tomer")</code>
    </p>
    <p>
        <b>Calling a function that requires to import from python modules</b><br/>
        To import a moudle, we use the <code>import</code> statement. Then to call the function we use the syntax: <code>module_name.function_name</code>.<br/>
        <code>
            import math<br/>
            print(math.sqrt(9))
        </code>
    </p>
    </>
);

export default CallingFunctions;