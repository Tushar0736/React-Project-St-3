
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Notes from './components/SetNotes'
import './App.css';
import { Calendar } from 'react-calendar';
import News from './components/News/News';

  
function App() {
  return (
    <div>
    <Navbar />
    <Hero />
        <h2 id="heading-todolist">TO-DO LIST</h2>
        <h3 id='content-todolist'>You can add any important note here!!</h3>
        <br></br>
    <Notes />
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <h2 id='heading-todolist'>CALENDAR</h2>
    <div className='container' style={{width: "25vw"}}><Calendar /></div>
  <br></br>
  <br></br>

    {/* <Weather /> */}
    <News />
    <Footer />
      
    </div>
  );
}

export default App;
