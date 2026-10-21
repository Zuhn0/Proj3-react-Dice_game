import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NumberSelector=({
   selectedNumber,setSelectedNumber
})=>{
const arrNumber=[1,2,3,4,5,6];
 
    return(
     <NumberSelectorContainer>
                <div className="flex">
            { //js assumes value as first and index as second in map
             arrNumber.map((value,i)=>
              ( <Box
                 isSelected={value === selectedNumber}
                 key={i}
                onClick={()=>
                    setSelectedNumber(value)}   //when we are passing a value we have to use callback fn as without it react will executes the function during rendering
              >{value}
              </Box>)
             ) }  
        </div>
        <p>Select Number</p>
     </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer =styled.div`
  display:flex;
  flex-direction:column;
  align-items:end;

     .flex{
        display:flex;
        gap:24px;
     }
     p{
        font-size:24px;
        font-weight:700px;
     }
`


const Box=styled.div`
    height:72px;
    width:72px;
    border: 1px solid black;
    display:grid;
    place-content:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props)=> props.isSelected ? "black" : "white"};
    color: ${(props)=> (!props.isSelected ? "black" : "white")};
`;