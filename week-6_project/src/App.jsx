import React, {Fragment} from "react"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

// function App() {

//   const [title, setTitle] = useState("line 1 here update");

//   function updateTitle(){
//     setTitle ("updated area is " + Math.random());
//   }

//   return (
//     <Fragment>
//       <button onClick={updateTitle}>update the title</button>
//       <Header title={title}></Header>
//       <Header title="this is second line"></Header>
//     </Fragment>
//   )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

//function App() {
//   const [firstTitle, setFirstTitle] = useState("my name is xyz");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//       <br />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// const Header = React.memo(function ({title}) {
//   return <div>
//     {title}
//   </div>
// })



// let GLOBAL_ID = 4;
// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Go to gym",
//     description: "Need to hit the gym from 7-9PM"
//   }, {
//     id: 2,
//     title: "Go to Class",
//     description: "Need to go to the class from 4-7 PM"
//   }, {
//     id: 3,
//     title: "Eat food",
//     description: "Need to eat food from 2-4 PM"
//   }])

//   function addTodo() {
//     setTodos([...todos, {
//       id: GLOBAL_ID++,
//       title: "new todo",
//       description: "new todo desc"
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }





// return (
//   <div style={{display: "flex"}}>
//     <Card>
//       hi there
//     </Card>
//     <Card>
//       <div>
//         hello from the 2nd card
//       </div>
//     </Card>
//   </div>
// )
// }

// function Card({children}) {
// return <div style={{
//   border: "1px solid black",
//   padding: 10,
//   margin: 10
// }}>
//   {children}
// </div>
// 



// function App() {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get("'https://dummyjson.com/todos'")
//       .then(function(res) {
//         setTodo (res.data.todo);
//       })
//   }, [])

//   return(
//     <>
//     {todo.map(todo => <todo title={todo.title} description={todo.description} />)}
//     </>
//   )

// }
//   function todo({title, description}) {
//       return <div>
//       <h1>
//         {title}
//       </h1>
//       <h4>
//         {description}
//       </h4>
//     </div>
//   }
  



// use Memo
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for(let i=1;i<=inputValue; i++){
      finalCount += i;
    }
    return finalCount;
  },[inputValue]);
return (
  <>
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}placeholder={"Find sum from 1 to n"}></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>Counter({counter})
      </button>
    </div>
  </>
); 
}

export default App;
