const { createContext, useState } = require("react");

export const UserContext = createContext({
   age: '',
   changeAge: () => null,
});

export const UserProvider = ({children}) => {
   const [age, setAge] = useState(1);

   const changeAge = (amount) => {
     const data =  parseInt(amount * age , 10);
     setAge(data);
     return data;
   }

   const value = {age, changeAge};
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}