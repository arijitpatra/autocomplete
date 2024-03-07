### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

A PureComponent is a component which is optimized for performance. Normal components can re-render even when their own props or states have not changed, but this is not the case with PureComponent. We can use memoization techniques to make a component pure.

### 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

Not very sure... The question is not very clear. Seems like it can be dangerous becuase context can get updated multiple times and everytime it updates, a component having shouldComponentUpdate have to run this function again and again causing bad performance.

### 3. Describe 3 ways to pass information from a component to its PARENT.

- Emit it up via the the callback function which was passed to the children by the parent as a prop.

- Using forward ref

- Using a central store - redux / context / other techniques.

Also we can use the lifting the state up concept, where were don't keep such an info in the child.

### 4. Give 2 ways to prevent components from re-rendering.

- We can use memoization technique like memo, wrapping the component by memo

- Avoiding un-necessary useEffects/useStates

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is used in JSX to wrap HTML elements which are siblings. It acts as a parent tag but doesn't contribute to the DOM. It can be either used like <>...</> or <Fragment>...</Fragment>. If we want to use it for React keys, we need to use the named version.

Haven't experienced a case of app breaking due to fragment, so unable to answer the 2nd part.

### 6. Give 3 examples of the HOC pattern.

- Used in redux like connect, mapDispatchToProps, mapStateToProps

- Creating variations of a component having similar logic

- Custom hooks can be alternative of HOCs

### 7. What's the difference in handling exceptions in promises, callbacks and async…await?

- In promises if a promise is rejected then we can catch it in a .catch()

- For callback we can use try/catch and throw exceptions

- For async...await also we can use a try/catch

### 8. How many arguments does setState take and why is it async.

It takes 2 arguments, the updater and the optional callback function, if passed it will be executed after the state change is done.

It is async because React does not immediately execute the state change as a performance booster. It batches the setStates and executes them collectively so that there is less re-render and performance improvement.

### 9. List the steps needed to migrate a Class to Function Component.

- First create a function, name it the same as the class component

- Instead of this.props you can only do props or better de-structure all props

- No need of render method since function component takes props and returns JSX

- For handling the state we need to use useState hook and have each state separated, now we don't need the state object

- We need to create useEffect hooks for each of the lifecycle, based on the dependency array's configuration, different life cycle methods can be replicated

### 10. List a few ways styles can be used with components.

- Use normal CSS or SASS/SCSS

- Use CSS modules

- Use CSS-in-JS solution like styled-components

### 11. How to render an HTML string coming from the server

- Using the renderToString function we can handle it and then we need to hydrate it

- We can also use dangeroulyUseInnerHtml function
