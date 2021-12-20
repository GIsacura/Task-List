import axios from "axios";
import { useState } from "react";


const UpdateTask = ({Api}) => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) =>{
        //e.preventDefault()
        if(id && status.length > 0 && description.length >0 && title.length > 0){
            try{
                const response = await axios.put(`${Api}${id}`,{
                title: title,
                description: description,
                status: status
            })
            }catch(err){
                console.log(err)
            }
        }
        else{
            alert('Llenar todos los campos')
        }
    }
    return (
        <div className="my-5 p-5 bg-slate-100">
            <form>
                <label className='ml-2 mr-3'>Update Task</label>
                <input className='px-2 mr-3 rounded-lg border border-black bg-slate-100' name="id" placeholder="id" onChange={(event) => setId(event.target.value)}/>
                <input className='px-2 mr-3 rounded-lg border border-black bg-slate-100' name='title' placeholder="title" onChange={(event) => setTitle(event.target.value)}/>
                <input className='px-2 mr-3 rounded-lg border border-black bg-slate-100' name='description' placeholder="description" onChange={(event) => setDescription(event.target.value)}/>
                <select className='px-2 mr-3 rounded-lg border border-black' name="status" onChange={(event) => setStatus(event.target.value)}>
                    <option disabled selected>Choose a status</option>
                    <option value='true'>List</option>
                    <option value='false'>No completed</option>
                </select>
                <button className='py-px px-2 mr-3 rounded-lg border border-black bg-slate-200' type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};


export default UpdateTask;