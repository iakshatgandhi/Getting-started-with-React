import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, lazy, useState} from 'react'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path="/dashboard" element={<Suspense fallback={"loading ..."}><Dashboard /></Suspense>} />
//         <Route path="/" element={<Suspense fallback={"loading ..."}><Landing /></Suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();  // The useNavigate hook returns a navigate function that you can use to navigate to a different location.
//   //its the initialization of the navigate function
//   return <div>
//     <div>
//         <button onClick={() =>{
//           navigate('/dashboard')
//         }}>Dashboard</button>
//         <button onClick={() =>{
//           navigate('/')
//         }}>Landing</button>
//       </div>
//   </div>
// }

// Prop Drilling
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count} setCount ={setCount}/>
    </div>
  )
}

// function Count({count, setCount}) {
//   return <div>
//     {count}
//     <Buttons count={count} setCount={setCount}/>
//   </div>
// }

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
