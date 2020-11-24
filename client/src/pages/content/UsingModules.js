import React from 'react'; // Maybe I can remove it

const UsingModules = () => (
    <>
    {/* <h1>Using Modules</h1> */}
    <p>
        <b>Definition</b><br/>
        A file containing a set of functions and constants.
    </p>
    <p>
        <b>Use a Module</b><br/>
        We can use the module, by using the <code>import</code> statement.<br/>
        <code>
        import math<br/>
        print(math.sqrt(3))
        </code>
    </p>
    <p>
        Another way to use a module is to import only parts from the module, by using the <code>from</code> keyword.<br/>
        <code>
        from math import exp<br/>
        print(exp(1))
        </code>
    </p>
    </>
);

export default UsingModules;