function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const farenheitExists = degree.toUpperCase().includes('F')
    
    
    //fluxo de erro
    if(!celsiusExists && !farenheitExists){ // o ! é um operador de negação, true se torna false e vice-versa
    throw new Error('Grau não encontrado')
    }
    
    //fluxo ideal, F -> C
    
    let updateDegree = Number(degree.toUpperCase().replace("F", "")); // aqui está transformando a string em número.  o replace está repondo o F com nada
    let formula = farenheit => (farenheit - 32) * 5/9 // aqui foi pra encurtar
    let degreeSign = 'C'
    
    //fluxo alternativo, C -> F
    
    if(celsiusExists){
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 +32
    degreeSign = 'F'
    // Não foi usado o let antes, pois a idéia é repetir a váriavel e alterar, não criar novas
    }
    
    
    return formula(updateDegree) + degreeSign // formula seria o numero, o argumento seria a remoção 
    
    
    }
    
    try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50g'))
    }
    catch(error){
    console.log(error.message) //precisa do .messagem por questão de sintaxe
    }