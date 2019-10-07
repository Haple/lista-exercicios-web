function validarCnpj(cnpj){
	let regexCnpj = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;
	if(regexCnpj.test(cnpj)){
		alert("CNPJ válido");
	}else{
		alert("CNPJ inválido");
	}
}
