import { useState } from 'react'
import './App.css'
import CurrencyInput from './components/CurrencyInput'
import CurrencyDropDown from './components/CurrencyDropDown'
import ResultDisplay from './components/ResultDisplay'

function App() {
    //setting up the useState and the temporary conversion rate just for GBP to USD to test if my UI is working properly and showing the correct amount
    const [UserInput, SetInput] = useState("1");
    const tempRate= 1.32
    const converted= Number(UserInput)*tempRate

  return (
    <div className="App">
          <CurrencyInput amount={UserInput} onAmountChange={SetInput} />
          <CurrencyDropDown text="From" id="From"/>
          <CurrencyDropDown text="To" id="To"/>
          <ResultDisplay result={converted} from="GBP" to="USD" />
    </div>
  )
}


export default App
