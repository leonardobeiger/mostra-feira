// Obtém a lista de elementos com o id "horariosEntrada" e "horariosSaida"
let listaHorariosEntrada = document.getElementById('horariosEntrada');
let listaHorariosSaida = document.getElementById('horariosSaida');

// Função para registrar a entrada de passageiros
function registrarEntrada() {
    // Obtém a data e hora atuais
    const agora = new Date();
    const horaAtual = agora.toLocaleString('pt-BR');

    // Obtém os valores de hora de início e fim do pico da linha
    const horaInicioPico = new Date(document.getElementById("horaInicioPico").value);
    const horaFinalPico = new Date(document.getElementById("horaFinalPico").value);

    // Obtém os valores dos sensores e contagens atuais
    const sensorEntrada = document.getElementById("sensorEntrada").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let totalPessoas = parseFloat(document.getElementById("totalPessoas").textContent);
    let totalPico = parseFloat(document.getElementById("totalPico").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    // Verifica se a hora atual está dentro do intervalo de pico e se o sensor indica entrada
    if (agora >= horaInicioPico && agora <= horaFinalPico && sensorEntrada === "sim" && viagemEmAndamento === "sim") {
        // Atualiza as contagens e totais de passageiros
        contagemPessoas += contador;
        totalPico += contador;
        totalPessoas = Math.max(contagemPessoas, totalPessoas);
        // Cria um item de lista e o adiciona à lista de horários de entrada
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(`Entrada: ${horaAtual}- ${contador} pessoa(s)`));
        listaHorariosEntrada.appendChild(item);
    }

    // Atualiza os valores exibidos na página
    document.getElementById("contagemPessoas").textContent = contagemPessoas.toString();
    document.getElementById("totalPessoas").textContent = totalPessoas.toString();
    document.getElementById("totalPico").textContent = totalPico.toString();


}

// Função para registrar a saída de passageiros
function registrarSaida() {
    // Obtém a data e hora atuais
    const agora = new Date();
    const horaAtual = agora.toLocaleString('pt-BR');

    // Obtém os valores de hora de início e fim do pico da linha
    const horaInicioPico = new Date(document.getElementById("horaInicioPico").value);
    const horaFinalPico = new Date(document.getElementById("horaFinalPico").value);

    // Obtém os valores dos sensores e contagens atuais
    const sensorSaida = document.getElementById("sensorSaida").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    // Verifica se a hora atual está dentro do intervalo de pico e se o sensor indica saída
    if (agora >= horaInicioPico && agora <= horaFinalPico && sensorSaida === "sim" && viagemEmAndamento === "sim" && contagemPessoas >= contador) {
        // Atualiza a contagem de pessoas
        contagemPessoas -= contador;
         // Cria um item de lista e o adiciona à lista de horários de saída
         const item = document.createElement('li');
         item.appendChild(document.createTextNode(`Saída: ${horaAtual} - ${contador} pessoa(s)`));
         listaHorariosSaida.appendChild(item);
    }

    // Atualiza o valor exibido na página
    document.getElementById("contagemPessoas").textContent = contagemPessoas.toString();

   
}
