function DigitalRoot({input}){
    let array = [...input];
    let numbers = array.map((item) => Math.trunc(item));
    let result = 0;

    while(numbers.length!=1){
        let sum = numbers.reduce((acum, item)=>{
            return acum + item
        });
        let temp = String(sum).split("");
        numbers = temp.map(((item) => Math.trunc(item)));
        result = numbers[0];
    }

    return(
        <>
            Digital Root is: {result}
        </>
    );
}

export default DigitalRoot;