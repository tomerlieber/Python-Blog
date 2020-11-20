import PythonBasics from './content/PythonBasics';
import Comment from './content/Comments';
import ZenOfPython from './content/ZenOfPython';
import BasicTypes from './content/BasicTypes';
import BasicOutput from './content/BasicOutput';
import BasicUserInput from './content/BasicUserInput';
import CallingFunctions from './content/CallingFunctions';
import CreatingFunctions from './content/CreatingFunctions';
import UsingModules from './content/UsingModules';
import CreatingModules from './content/CreatingModules';

const articles = [
    {
        name: 'python-basics',
        title: 'Python Basics',
        introduction: "A short tutorial how to install an IDE for Python and run your first program",
        content: PythonBasics
    },
    {
        name: 'comments',
        title: 'Comments',
        introduction: "When writing code in any programming language, it's important to make the code readable and clear so other people (include you) can easily maintain and develop the program. One way to do it is to use comments",
        content: Comment
    },
    {
        name: 'zen-of-python',
        title: 'Zen of Python',
        introduction: "The Zen of Python is a collection of 19 guidelines for the design of the Python programming language. The purpose of these guidelines is to make the code more readable and simple so it can be easily understood",
        content: ZenOfPython
    },
    {
        name: 'basic-types',
        title: 'Basic Types in Python',
        introduction: "In Python there are 5 basic types: Integers, Floating-Point Numbers, Complex Numbers, Strings and Boolean",
        content: BasicTypes
    },
    {
        name: 'basic-output',
        title: 'Basic Output',
        introduction: "The print() function prints the given object to the screen. The object will be converted into a string before written to the screen",
        content: BasicOutput
    },
    {
        name: 'basic-user-input',
        title: 'Basic User Input',
        introduction: "Programs sometimes need to interact with users through the keyboard. In Python 3, the function input() is used for it",
        content: BasicUserInput
    },
    {
        name: 'calling-functions',
        title: 'Calling Functions',
        introduction: "The Python programming language comes with a variety of build-in functions. Some functions are part of the base language and others require you to import from python modules",
        content: CallingFunctions
    },
    {
        name: 'creating-functions',
        title: 'Creating Functions',
        introduction: "As you can see in the previous post, Python gives you many built-in functions like print(), input() etc. But you can also create your own functions",
        content: CreatingFunctions
    },
    {
        name: 'using-modules',
        title: 'Using Modules',
        introduction: "A module is a file containing a set of functions and constants",
        content: UsingModules
    },
    {
        name: 'creating-modules',
        title: 'Creating Modules',
        introduction: "To create a module save the code you want in a file with the file extension .py",
        content: CreatingModules
    }
];

export default articles;