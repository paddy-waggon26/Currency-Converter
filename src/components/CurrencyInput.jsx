function CurrencyInput(props) {

    //passes the value entered up to app to be stored in UserInput
    function HandleInput(e) {
        props.onAmountChange(e.target.value);
    }

    return (
        <div>
            <label htmlFor="CurrInput">How much money would you like to convert?</label><br />
            <input
                type="number"
                value={props.amount}
                onChange={HandleInput}
                id="CurrInput"
                name="CurrInput">
            </input>
        </div>
    )
}
export default CurrencyInput