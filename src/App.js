import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Welcome from './components/welcome';
import {AuthProvider} from './components/context/authContext';
import {ProtectedRoute} from './components/protectedRoute'


function App() {
  return (

    <AuthProvider>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>} exact  />
        <Route  path='/signin' element={<Signin/>} exact />
        <Route  path='/signup' element={<Signup/>} exact />
        <Route  path='/welcome' element={
        <ProtectedRoute> <Welcome/> </ProtectedRoute>} exact />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
