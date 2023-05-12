import './style.css'


export function reverseWords(str) {
    let tempChars= str.split(''); 
    let tempStr='';
    let tempArr=[];
    for(let i=0; i<tempChars.length; i++) {
      let element =tempChars[i];
      if(element !==' '  && i+1!=tempChars.length)
        tempArr.push(element);
       else 
          {
          tempStr+= tempArr.reverse().join('');
          tempArr=[];
          tempStr+=element;
          }
    }
    return tempStr;
      
  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); 