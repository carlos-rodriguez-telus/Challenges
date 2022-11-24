function Parent({input}) {
    let array = String(input).split("");
    array.sort((a,b)=> b.localeCompare(a, undefined, { caseFirst: 'upper' }));
    array.reverse();
  return (
    <div>
        Input: <br/>
        {input} <br/>
        Output: <br/>
        {array.join("")}
    </div>
  )
}

export default Parent;