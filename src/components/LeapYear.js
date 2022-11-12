function isLeapYear(year){
    let input = Math.abs(Number(year));
    return (input%400===0 || (input%4===0 && input%100!=0));    
}

function LeapYear({year}){
    return(
        <div>
            Year: {year} is leap? {String(isLeapYear(year))}
        </div>
    ); 
}

export default LeapYear;