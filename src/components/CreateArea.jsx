import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const[noteState,setNoteState]=useState(false);
 
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function toggleState(){
    setNoteState(true);
    
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
     { noteState ?
        <input 
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={noteState ? 3 : 1}
          onClick={toggleState}
        />
     <Zoom in={noteState}><Fab onClick={submitNote}><AddIcon />  </Fab></Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
