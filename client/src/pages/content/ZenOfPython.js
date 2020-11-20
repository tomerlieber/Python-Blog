import React from 'react'; // Maybe I can remove it

const ZenOfPython = () => (
    <>
    <h1>Zen of Python</h1>
    <p>The <b>Zen of Python</b> is a collection of 19 guidelines for the design of the Python programming language. 
        The purpose of these guidelines is to make the code more readable and simple so it can be easily understood. 
        To watch the full collection click
        <a href="https://en.wikipedia.org/wiki/Zen_of_Python" target="_blank" rel="noopener noreferrer"> here</a>.</p>
    <p>Here is my thought on some items found within that document:</p>
    <ol>
        <li>
            <b>Beautiful is better than ugly</b><br/>
            This guideline makes sense and of course that no one want to write ugly code, so I will give an example of common case that we might write ugly code instead of pretty code.<br/>
            <code>
            Ugly:<br/>
            if boolean_condition:<br/>
            &emsp;&emsp;a = True<br/>
            else:<br/>
            &emsp;&emsp;a = false<br/>
            
            Pretty:<br/>
            a = boolean_condition
            </code>
        </li>
        <li>
            <b>Sparse is better than dense</b><br/>
            Programmers sometimes like to write their code as short as possible even if it comes at the expense of readability. These cases should be avoided.
            For example:<br/>
            <code>
            Dense:<br/>
            print(math.sqrt(((a + b + c) / 2) * (((a + b + c) / 2) - a) * (((a + b + c) / 2) - b) * (((a + b + c) / 2)<br/>

            Sparse:<br/>
            s = (a + b + c) / 2<br/>
            areaSquared = s * (s - a) * (s - b) * (s - c)<br/>
            area = math.sqrt(areaSquared)<br/>
            print(area)
            </code>
        </li>
        <li>
            <b>Readability counts</b><br/>
            You should give meaningful names to variables and functions. Avoid unnecessary variables. In fact, as mentioned above all the <b>Zen of Python</b> guidelines make the code more readable.
            For example:<br/>
            <code>
            Unreadable:<br/>
            a1 = x<br/>
            a2 = a1 + y<br/>
            a3 = a2 + z<br/>
            a4 = a3 + w<br/>

            Readable:<br/>
            sum = x<br/>
            sum += y<br/>
            sum += z<br/>
            sum += w<br/>
            </code>
        </li>
    </ol>
    </>
);

export default ZenOfPython;