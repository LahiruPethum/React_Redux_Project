import { Hidden } from "@material-ui/core";

import React, { useState} from "react";
import styled from "styled-components";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import './Inventory.css'

// const Wrapper = styled.div`

// position: relative;
// margin: 10px;
// width: 100%;
// height: 100vh;

// padding: 0;
// background-color: rgb(243, 228, 96);

// border-radius: 7px;
// float: left;
// flex-direction: row;

//     display: flex;
  
// `;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color:orange;
  border-radious: 3px;
  position: relative;
  float: left;
flex-direction: row;

`;

// const droppableStyle = {
//   backgroundColor: "yellow",
//   width: "200px",
//   height: "100px",
//   margin: "10px ",
//   padding:"10px",
//   display:"flex",
//   position: "relative",
//   display: 'flex'
// ,
 
// };


const droppableStyle={
  backgroundColor: "yellow",
  width: "200px",
  height: "100px",
  margin: "5px ",
  padding:"10px",
  display:"flex",
  position: "relative",
  display: 'flex'
}

const Wrapper = {
  position: 'relative',
  margin: '10px',
  width: '100%',
  height: '85%',
  
  padding: '0',
  backgroundColor: 'rgb(243, 228, 96)',
  
  borderRadius: '7px',
 
  flexDirection: 'row',
  
      display: 'flex',
}

const buttonStyle ={
  margin:'20px'

}

// function newItemComp (){
//   document.getElementById('containerId').prepend((
//     <Draggable id="item1" style={{ margin: "8px" }}>
//               <Item>itejm</Item>
//             </Draggable>
//   ));
//  return(
//    <Draggable id="item1" style={{ margin: "8px" }}>
//              <Item>itejm</Item>
//            </Draggable>
//  )
//}

// function addItem(){
//   newItemComp();
// }


function  DragDrop(){

const [item, setItem] = useState(
  [
   {
    id:1,
    //name:item1
  
   },
   {
    id:2,
   // name:item2
  
   }  

          
  ])

  const itemComponent = () => {
    return item.map((aItem) => {
      return (
        <Draggable id={aItem.id} style={{ margin: "8px" }}>
            <Item>Item{aItem.id}</Item>
          </Draggable>
      )
    })
  }

  

  var i=3;
  const addNewItem = () =>{
    const newItem = {
      id:i
      //name:item3
    }
    setItem((item)=>item.concat(newItem));
    i++;
  }


    return (
      <div >
        <button className = 'btn btn-success ' style={buttonStyle} onClick={addNewItem}>Add</button>
        
        <div style={Wrapper}>
        
        
        
       
          <div> 
          <Droppable id="dr1" style={droppableStyle}>


          {/* <Draggable id="item1" style={{ margin: "8px" }}>
              {newItemComp}
            </Draggable> */}

            {itemComponent()}
            {/* <Draggable id="item3" style={{ margin: "8px" }}>
              <Item>item1</Item>
            </Draggable>
            <Draggable id="item4" style={{ margin: "8px" }}>
              <Item>item2</Item>
            </Draggable> */}
          </Droppable>


          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>

          
          </div> 
         <div>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          

          
          </div> 
          <div>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          

          
          </div> 
          
          <div>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          <Droppable  style={droppableStyle}/>
          

          
          </div> 
           
        </div>
      </div>
    );
    
}

export default DragDrop;
