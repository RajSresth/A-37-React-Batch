# 3. What is JSX? What are the rules to rite JSX?

 1. JSX stands for JavaScript XML.
 2. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. 
 3. It was introduced by Facebook (Meta) for React.

There rules are:- 
1. Return Only One Parent Element
2. All Tags (including Self-Closing Tags) Must Be Properly Closed . 
3. Use CamelCase for Attributes (ex:- onclick, onChange)
4. JavaScript Expressions in {}
5. To write comment in JSX use 
  ``` {/* */} ```
6. Don't use if-else directly inside JSX instead use ternary or logical operator.
7. Use className instead of class.
8. Use htmlFor instead of for in label tag.


# 4. What is a component in React? Types of component?
A component in React is a reusable(self-contained) piece of code that returns  some piece of JSX.

It is of 2 types
1. Class Based component(CBC)
    i) A Class Component is a JavaScript class that extends React.Component.
    ii) It has render() method to return JSX.
    iii) It was the traditional way of writing React components before 2019.

2. Function Based Component (FBC)
   i) A function based component is a simple javascript function which returns some piece of jsx.
   ii) It is now the recommended and most popular way to write components in modern React.

# What is React.Fragment and What is Empty Fragment?
1. Fragment:- A wrapper component that lets you group multiple elements without adding an extra DOM node to the HTML output. 

2. Empty Fragment:- A shorthand syntax for React.Fragment that does the same thing — groups elements without extra DOM nodes — but doesn't support the key prop.

Note:- we can not write id and className attribute in both fragment.


# What is Component Composition?