function validarCpf(cpf){
	let regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
	if(regexCpf.test(cpf)){
		alert("CPF válido");
	}else{
		alert("CPF inválido");
	}
}
