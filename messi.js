const messiButton = document.getElementById('messiButton')
messiButton.addEventListener('click', ()=>{
    const table = document.createElement('table')
    table.className = 'player-stats'

    const messiStats = [
        { stat: 'Goals Scored', value: 750 },
        { stat: 'Assists', value: 250 },
        { stat: 'Appearances', value: 800 },
    ];

    messiStats.forEach((stat)=>{
        const row = document.createElement('tr')
        const cell1 = document.createElement('td')
        const cell2 = document.createElement('td')

        cell1.textContent = stat.stat
        cell2.textContent = stat.value

        row.appendChild(cell1)
        row.appendChild(cell2)
        table.appendChild(row)

    });

    const messiStatsContainer = document.getElementById('messiStats')
    messiStatsContainer.innerHTML = ''
    messiStatsContainer.appendChild(table)

});