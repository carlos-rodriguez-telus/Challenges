function Palindrome(props){
    let word = String(props.input);
    let drow = word.split("").reverse().join("");
    return <div> input "{word}"  is palindrome? {String(word===drow)}</div>
}

export default Palindrome;