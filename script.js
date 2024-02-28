document.addEventListener('DOMContentLoaded', function() {
    const contributionGraph = document.getElementById('contributionGraph');
    const resetButton = document.getElementById('resetButton');

    // Create a 7x52 grid for the contribution graph
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 52; j++) {
            const cell = document.createElement('div');
            cell.classList.add('contribution-cell');
            cell.addEventListener('click', toggleContribution);
            contributionGraph.appendChild(cell);
        }
    }

    // Add click event listener to the reset button
    resetButton.addEventListener('click', resetContributions);
});

function toggleContribution(event) {
    const cell = event.target;
    cell.style.backgroundColor = cell.style.backgroundColor === 'rgb(44, 151, 75)' ? '#ebedf0' : '#2c974b';
}

function resetContributions() {
    const contributionCells = document.querySelectorAll('.contribution-cell');
    contributionCells.forEach(cell => {
        cell.style.backgroundColor = '#ebedf0';
    });
}
