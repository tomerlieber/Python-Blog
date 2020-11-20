import React from 'react'; // Maybe I can remove it

const BasicTypes = () => (
    <>
    <h1>Basic Types</h1>
    <p>In Python there are 5 basic types: Integers, Floating-Point Numbers, Complex Numbers, Strings and Boolean.</p>
    <p>Before I explain how to create and use the basic types in Python, note that Python is dynamic language unlike java and c# which are static languages. It means that variables need not be declared or defined. To create a variable, you just assign it a value and then start using it. Assignment is done with a single equals sign (=).</p>
    <ol>
        <li>
            <h4>Integers</h4>
            <p>The int type in Python designates an integer number.</p>
            <code>
                <br/>
                <u>create:</u><br/>
                num1 = 3<br/>
                <br/>
                <u>use:</u><br/>
                --&gt; print(num1 + 1)<br/>
                4
            </code>
        </li>
        <li>
            <h4>Floating-Point Numbers</h4>
            <p>The float type in Python designates a floating-point number. float values are specified with a decimal point. 
                Optionally, the character e or E followed by a positive or negative integer may be appended to 
                specify <a href="https://en.wikipedia.org/wiki/Scientific_notation" target="_blank" rel="noopener noreferrer">scientific notation</a>.
            </p>
            <code>
                <br/>
                <u>create:</u><br/>
                num2 = 3.5<br/>
                num3 = 4e7<br/>
                <br/>
                <u>use:</u><br/>
                --&gt; print(num3 + 1)<br/>
                40000001.0
            </code>
        </li>
        <li>
            <h4>Complex Numbers</h4>
            <p>The complex type in Python designates a complex number. Complex numbers are specified as <code>&lt;real part&gt; + &lt;imaginary part&gt;j</code></p>
            <code>
                <br/>
                <u>create:</u><br/>
                num4 = 2+3j<br/>
                <br/>
                <u>use:</u><br/>
                --&gt; print(num4 + 1 + 1j)<br/>
                (3+4j)
            </code>
        </li>
        <li>
            <h4>Strings</h4>
            <p>The <code>str</code> type in Python designates a string. A string is a sequence of characters that is delimited by single or double quotes.</p>
            <code>
                <br/>
                <u>create:</u><br/>
                str = "Hello World"<br/>
                <br/>
                <u>use:</u><br/>  
                --&gt; print(str + ", Tomer")<br/>
                Hello World, Tomer<br/>
            </code>
        </li>
        <li>
            <h4>Boolean</h4>
            <p>The <code>bool</code> type in Python designates a boolean. Variables of Boolean type may have one of two values: <code>True</code> or <code>False</code>.</p>
            <code>
                <br/>
                <u>create:</u><br/>
                bool = True<br/>
                <br/>
                <u>use:</u><br/>
                --&gt; print(bool)<br/>
                True
            </code>
        </li>
    </ol>
    </>
);

export default BasicTypes;