Create first component as a function
A component is a JS function just return the JSX
1. Missed return in the Component 
2. Using lower case <header/> in the render

**Notice:**
Babel only support the one enclosed tag, so we need to add <div> to include the multiple components.


Component Properties
1. in the list we have to sync with the key of each item of the list
2. React.Fragment will not add anything to the DOM but it will allow to render the sibling components with ease.
