
const rua = document.getElementById("rua");
const estado = document.getElementById("estado");
const bairro = document.getElementById("bairro");

const cepID = document.getElementById("cep"); 
const btn_enviar = document.getElementById("btn-enviar");

const buscarCEP = (cep) => {

    const API_CEP = `https://viacep.com.br/ws/${cep}/json/`

    // const API_CEP = `https://viacep.com.br/ws/01001000/json/`

    fetch(API_CEP)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            rua.value = data.logradouro
            estado.value = data.estado
            bairro.value = data.bairro
        })
        .catch(err => {
            rua.value = data.logradouro
            estado.value = data.estado
            bairro.value = data.bairro
        })
}
// btn_enviar.addEventListener("click", function(event){
//     buscarCEP(cepID.value)
//     event.preventDefault()
// })

// cepID.addEventListener("keypress", function(event){
//     if (event.key === "Enter") {
//         event.preventDefault();
//         buscarCEP(cepID.value);
//     }
// })

cepID.addEventListener("input", () => {
    const cep = cepID.value.replace(/\D/g, ""); // remove traços e pontos

    if (cep.length === 8) {
        buscarCEP(cep);
    }
});