import './App.css';
import Header from './components/Heading';
import TypingBox from './components/TypingBox';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
        <Header/>
        <TypingBox/>
        <Footer/>
        <Contact/>
    </div>
  );
}

export default App;
