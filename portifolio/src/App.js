import './App.css';
import Profile from './components/Home/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="MainContent">
      <Profile/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
