import axios from "axios";
import { useState } from "react";

const SearchTask = ({Api}) => {
    const [id, setId] = useState('')
    const [state, setState] = useState(false)
    const handleSearch = async (e) =>{
        e.preventDefault()
        if(id){
            try{
                const response = await axios.get(`${Api}${id}`)
                setState(response.data)
            }catch(err){
                console.log(err)
            }
        }
        else{
            alert('Llenar todos los campos')
        }
    }
    const clearSearch = (e)=>{
        e.preventDefault()
        setState(false)
    }
    return(
        <div className="my-5 p-5 bg-slate-100">
            <form>
                <label className='px-2 mr-3'>Search Task</label>
                <input className='px-2 mr-3 rounded-lg border border-black bg-slate-100' name="id" placeholder="id" onChange={(event) => setId(event.target.value)}/>
                <button className='py-px px-2 mr-3 rounded-lg border border-black bg-slate-200' type="submit" onClick={handleSearch}>Search</button>
                <button className='py-px px-2 mr-3 rounded-lg border border-black bg-slate-200' onClick={clearSearch}>Clear</button>
            </form>
            {state && <div className="flex flex-col items-center mt-5">
                <div>{state.title}</div>
                <div>{state.description}</div>
            </div>}
        </div>
    )
}

export default SearchTask