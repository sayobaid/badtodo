import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    let val="23";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");

    }

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" placeholder="Todo Title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="tododesc">Todo Description</label>
                    <input type="text" className="form-control" id="tododesc" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Todo Description" required />
                </div>
                <button type="submit" className="btn btn-success my-3">Submit</button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {}

export default AddTodo