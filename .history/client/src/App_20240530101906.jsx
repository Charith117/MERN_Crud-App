import { useState } from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './assets/components/User'
import CreateUser from './assets/components/CreateUser'
import UpdateUser from './assets/components/UpdateUser'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/update" element={<UpdateUser/>} />
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
