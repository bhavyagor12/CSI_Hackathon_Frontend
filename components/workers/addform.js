import { useState } from "react";
import ReactDOM from 'react-dom';

function addform() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

// ReactDOM.render(<addform />, document.getElementById('root'));

export default addform;