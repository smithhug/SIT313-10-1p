import Login from './Login'
import Signup from './Signup'
import NavigationBar from './NavigationBar';
import Home from './Home';
import FormPage from './FormPage';
import { Routes, Route } from 'react-router-dom';
import { AuthConfirm } from './utils/authstate';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <AuthConfirm>
      <div>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/PostJob' element={<FormPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </AuthConfirm>
  );
}

export default App;
