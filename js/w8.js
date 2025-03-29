// const canvas = document.getElementById("minesweeperCanvas");
// const ctx = canvas.getContext("2d");

export function createImageGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = `/images/MINESWEEPER_${grid[i]}.png`
    }

    return grid
}

// const imageGrid = createImageGrid(
//     [
//         1,2,3,4,5,6,
//         1,2,3,4,5,6,
//         1,2,3,4,5,6,
//         1,2,3,4,5,6,
//         1,2,3,4,5,6,
//         1,2,3,4,5,6,
//     ]
// ) 

// for (let i=0; i<imageGrid.length; i++) {
//     const img = new Image()
//     img.src = imageGrid[i]                   

//     img.onload = function () {            
//         const scaleFactor = 0.3  
//         const newWidth = img.width * scaleFactor
//         const newHeight = img.height * scaleFactor

//         const x = newWidth * (i%6)
//         const y = newHeight * Math.floor(i/6)

//         ctx.drawImage(img, x, y, newWidth, newHeight)
//     }
// }     