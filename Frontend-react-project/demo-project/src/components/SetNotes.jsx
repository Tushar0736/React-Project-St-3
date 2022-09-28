import{useState} from 'react';
import TodoList from './TodoList'
import{nanoid} from 'nanoid';



function Notes() {
    const [notes,setNotes] = useState([
      {
      id: nanoid(),
      text:"This is demo node",
      date:"15/04/2021"
      }
  
  
    ]);
  
    // const [searchText,setSearchText] = useState(' ');
    // const [darkMode,setDarkMode]=useState(false);
  
  
    const addNote =(text)=>{
      const date = new Date();
      const newNote={
        id:nanoid(),
        text:text,
        date: date.toLocaleDateString()
      };
      const newNotes =[...notes, newNote];
      setNotes(newNotes);
    };  
    const deleteNote=(id)=>{
      const newNotes=notes.filter((note)=>note.id !==id);
      setNotes(newNotes);
    }
  
    return (
    //   <div className={`${darkMode && 'dark-mode'}`}>
  
          <>
  
          
          
          <div className='container'>
            <TodoList notes={notes.filter((note)=>note.text.toLowerCase())} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
          </div>
  
  
  
          </>
     
      
     
    );
  }

  export default Notes