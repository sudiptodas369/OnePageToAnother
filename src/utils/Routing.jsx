
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={< Home />}></Route>
      <Route path="/about" element={< About />}></Route>
      <Route path="/user" element={< User />}>
        <Route path="/user/:name" element={< UserDetails />}></Route>
      </Route>
      
    </Routes>
    </>
  )
}

export default Routing