import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React,{useState} from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {
  const [todosList,setTodosList]=useState([
  ]);
  const onDelete=(todo)=> {
  
    console.log(todo.title +" Deleted");
    //let index=todosList.indexOf(todo);
    //todosList.splice(index,1);
    setTodosList(todosList.filter((e)=>{
    return e!==todo
  }));
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
    var newTodos=todosList.filter((e)=>{
      return e==e
    });
    newTodos.push(newTodo)
    setTodosList(newTodos)
  }



  return (
    <>
      <Header title="BadTodo" searchbar={true} logo={logo} />
      <AddTodo addTodo={onAdd}/>
      <Todos todos={todosList} onDelete={onDelete}/>
     
      <Footer />
    </>
  );
}

export default App;
