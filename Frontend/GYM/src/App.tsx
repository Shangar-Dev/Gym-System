import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Months from './Pages/Months'
import Offers from './Pages/Offers'
import Salary from './Pages/Salary'
import TimeOut from './Pages/TimeOut'
import Users from './Pages/Users'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-slate-950'>   
        <Navbar />
        <main className='container mx-auto p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/months" element={<Months />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/timeout" element={<TimeOut />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App