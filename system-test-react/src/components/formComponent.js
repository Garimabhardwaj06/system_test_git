import React from 'react';
import InputComp from './inputComp.js'
import { Container } from "react-bootstrap"

const FormComp=(props)=>{

    let updateData = {
        "status":props.existingData.status,
        "name":props.existingData.name,
        "shopName": props.existingData.shopName

    }

    let callApi=()=>{
        let methodApi="PUT"
        let url = `/api/shop/${props.existingData.userId}/`
        if (props.existingData.userId==undefined){
       
            url = `/api/shop/`; 
            methodApi = 'POST'
        }
        fetch(url,{
            method:methodApi,
            body: JSON.stringify({
                status:updateData["status"],
                name:updateData["name"],
                shopName:updateData["shopName"],
                date:"2019-09-30"
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
        })
        .then(() => {
            window.location.reload();

            
                })
        .catch(err=>console.log("error: ",err))

        
    
    }


    let handleStatusInput = (e)=>{
       updateData["status"]=e.target.value
      
    }

    let handleShopNameInput = (e)=>{
        updateData["shopName"]=e.target.value
    }
    let handleDataInput = (e)=>{
        updateData["name"]=e.target.value
    }
return (
    <div >
        <InputComp fieldName = "Name" handleInput= {handleDataInput} 
        placeHolderData={props.existingData["name"]}
        />
        <br/>
        <InputComp fieldName = "Shop Name" handleInput= {handleShopNameInput}
        placeHolderData={props.existingData["shopName"]}
        />
        <br/>
        <InputComp fieldName = "Status" handleInput= {handleStatusInput}
        placeHolderData={props.existingData["status"]}
        />
        <br/>
       <button type ="submit" onClick={()=>callApi()}>Submit</button>
    </div>
)
}

export default FormComp;