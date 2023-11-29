document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart').getContext('2d');
   
    // Defina seus dados de horários de aprendizado aqui
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    const horasEstudo = [0.5, 2, 3.5, 0.5, 7.5, 0, 0]; // Horas de estudo por dia
   
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: diasSemana,
        datasets: [{
          label: 'Horas de Estudo',
          data: horasEstudo,
          fill: false,
          borderColor: 'rgba( 0, 0, 0)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Horas de Estudo'
            }
          }
        }
      }
    });
  });
