# Understanding TypeScript

### Get TypeScript
#### Node.js
* The command-line TypeScript compiler can be **installed** as a Node.js package.
    ``` 
    npm install -g typescript 
    ```
        &&&
* Compilation to run your file
    ```
    tsc script.ts
    ```

### What is TypeScript?
    ``` 
    TypeScript (TS) is an JavaScript (JS) Superset. TS is not a programming language that is build up on JS that add new features and Advantages to JS. TS can't be executed by JS environments like the browsers
    ```

### Why TypeScript?
    ``` 
    function add(num1, num2) {
        return num1 + num2;
    };

    console.log(add('2', '3')); 
    ```
### TypeScrpit Overview
* TypeScript adds
* Types !
* Next Generation JS features (compiled down for older browsers)
* Non-JS Features like interfaces or generics
* Rich Configuration Options: TypeScript is highly configurable
* Meta-Programming features like decorators
* Modern tooling that helps even in Non-TS Projects

# Course Outline
* Getting Started
* TypeScript Basics: Compiler & Configuration Deep Dive
* Working with Next-Generation JS features/code
* Classes and Interfaces
* Advanced Types & TypeScript features: Generics, Decorators
* Working with Namespaces & Modules
* Webpack & TypeScript, Third Party Library & TypeScript
* React + TypeScript & Node.js + TypeScript

### Lectures on TypeScript

##### Working with Types

##### Core Syntax & Features

**Core Types**
** TypeScript Type system only helps you during development that's before the code gets compiled.

###### Numbers
```
1,5.3,10,14,127...
```
*All numbers, no differentiation between integers or floats*

###### String
```
'Hey', "My", `Bunny`
```
*All text values*

###### Numbers
```
true, false
```
*Just these two, no "truthy" or "falsy" values*

