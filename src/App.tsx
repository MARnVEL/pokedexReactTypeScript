
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'

function App() {
  return (
    
    <Router>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
