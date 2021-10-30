import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [result,setResult]= useState("")
 const [operator, setOperator]= useState("")
 const [firstNumber, setFirstNumber]= useState("")
 const [secondNumber, setSecondNumber]= useState("")


 function addToFirstNumber(newNumber) {
   const newResult = firstNumber+newNumber;
   setFirstNumber(newResult);
   setResult(newResult);
 }

 const addAnOperator=(newOperator)=>{
   setOperator(newOperator);
   setResult(firstNumber+newOperator);
 }

 function addToSecondNumber(newNumber) {
   const newResult = firstNumber+operator+secondNumber+newNumber;
   setResult(newResult);
   setSecondNumber(secondNumber+newNumber);
 

 }

 const clearResult=()=>{
   setFirstNumber("")
   setSecondNumber("")
   setOperator("")
   setResult("")

 }

 const calculate=()=>{
   if (operator ==="+"){
     setResult(parseInt (firstNumber, 10) + parseInt (secondNumber, 10))
   }

   else if (operator ==="-"){
     setResult(parseInt (firstNumber, 10) - parseInt (secondNumber, 10))
   }

    else if (operator ==="X"){
     setResult(parseInt (firstNumber, 10) * parseInt (secondNumber, 10))
   }

   else if (operator ==="/"){
     setResult(parseInt (firstNumber, 10) / parseInt (secondNumber, 10))
   }
 }


  return (
    <div class="container">
    <div class="header">Calculator</div>
    <input type="text" class="result" value={result} readOnly style={{backgroundColor:"lightGrey"}}></input>
    <div class="first-row">
      <input type="button" name="" value="&radic;" class="global"></input>
      <input type="button" name="" value="(" class="global" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
      <input type="button" name="" value=")" class="global" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
      <input type="button" name="" value="%" class="global" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
    </div>
    <div class="second-row">
      <input type="button" name="" value="7" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="8" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="9" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="/" class="global" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
    </div>
    <div class="third-row">
      <input type="button" name="" value="4" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="5" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="6" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="X" class="global"></input>
    </div>
    <div class="fourth-row">
      <input type="button" name="" value="1" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="2" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="3" class="global" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
      <input type="button" name="" value="-" class="global" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
    </div>
    <div class="conflict">
      <div class="left">
        <input type="button" name="" value="0" class=" big" onClick={(e)=>{operator==="" ?addToFirstNumber(e.target.value): addToSecondNumber(e.target.value)}}></input>
        <input type="button" name="" value="." class=" small"></input>
        <input type="button" name="" value="Del" class=" red small white-text top-margin" onClick={(e)=>{clearResult()}}></input>
        <input type="button" name="" value="=" class=" green white-text big top-margin" onClick={(e)=>{calculate()}}></input>
      </div>
      <div class="right">
        <input type="button" name="" value="+" class="global grey plus" onClick={(e)=>{addAnOperator(e.target.value)}}></input>
      </div>
    </div>
  </div>
  );
}

export default App;
