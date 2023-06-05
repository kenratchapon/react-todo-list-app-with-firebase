import './App.css';
import {useEffect, useState} from 'react'
import List from './components/List';
import Alert from './components/Alert';
import { collection, onSnapshot, query, updateDoc,addDoc,deleteDoc,doc } from 'firebase/firestore';
import { db } from './firebase';


function App() {
	const [name,setName] = useState('')
	const [list,setList] = useState([])

	const [alert,setAlert] = useState({show:false,msg:'',type:''})

	const [checkEditItem,setCheckEditItem] = useState(false)
	const [editId,setEditId] = useState(null)

	//Create / update
	const submitData= async (e)=>{
		e.preventDefault()
		if(!name){
			setAlert({
				show:true,
				msg:'Please enter the information.',
				type:'error'
			})
		//Update
		}else if(checkEditItem && name){
			await updateDoc(doc(db, 'todos',editId),{
				name: name
			})
			setName('')
			setCheckEditItem(false)
			setEditId(null)
			setAlert({
				show:true,
				msg:'Item updated successfully.',
				type:'success'
			})
		//Create
		}else{
			await addDoc(collection(db, 'todos'),{
				name:name
			})
			setName('')
			setAlert({
				show:true,
				msg:'Data saved successfully.',
				type:'success'
			})
		}

	}
	//Read
	useEffect(()=>{
		const q =query(collection(db, 'todos'))
		const unsubscribe = onSnapshot(q,(querySnapshot)=>{
			let todosArr = []
			querySnapshot.forEach((doc)=>{
				todosArr.push({...doc.data(), id:doc.id})
			})
			setList(todosArr)
		})
		return ()=> unsubscribe()
	},[])
	//Delete
	const removeItem= async (id)=>{
		console.log('id', id)
		await deleteDoc(doc(db,'todos',id))
		setAlert({
			show:true,
			msg:'Item removed successfully.',
			type:'error'
		})
	}

	const editItem= (id)=>{
		setCheckEditItem(true)
		setEditId(id)
		const serachItem = list.find((item)=>item.id===id)
		setName(serachItem.name)
	}


	return (
		<section>
			<section className='container'>
				<div className='header'>
					<h1>TodoList Application </h1>
					<p>integrate with FireStore Database</p>
				</div>
				<form onSubmit={submitData}>
					<div className='form-control'>
						<input type='text' className='text-input' 
							onChange={(e)=>setName(e.target.value)}
							value={name}
						/>
						<button type='submit' className='submit-btn'>{checkEditItem ?'Edit':'Add'}</button>
					</div>
				</form>
				<section className='list-container'>
					{list.map((data,index)=>{
						return <List 
									key={index} 
									{...data} 
									removeItem={removeItem} 
									editItem={editItem}
								/>
					})}
				</section>
			</section>
			{alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
			<div className='box'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
			</div>
			
			<p className='footer'>© 2023 KenRatchapon</p>
		</section>
	);
}

export default App;
