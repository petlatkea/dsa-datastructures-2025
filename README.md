# Data Structures

This is a (growing) collection of data structures implemented in JavaScript. Since JavaScript has an extremely flexible array-type, that can be used for almost anything, so these are rarely necessary in actual use. They are mostly intended for (my) learning - maybe you'll find the actual code somewhat interesting, but they aren't intended for use in real world projects.

Every data structure is written as an importable module with a class defining the structure. Most are independent, but a lot of them relies on the StaticArray, it can however easily be replaced by a normal JavaScript array.

You can copy an individual class to your own project, you don't need to import the entire repository.

## The data structures

The structures are:

* [StaticArray](/staticarray/) - an implementation of a fixed size array.

## Testing
There are unit tests for each data structure, written in mocha.
If you don't have Mocha installed globally, run ```npm install``` and you'll get a local dev-dependency installed.

Navigate to the subfolder of the data structure you wish to test, and run ```npx mocha``` in that folder. E.g.

    cd staticarray
    npx mocha

to run tests on the StaticArray type.

