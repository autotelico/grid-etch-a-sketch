document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    const gridSizeBtn = document.querySelector('#grid-size-button');
    let isDrawing = false;

    gridSizeBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.remove();
        })


        let gridSize = prompt("Select your grid size: ", 7);

        while (gridSize > 200) {
            gridSize = prompt("Cannot make grids bigger than 200x200 squares in size. Select your grid size again: ", 7);
        }
    

        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);


        square.addEventListener('mousedown', () => {
            isDrawing = true;
        })

        square.addEventListener('mouseup', () => {
            isDrawing = false;
        })
        square.addEventListener('mousemove', () => {
            if (isDrawing) {
            square.style.backgroundColor = 'black';
            }
        })
    }
})

    


})