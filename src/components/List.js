import React from 'react'
import { BiEditAlt,BiTrashAlt } from "react-icons/bi";

const List = (props) => {
    const {id,name,removeItem,editItem}=props
    return (
        <div className='list-item'>
            <p key={id}>{name}</p>
            <div className='button-container'>
                <BiEditAlt onClick={()=>editItem(id)} className='btn'/>
                <BiTrashAlt onClick={()=>removeItem(id)} className='btn'/>
            </div>
        </div>

    )
}

export default List