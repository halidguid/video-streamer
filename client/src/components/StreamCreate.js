import { useState } from "react";
import { insert } from "../services/apiService";
const StreamCreate = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    userID: "Halid",
  });

  function onSubmit() {
    insert(input);
  }

  return (
    <div>
      <h1>StreamCreate</h1>
      <form>
        Title:
        <input
          type="text"
          placeholder="title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        Description:
        <input
          type="text"
          placeholder="title"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
      </form>
      <button onClick={onSubmit}>submit</button>
      <button>back</button>
    </div>
  );
};

export default StreamCreate;
