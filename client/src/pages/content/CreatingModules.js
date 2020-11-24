import React from 'react'; // Maybe I can remove it

const CreatingModules = () => (
    <>
    {/* <h1>Creating Modules</h1> */}
    <p><b>Create a Module</b><br/>
        To create a module save the code you want in a file with the file extension .py
    </p>
    <p>
        <u>Example:</u><br/>
        Save this code in a file named myModule.py.
    </p>
    <br/>
    <code>
        def sayBye(name):<br/>
        &emsp;&emsp;print("Bye Bye, " + name)
    </code>
    <p>
        And that's it, now you have a model that ready to use!<br/>
        <br/>
        * If you haven't read the previous post, feel free to do so as it explains how to use a model.
    </p>
    </>
);

export default CreatingModules;