import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React,{useState} from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {
  let initTodo=[]
  if(localStorage.getItem("badtodos")!=null)
  {
    initTodo=JSON.parse(localStorage.getItem("badtodos"))
  }

  const [todosList,setTodosList]=useState(initTodo);
  const onDelete=(todo)=> {
  
    console.log(todo.title +" Deleted");
    let newTodos=todosList.filter((e)=>{
    return e!==todo
  });

  setTodosList(newTodos)
  localStorage.setItem("badtodos",JSON.stringify(newTodos))
  }
  const onAdd=(title,desc)=>{
    console.log(title+" Added");
    let newSno=todosList.length+1;
    const newTodo={
      sno: newSno,
      title: title,
      desc: desc,
      complete:false
    }
    var newTodos=[...todosList,newTodo]
    setTodosList(newTodos)
    localStorage.setItem("badtodos",JSON.stringify(newTodos))
  }



  return (
    <>
      <Header title="BadTodos" searchbar={false} logo={logo} />
      <AddTodo addTodo={onAdd}/>
      <Todos todos={todosList} onDelete={onDelete}/>
     
      <Footer />
    </>
  );
}

export default App;
