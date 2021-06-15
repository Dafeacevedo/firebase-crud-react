import React,{useEffect,useState} from 'react'
import Linkform from './Linkform';
import { toast } from 'react-toastify';

import {db} from'../firebase';


const Links=()=>{

const[links,setLinks]= useState([ ]);
const[currentId, setCurrentId]=useState('')
  
const addOrEditLink= async (linkObject)=>{
    try {
        if(currentId==="")
        {await db.collection('links').doc().set(linkObject)
        toast('Nuevo link agregado',{type:'success',autoClose:1500})
    }else{
    db.collection('links').doc(currentId).update(linkObject)
    toast('Link actualizado',{type:'info',autoClose:1500});
    setCurrentId('')
}

    } catch (error) {
        console.error(error);
        
    }


}  

const onDeleteLink= async id =>{
if(window.confirm("¿Esta seguro de querer eliminar este enlace?"))
   await db.collection('links').doc(id).delete()
   toast('link eliminado',{type:'error', autoClose:1500})

}

const getLinks=  () =>{    
    db.collection  ('links').onSnapshot((querySnapshot)=>{
    const docs=[];
    querySnapshot.forEach(doc=>{
    
        docs.push({...doc.data(), id:doc.id});
    })
    setLinks(docs)

   });

}
    useEffect(()=>{
    getLinks();
},[])

return  <div>
<Linkform {...{addOrEditLink, currentId, links}}/>
<div className="col-md-8">
    {links.map(link => (
        <div className="card mb-1" key={link.id}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <div>
                <i className="material-icons text-danger" onClick={()=>onDeleteLink(link.id)}>close</i>
                 <i className="material-icons" onClick={()=>setCurrentId(link.id)}>create</i>

                </div>
                </div>
                <p>{link.description}</p>
                <a href={link.url} target="_blank" rel="noreferrer">Go to website</a>
            </div>
        </div>
    ))}
</div>
</div>

};

export default Links;
