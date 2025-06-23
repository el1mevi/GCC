
const dataGCC = [100, 89.1, 48, 16];
const dataIndustry = [85, 75, 40, 12];

const labels = [
  'Plantas sindicalizadas MX (%)',
  'Capacitación DDHH (%)',
  'Trabajadores Sindic. MX (%)',
  'Trabajadores Sindic. EE.UU. (%)'
];

const ctxLab = document.getElementById('chartLaborales').getContext('2d');
new Chart(ctxLab, {
  type: 'bar',
  data: {
    labels,
    datasets: [
      {
        label: 'GCC',
        data: dataGCC,
        backgroundColor: '#003366',     
        borderColor: '#002244',         
        borderWidth: 1

      },
      {
        label: 'Promedio Industria',
        data: dataIndustry,
        backgroundColor: '#66b2ff',      
        borderColor: '#3399ff',         
        borderWidth: 1      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + '%'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}%`
        }
      }
    }
  }
});
