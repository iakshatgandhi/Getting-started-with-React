import React from 'react'

// function App() {
//   const [count, setCount] = React.useState(0);

//   function onButtonHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={onButtonHandler}>counter {count}</button>
//     </div>
//   )
// } 

// function App() {
//   return (
//     <div>
//       <Button></Button>
//     </div>
//   )
// }

// function Button() {
//   const [count, setCount] = React.useState(0);

//   function onButtonClick() {
//     setCount(count + 1);
//   }

//   return React.createElement(
//     'button',
//     { onClick: onButtonClick },
//     `Counter ${count}`
//   );
// }

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <CusButton count = {count} setCount = {setCount}></CusButton>
    </div>
  )
}

//component
function CusButton(props) {
  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onButtonClick}> Counter  {props.count} </button>
}

export default App