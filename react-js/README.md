# Note

1. Frist letter of the component must be capital
2. Diffing algo and reconciliation
3. only one comopnent(function) allowed to be default export
4. Wrap named export components in { }

```
const Demo=()=>{
    return "hello world"
}
export {Demo}
```
5. LIFE CYCLE METHOD
- Class components uses life cycle method to perform multiple task.
- Lfe cycle method has no unnecessary boilerplate code so the application is getting complex and hard to manage
>Lifecycle methods : mounting ,updating ,unmounting
- so thats why we shofted to functional component. 
6. WE cannot re-render normal variable in JSX.
7. inside onclick or any event just write the function name,no parenthesis

## HOOKS

 1. Hooks are function
 2. Hooks allows you to use state and other features without writing a class
>There are 2 rules to use Hooks
 1. Only call Hooks at the top level
 2. Only call Hooks from react function

 ```
 const App = () => {

//Define Hooks

  return (
    <>
    </>
  )
}
```

 - We can't rerender or update the value or state declared in normal js variable.