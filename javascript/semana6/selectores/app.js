//SELECTOR POR ID
//escribir un texto dentro del elemento
document.getElementById("div_container").innerText = "Hola a todos";

function test(){
    document.getElementById("div_container").classList.add("big");
}
function remove(){
    document.getElementById("div_container").classList.remove("big")
}

//SELECTORES
//Selector de avrios elementos

const array_parrafos = document.querySelectorAll("p");
console.log(array_parrafos);
array_parrafos.forEach((p) => {
	p.onclick = function () {
		p.innerText = "bruno";
		p.classList.add("big");
	};
});

const nombre = document.getElementById("input_name");

nombre.addEventListener("keyup", function (evento_keyup) {
	const text = nombre.value;
	// console.log("value:", text);
	console.log("key: ", evento_keyup.key);
	console.log("code: ", evento_keyup.code);
	// array_parrafos.forEach((p) => {
	// 	p.innerText = text;
	// });
});