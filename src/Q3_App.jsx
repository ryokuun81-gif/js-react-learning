import { useState } from "react";

export default function App() {
// Q2. 次の setState 更新で age は何になる？
// setUser(prev => {
//   prev.age = prev.age + 1;
//   return prev;
// });
// **prev.age = prev.age + 1;は正しいがreturn prev;元のオブジェクトと同じ参照

// Q3. 正しく age を 1 増やすコードに直してください。
// setUser(prev => {
//   prev.age++;
//   return prev;
// });
// 

const [user, setUser] = useState({name: "kato", age: 20});

  const updateAge = () => {
      //エラー：setUser をコンポーネント直下で実行しない。これは無限レンダリングになります。更新はイベントなどの中で行うように。
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
