const listaCpfs = document.querySelectorAll(".cpf li");

// gostei disso rs
// const arrayCpfs = [...cpfs];
// const arrayCpfs = Array.from(cpfs)
// console.log(arrayCpfs);

const textoElementos = ([...elementos]) => {
	return elementos.map(item => item.innerText);
}

const limparCpf = (cpf) => {
	return cpf.replace(/\D/g, '');
}

const construirCpf = (cpf) => {
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

const formatarCpfs = (cpfs) => {
	return cpfs.map(limparCpf).map(construirCpf);
}

const substituirCpfs = (cpfsElements) => {
	const cpfs = textoElementos(cpfsElements);
	const cpfsFormatados = formatarCpfs(cpfs);

	cpfsElements.forEach((item, index) => {
		item.innerText = cpfsFormatados[index];
	});
}

substituirCpfs(listaCpfs);