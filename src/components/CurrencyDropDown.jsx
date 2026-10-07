function CurrencyDropDown(props) {
    //using props to reuse this component to create a dropdown box giving the currencies that can be converted (currently using these options as placeholders until I have the math and API working)
    return (
        <div>
            <label htmlFor={props.id}>{props.text}</label>
            <select id={props.id}>
                <option>GBP</option>
                <option>USD</option>
            </select>
        </div>
    )
}
export default CurrencyDropDown