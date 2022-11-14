function Base64({input}) {
    let txt = input;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    let index = txt.length-1;
    let result = 0;
    let position = 1;

    while(index>=0){
        result += position * alphabet.indexOf(txt[index]);
        position = position * 64;
        index-=1;
    }

    return(
        <div>
            input: {input}, output: {result};
        </div>
    );
}

export default Base64;