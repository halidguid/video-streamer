import { useState , useEffect} from "react";
import {read, update} from "../services/apiService"

const StreamEdit = ({match, history}) => {
  const id = match.params.id
  const [input, setInput] = useState({
    title: "",
    description: "",
    userID: "Halid",
  });
  

  useEffect(() => {
   read(id, setInput)
  }, [])

  function onSubmit() {
    update(id, input)
    history.push("/")
  }

  return (
    <div>
      <h1>Stream Edit</h1>
      <form>
        Title:
        <input
          type="text"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        Description:
        <input
          type="text"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
      </form>
      <button onClick={onSubmit}>submit</button>
      <button>back</button>
    </div>
  );
};

export default StreamEdit;
