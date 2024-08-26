import React, {Component, useState} from "react";
import '../styles/App.css';





class App extends Component {
    render() {
              

        const[name1,setName1]=useState('')
        const[name2,setName2]=useState('')
        const[result,setResult]=useState('')

        function handleRelationship(){
            if(!name1 || !name2){
                setResult("Please Enter valid input")
                return
            }
            let filterName1=name1
            let filterName2=name2
            for(let char of name1){
                if(filterName2.includes(char)){
                    filterName1.replace(char,'')
                    filterName2.replace(char,'')
                }
            }
            let lengthObtained=filterName1.length+filterName2.length;
            let answerObtained=lengthObtained%6;
            switch(answerObtained){
                case 0:
                    setResult('Siblings')
                    break;
                case 1:
                    setResult('Friends')
                    break;
                case 2:
                    setResult('Love')
                    break;
                case 3:
                    setResult('Affection')
                    break;
                case 4:
                    setResult('Marriage')
                    break;
                case 5:
                    setResult('Enemy')
                    break;
            }
        }





        return(
            <div id="main">
               <input type="text" data-testid="input1" value={name1} onChange={()=>{
                setName1(e.target.value)
               }}/>
               <input type="text" data-testid="input2" value={name2} onChange={()=>{
                setName2(e.target.value)
               }}/>
               <button data-testid="calculate_relationship"  onClick={handleRelationship}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={()=>{
                setName1('')
                setName2('')
                setResult('')
               }}>Clear</button>
               <h3 data-testid="answer">{result}</h3>
            </div>
        )
    }
}


export default App;
