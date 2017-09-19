module.exports = function check(str, bracketsConfig) {
    let result = str.split('');
    let brackets = '';
    let bracketsStack = '';
  
	  for (let j = 0; j < bracketsConfig.length; j++) {
		  brackets += bracketsConfig[j][0]+''+bracketsConfig[j][1]
	  };

    for(let i = 0; i < result.length; i++) {

        if (brackets.indexOf(result[i]) !== -1 ) {

           if ( (brackets.lastIndexOf(result[i])%2 === 1) && (brackets.lastIndexOf(result[i])===brackets.indexOf(result[i])) ) { 

                	if (bracketsStack === '') return false;

                	(brackets.indexOf(bracketsStack[bracketsStack.length-1] + result[i]) === -1) 
                	? (()=>{return false})() 
                	: bracketsStack = bracketsStack.slice(0,-1); 	

           	} else if (brackets.lastIndexOf(result[i])!==brackets.indexOf(result[i])) {
           		if (bracketsStack.indexOf(result[i])!==-1) {
           			(brackets.indexOf(bracketsStack[bracketsStack.length-1] + result[i]) === -1) 
                	? (()=>{return false})() 
                	: bracketsStack = bracketsStack.slice(0,-1); 	

           		}	else bracketsStack += result[i];
           	} else bracketsStack += result[i];
        }
    }
    return bracketsStack === '' ? true : false;
}

