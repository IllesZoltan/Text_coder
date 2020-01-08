
const secretTable = {
    a: 'b',
    b: 'c',
    l: '_',
    d: '1',
    w: 'm',
    t: 'g',
    o: '#'
};


export const encode = (text) => {
    const chars = [...text];
    let t =[];

    chars.forEach(element => {
    if(chars in secretTable){
        t.push(secretTable[element]);
    }else{t.push(element);}
  });  

    t=chars.map(char => secretTable[char] ? secretTable[char] : char);

    return t.join('');
};

export function decode(text){
    const chars = text.split('');
    const visszaFele = {};
    const buffer=[];

    Object.entries(secretTable).forEach( ( [key,value] ) => {
        visszaFele[value] = key;
    } );

    chars.forEach(char => {
        char in visszaFele ? buffer.push(visszaFele[char]) : buffer.push(char);
    });

    //console.log(visszaFele);

    return buffer.join('');

}



