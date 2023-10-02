import Login from './Login'
import Signup from './Signup'
import NavigationBar from './NavigationBar';
import Home from './Home';
import FormPage from './FormPage';
import MyFooter from './MyFooter';
import { Routes, Route } from 'react-router-dom';
import { AuthConfirm } from './utils/authstate';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <AuthConfirm>
      <header>
        <NavigationBar/>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/PostJob' element={<FormPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
      <footer>
        <MyFooter/>
      </footer>
    </AuthConfirm>
  );
}

export default App;
