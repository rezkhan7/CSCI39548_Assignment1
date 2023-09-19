const ronaldoButton = document.getElementById("ronaldoButton")
ronaldoButton.addEventListener('click', ()=>{
    const table = document.createElement('table')
    table.className = 'player-stats'

    const ronaldoStats = [
        { stat: 'Goals Scored', value: 700 },
        { stat: 'Assists', value: 200 },
        { stat: 'Appearances', value: 900 },
    ];

    ronaldoStats.forEach((stat)=>{
        const row = document.createElement('tr')
        const cell1 = document.createElement('td')
        const cell2 = document.createElement('td')

        cell1.textContent = stat.stat
        cell2.textContent = stat.value

        row.appendChild(cell1)
        row.appendChild(cell2)
        table.appendChild(row)
    });

    const ronaldoStatsContainer = document.getElementById('ronaldoStats')
    ronaldoStatsContainer.innerHTML = ''
    ronaldoStatsContainer.appendChild(table)
});