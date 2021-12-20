import axios from 'axios';
import React from 'react';
import {BiTrash} from 'react-icons/bi'


const TodoItem = ({item}) => {
    const handleDelete = async(id) =>{
        try{
            const response = await axios.delete(`http://localhost:8000/${id}/`)
        }catch(err){
            console.error(err)
        }

    }
    return (
        <div className='flex'>
            <div className='mr-3'>
                {item.id}
            </div>
            <div className='mr-3'>
                {item.title}
            </div>
            <BiTrash onClick={() => {
                handleDelete(item.id)
                }}/>
        </div>
    );
};

export default TodoItem;