
	var chave = document.getElementById('chave');
	var chave2 = document.getElementById('chave2');
	var texto = document.getElementById('caixaTexto');
	var cripta = '';
	var texto2 = document.getElementById('caixaTexto2');
	var textoPleno = '';
	

	function verificaTextoCripta(){
		let text = texto.value;
		let key = chave.value;
		
		let chaveValida = verificaChave(key);
		
		if(text == ''){
			alert("Insira um texto na caixa!");
			
			texto = document.getElementById('caixaTexto');
			text = texto.value;				
				
		}
		if(chaveValida == false){
			alert("Insira uma PALAVRA VALIDA para a chave!");
			
			chave = document.getElementById('chave');
			key = chave.value;
		}
		
		else{
		text = text.toUpperCase();	
		key = key.toUpperCase();		
		
		cripta = criptografar(text, key);
		s.innerHTML = cripta;
		
		}
		
	}

	function verificaChave(key){
		let chave = key.toUpperCase();
		let alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
		let tamanhoChave = chave.length;
		let caracteresValidos = 0;
		
		
	

		for (let i=0; i<chave.length; i++){//para cada letra da chave

			let letra = chave[i];
				
			for (let j = 0; j < alfa.length; j++) {//compara cada letra do alfabeto
	  				
	  			if(letra == alfa[j]){

	  				caracteresValidos++;
	  			}
	  			
	  		 }
		} 
		

		//a chave só é valida se todos os caracteres forem letras 
		if(tamanhoChave == caracteresValidos){
			return true;
		}else{
			return false;
		}
		
	}




	function verificaTextoDescripta(){
		let text2 = texto2.value;
		let key2 = chave2.value;
		
		let chaveValida = verificaChave(key2);
		if(text2 == ''){
			alert("Insira um texto na caixa!");
			
			texto2 = document.getElementById('caixaTexto2');
			text2 = texto2.value;			
				
		}
		if(chaveValida == false){
			alert("Insira uma PALAVRA VALIDA para a chave!");
			
			chave2 = document.getElementById('chave2');
			key2 = chave2.value;
		}
		
		else{
		text2 = text2.toUpperCase();	
		key2 = key2.toUpperCase();
		
		textoPleno = descriptografar(text2, key2);
		s2.innerHTML = textoPleno;
		
		
		
		}
		
	}

	
  function descriptografar(str, chave){                                                              // 22  23  24  25
	let alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let textoPleno = '';
	let textoChave = '';
	let  descripta = '';		//parte 1 eliminar tudo o que não for letra

  	for (let i = 0; i < str.length; i++) {//para cada letra da string
        let letra = str[i];
          
        for (let j = 0; j < alfa.length; j++) {//compara cada letra do alfabeto
	  				
            if(letra == alfa[j]){			
               textoPleno += letra;
            }
        }
    }

	//parte 2 criando o texto chave do tamanho do texto pleno
    for(let i = 0; i < textoPleno.length; i++){ //tamanho do texto pleno
												
		if(i >= chave.length){			
			let j = i;
			while(j >= chave.length){ //para voltar ao inicio do vetor
				j = j - chave.length;
			}
			textoChave += chave[j];
		}								//atribui uma letra da chave até ter o tamanho do texto pleno
		else{  
            textoChave += chave[i];
		}
		
        
    }
	//parte 3 descriptar
	for(let i=0; i<textoChave.length; i++){ //tamanho do texto pleno e texto chave é igual 
		let letraTextoChave = textoChave[i];//operação inverssa da cripta
		let letraTextoPleno = textoPleno[i]; //descripta = indice da letra chave - indice da letra plena

		for (let j = 0; j < alfa.length; j++) {
  				
										   //matrix 26 x 26
			if(letraTextoChave == alfa[j]){
				
				for (let y = 0; y < alfa.length; y++) {
  				
  			
					if(letraTextoPleno == alfa[y]){
						
						
						if((y - j) < 0){
							
							descripta += alfa[ (y - j) + alfa.length ]; //se j > y deve voltar ao final do vetor do alfabeto pois J fica negativo
						}
						else{
							
							descripta += alfa[y - j];
						}
					}
				
				}
				
			}
		
		}
	
	}

   return descripta;
  }

  function criptografar(str, chave){                                                                 // 22  23  24  25
  	let alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let textoPleno = '';
	let textoChave = '';
	let textoEncriptado = '';		//parte 1 eliminar elimina tudo o que não for letra

  	for (let i = 0; i < str.length; i++) {//para cada letra da string
        let letra = str[i];
          
        for (let j = 0; j < alfa.length; j++) {//compara cada letra do alfabeto
	  				
            if(letra == alfa[j]){			
               textoPleno += letra;
            }
        }
    }

	//parte 2 criando o texto chave do tamanho do texto pleno
    for(let i = 0; i < textoPleno.length; i++){ //tamanho do texto pleno
												
		if(i >= chave.length){			
			let j = i;
			while(j >= chave.length){ //para voltar ao inicio do vetor
				j = j - chave.length;
			}
			textoChave += chave[j];
		}								//atribui uma letra da chave até ter o tamanho do texto pleno
		else{  
            textoChave += chave[i];
		}
		
        
    }
	//parte 3 encriptar
	for(let i=0; i<textoChave.length; i++){ //tamanho do texto pleno e texto chave é igual 
		let letraTextoChave = textoChave[i];
		let letraTextoPleno = textoPleno[i]; //cripta = indice da letra chave + indice da letra plena

		for (let j = 0; j < alfa.length; j++) {
  				
										   //matrix 26 x 26
			if(letraTextoChave == alfa[j]){
				
				for (let y = 0; y < alfa.length; y++) {
  				
  			
					if(letraTextoPleno == alfa[y]){
						
						
						if((y + j) >= alfa.length){
							
							textoEncriptado += alfa[ (y + j) - alfa.length ];
						}
						else{
							
							textoEncriptado += alfa[y + j];
						}
					}
				
				}
				
			}
		
		}
	
	}

   return textoEncriptado;
  }
  

