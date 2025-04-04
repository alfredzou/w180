export function createImageGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = `/images/MINESWEEPER_${grid[i]}.png`
    }

    return grid
}

export function displayImageGrid(imageGrid, ctx) {
    for (let i=0; i<imageGrid.length; i++) {
        const img = new Image()
        img.src = imageGrid[i]                   

        img.onload = function () {            
            const scaleFactor = 0.3  
            const newWidth = img.width * scaleFactor
            const newHeight = img.height * scaleFactor

            const x = newWidth * (i%6)
            const y = newHeight * Math.floor(i/6)

            ctx.drawImage(img, x, y, newWidth, newHeight)
        }
    }     
}