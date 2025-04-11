export const acceptedValues = [0,1,2,3,4,5,6,7,8,'F','M','X']

export function inputValidation(grid) {
    if (!Array.isArray(grid)) {
        throw TypeError("Input must be an array.")
    }

    if (grid.length !== 36) {
        throw RangeError("Input array must contain exactly 36 items.")
    }

    if (!grid.every(element => acceptedValues.includes(element))) {
        throw TypeError("Input array must contain accepted values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 'F', 'M', 'X'")
    }    
}

export function createImagePath(grid) {
    return grid.map(element => `/images/MINESWEEPER_${element}.png`)
}

export function createImageGrid(grid) {
    inputValidation(grid)
    grid = createImagePath(grid)
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