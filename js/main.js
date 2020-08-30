// // O ajax é a principal forma de consumi informações do servidorpelo JS 

// var xhr = new XMLHttpRequest() // vai dar acesso a funcionalidade do ajax pra recumperar alguma informação do servidor

// // O primeiro parâmetro é um método. Para buscar uma informação o método é GET.
// // O segundo é a URL
// xhr.open('GET', 'https://api.github.com/users/LucasMiller98')
// xhr.send(null)

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) { // variável que significa quando quando a resposta voltou
//         // Mostrando o corpo da requizição
//         console.log(JSON.parse(xhr.responseText)) // JSON.parse() porque o retorno da requizição é um JSON
//     }
// }


/**
 * Promise é uma função/classe que vai deixar a gente trabalhar com o .then() e .catch()
 * Para trabalharmor com código assincrono dentro do JS.
 * Se você tiver algum código na aplicação que dependa do resultado, que vem da api pro gitHub
 * o melhor lugar para o código ficar é dentro do .then().  
 */

// var minhaPromise = function() {
//     // O resolve é a função que iremos ultilizar dentro da promise se o resultado for de sucesso.
//     // O reject, se for erro
//     return new Promise(function(resolve, reject) { 
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', 'https://api.github.com/users/LucasMiller98')
//         xhr.send(null)
//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4) { // Retorna um codigo de status.
//                 if(xhr.status === 200) { // O código 200 é o código de sucesso. Se deu 200 => sucesso.
//                     resolve(JSON.parse(xhr.responseText))
//                 }else{ // Caso não seja 200
//                     reject('Erro na requisição')
//                 }
//             }
//         }
//     })
// }
// OBS.: Se a promise não estiver finalizada, retorna penging.
// var resultado = minhaPromise()
// console.log(resultado)

// Exibindo o resultado, que a promise retornou do resolve ou do reject, caso tenha dado um erro.

// minhaPromise()




// axios => encapsulamento por volta do XMLHttpRequest
// Retorna os valores de forma mais fácil
// Já entende que a resposta é um JSON e já retorna um objeto JavaScript
axios.get('https://api.github.com/users/LucasMiller98')
    .then(function(response) { // Será executado quando o resolve for chamado na promise.
        console.log(response.data.avatar_url) // Para a resposta de sucesso da requizição
    })
    .catch(function(error) { // Será chamado pelo reject, informando o erro. Para um código !== 200
        console.warn(error) // Para avisar o erro
    })























