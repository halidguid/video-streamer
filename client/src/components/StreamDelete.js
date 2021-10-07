import {remove} from '../services/apiService';

const StreamDelete = ({match, history}) => {

  const id = match.params.id;

  const deleteHandler = () => {
    remove(id)
    history.push("/")
  }
  return (
    <div>
      <h1> StreamDelete</h1>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default StreamDelete;
