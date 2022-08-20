import './App.css';
import { useState } from 'react';
import Footer from "./Footer/Footer.js"


function App() {

  const [expression, setExpression] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [answer, setAnswer] = useState("");

  const displayNum = (newElement) => {  
    
    setExpression(prev => prev + newElement)
    setInputValue(() => newElement)
  }

  const displayOpr = (newElement) => {
    setExpression(expression + ' ' + newElement + ' ')
  }

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(prev => prev + "=")
    setInputValue("");
  }

  const clear = () => {
    setExpression(prev => prev.split("")
                              .slice(0, prev.length-1)
                              .join(""));
    setAnswer("");
    setInputValue(0);
  }

  const allClear = () => {
    setExpression("");
    setAnswer("");
    setInputValue(0);
  }

  const decimal = () => {
    const expressionArray = expression.split(' ')
    const lastElement = expressionArray[expressionArray.length - 1]
    if(!lastElement.includes('.')){
      setExpression(expression + '.')
    }
  }

  return (
    <div className="mainClass">
      <h2>A Basic Calculator</h2>

      <div className="App">
     
      <div className='calculator'>
      
        <div id="display"> 

          <div className="inputClass">
            {inputValue}
          </div>         
          <div className="expressionClass">
            <input type="text" placeholder="0" value={expression} />
          </div>         
          <div className="answerClass">
            {answer} 
          </div>    

        </div>

        

        <button id="clear" onClick={()=> clear()}> C </button>
        <button id="clear" onClick={()=> allClear()}> AC </button>


        <button id="seven" onClick={()=>displayNum('7')}>7</button>
        <button id="eight" onClick={()=>displayNum('8')}>8</button>
        <button id="nine" onClick={()=>displayNum('9')}>9</button>
        <button id="multiply" onClick={()=>displayOpr('*')}> * </button>
        <button id="four" onClick={()=>displayNum('4')}>4</button>
        <button id="five" onClick={()=>displayNum('5')}>5</button>
        <button id="six" onClick={()=>displayNum('6')}>6</button>
        <button id="divide" onClick={()=>displayOpr('/')}> / </button>
        <button id="one" onClick={()=>displayNum('1')}>1</button>
        <button id="two" onClick={()=>displayNum('2')}>2</button>
        <button id="three" onClick={()=>displayNum('3')}>3</button>
        <button id="add" onClick={()=>displayOpr('+')}> + </button>
        <button id="zero" onClick={()=>displayNum('0')}>0</button>
        <button id="decimal" onClick={() => decimal()}> . </button>    
        <button id="equals" onClick={calculate}>=</button>    
        <button id="subtract" onClick={()=>displayOpr('-')}> - </button>

      </div>
      
      <Footer />
    </div>
    </div>
    
  );
}

export default App;
