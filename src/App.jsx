import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App