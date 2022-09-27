import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId]= useState(null);
  const [alert, setAlert] = useState({
    show:false, 
    msg:'', 
    type:''});

  const handelSubmit = (e) =>{
    e.preventDefault();
    if(!name) {
      //displayAlert
      //setAlert({show:true, msg:'Please enter value', type:'danger'})
      showAlert(true, 'Please enter value','danger')
    }
    else if(name && isEditing){
      setList(list.map( (item)=>{
        if(item.id  === editId){
          // si item id = edit id alors on récupère notre objet et les propriétés existantes, puis ont met à jour le titre
          return {...item, title:name}
        }
        // on retour le reste de notre liste
        return item;
      }))
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'item updated' ,'success')

    } else{
      //show alert 
      // create new item
      showAlert(true, 'item add to the list' ,'success')
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, msg='', type='') =>{
    setAlert({show, msg, type})
  }

  const clearList = () =>{
    showAlert(true, 'empty list', 'danger')
    setList([]);
  }

  const removeItem = (id) =>{
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item)=> item.id !== id))
  }

  const editItem= (id)=>{
    // on récupère l'item de la liste que l'on veut mettre à jour 
    const specificItem = list.find((item)=> item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title);
  }

  useEffect( ()=>{
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])

  return(
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handelSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder="e.g. eggs" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <button type="submit" className='submit-btn'>{isEditing ?'edit':'submit'}</button>
        </div>
      </form>
      {list.length > 0 && 
        <div className="grocery-container">
          <List items={list} removeItem={removeItem}  editItem={editItem}/>
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      }
    </section>  
  )
}

export default App
