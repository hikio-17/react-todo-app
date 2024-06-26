import { useContext } from "react";
import { TodoContext } from "../App";

/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
   const { toggleCompleted, deleteTodo } = useContext(TodoContext);
   const getTodoTitleStyle = () => {
      if (todo.completed) {
         return { textDecoration: 'line-through '}
      } else {
         return { textDecoration: 'none' }
      }
   };

   return (
      <div style={styles.todoItem}>
         <input 
            type="checkbox" 
            style={styles.checkbox}
            onChange={() => toggleCompleted(todo.id)}
         />
         <p style={getTodoTitleStyle()}>{todo.title}</p>
         <button 
            style={styles.button}
            onClick={() => deleteTodo(todo.id)}
         >X</button>
      </div>
   )
}

const styles = {
  todoItem: {
   border: '2px solid #f4f4f4',
   fontSize: '24px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '10px'
  },
  checkbox: {
   width: '18px',
   height: '18px',
   marginRight: '10px'
  },
  button: {
   backgroundColor: '#BB0000',
   color: '#fff',
   height: '30px',
   width: '30px',
   borderRadius: '100%',
   border: 'none',
   cursor: 'pointer',
   fontSize: '16px',
 },
}

export default TodoItem;