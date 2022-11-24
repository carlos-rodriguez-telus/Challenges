function HightestWord({input}){
    let values = "abcdefghijklmnopqrstuvwxyz"
    let txt = String(input).toLowerCase();

    let array = txt.split(" ");
    let pos = 0;
    let val = 0;
    let points = 0;

    for (let i = 0; i < array.length; i++) {
        let currentVal = array[i].split("").reduce((acumulated, letter)=> acumulated + values.indexOf(letter), 0);
        if(val<=currentVal) {
            pos = i
            val = currentVal
            points = currentVal
        };
    }

    return(
        <div>
            input: "{input}" <br/>
            Most valuable word in input: {array[pos]}, points {points}
        </div>
    );

}

export default HightestWord;