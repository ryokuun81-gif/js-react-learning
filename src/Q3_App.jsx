import { useState } from "react";

export default function App() {
// Q3. 正しく age を 1 増やすコードに直してください。
// setUser(prev => {
//   prev.age++;
//   return prev;
// });

const [user, setUser] = useState({name: "kato", age: 20});

  const updateAge = () => {
      setUser( prev=> ({
      ...prev, age:prev.age + 1
    }));
  }

  return (
    <>
      <p>{user.age}</p>
      <button onClick={updateAge}>+1</button>
    </>
  );

}
