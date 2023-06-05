import React, { useEffect } from 'react'

const Alert = (props) => {
    const {msg,type,setAlert,list} = props
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({show:false,msg:'',type:''})
        },3000)
        return()=>clearTimeout(timeOut)
        // eslint-disable-next-line
    },[])
    return (
        <div className={`alert ${type}`}>{msg}</div>
    )
}

export default Alert