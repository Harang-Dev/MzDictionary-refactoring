import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Auth/LoginPage';
import SignUp from './pages/Auth/SignUpPage';
import ForgotPasswordPre from './pages/Auth/ForgotPasswordPrePage';
import Search from './pages/Dictionary/SearchWord';
import CustomHeader from './components/layout/Header';
import CustomFooter from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgotpw" ;

  return (
    <>
      {!hideHeaderFooter && <CustomHeader />}
      {children}
      {!hideHeaderFooter && <CustomFooter />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpw" element={<ForgotPasswordPre />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
