// Obtener el contexto del canvas
var ctx = document.getElementById('graficoResiduos').getContext('2d');

// Crear el gráfico
var myPieChart = new Chart(ctx, {
  type: 'pie',  // Tipo de gráfico
  data: {
    labels: ['Residuos Orgánicos (45%)', 'Papel y Cartón (26%)', 'Plástico (12%)', 'Vidrio (8%)', 'Metales (5%)'],
    datasets: [{
      label: 'Composición de los Residuos',
      data: [45, 26, 12, 8, 5],  // Datos sobre los residuos
      backgroundColor: ['#ffcc00', '#4caf50', '#2196f3', '#ff5722', '#9e9e9e'],  // Colores para los segmentos
      borderColor: '#ffffff',  // Color del borde de cada segmento
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';  // Añadir el porcentaje al tooltip
          }
        }
      }
    }
  }
});