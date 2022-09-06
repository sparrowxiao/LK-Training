### 1. Create React App Porject
* Update my local brew/node/npm version
* If npm -v > 5 then can use npx command
* Create a react app
### 2. A React App Porject folder
* Strict mode 
  * Is being a tool for highlighting any potential problems in your app. 
  * It is just a package that's going to activate some additional checks to let you know if your've written any code incorrectly. 
  * But these are only going to run in development. 
  * They are not going to run in production.
* App Component is matched with App.js + App.css
* Package.json is used for installing all the app dependencies. node_modules will be generated
### 3. Destructuring arrays and objects
* `{props}` --> `{ destructure_name }`
### 4. The useState Hook
* Is more easier way to destructure the objs, and also can keep code clean and we don't need to set property from outside of the component.
* `import {useState} from "react"`
### 5. The useEffect Hook
* `import {useEffect} from "react"`
* It is a kind of side effect happened along side with the render.
* Can specify the when this side effect can happen
* The second parameter is set as empty array, can tell this function will not be called once after page **first render**.
  `useEffect(()=>{
    console.log(`it is first emotion changed into ${emotion}`);
  },[]);`
### 6. Understanding the dependency array in the useEffect Hook
* Comment out the code in JSX: `{/* A JSX comment */}`
* `import {useEffect} from "react"`


