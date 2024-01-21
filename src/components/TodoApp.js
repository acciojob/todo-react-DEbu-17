import React,{useState} from "react";

const TodoApp = () => {

const [search,setSearch] = useState("");
const [todoArray,setToDoArray] = useState([]);
 console.log(todoArray);
function addTodo(){
  setToDoArray([
    ...todoArray,
    {
      search: search,
      id: (todoArray.length > 0 && todoArray[todoArray.length - 1].id + 1) || 1,
    },
  ]);
 
  setSearch(""); 
}

function deleteTodo(deleteId){
   const filteredArray = todoArray.filter((item)=>item.id !== deleteId);
   setToDoArray(filteredArray);
}

    return (
      <div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {todoArray.length > 0 &&
            todoArray.map((item) => (
            
                <li>
                  {item.search}
                  <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
             
            ))}
        </ul>
      </div>
    );
}

export default TodoApp;