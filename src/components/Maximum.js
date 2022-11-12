function Maximum({a1, a2}){    
    let A = [...a1];
    let B = [...a2];

    function findMaxLenDiff(){
        
        if(A.length==undefined || B.length==undefined) return "Nothing";

        A.sort((a,b) => a.length-b.length);
        B.sort((a,b) => a.length-b.length);

        let aMin = A[0].length || 0;
        let aMax = A[A.length-1].length || 0;
        let bMin = B[0].length || 0;
        let bMax = B[B.length-1].length || 0;

        if(Math.abs(aMin-bMax) > Math.abs(bMin-aMax)){
            return Math.abs(aMin-bMax);
        }else{
            return Math.abs(bMin-aMax);
        }
    }

    return(
        <div>
            Maximun length difference of A1 and A2 = {findMaxLenDiff()}
        </div>
    );
}

export default Maximum;