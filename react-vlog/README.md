# CONTEXT API
 1. Create a context
 ```
 const userContext=createContext()
 ```

  2. Provider
  ```
  <userContext.Provider value={value}>

  </userContext.Provider>
  ```

   3. Use the context (consumer)
   ```
   useContext(userContext)
   ```