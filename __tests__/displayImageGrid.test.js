/**
 * @jest-environment jsdom
 */

import { displayImageGrid } from '../js/w12_mod.js'
import { jest } from '@jest/globals'

describe('displayImageGrid', () => {
    let canvas, ctx, imageGrid;

    beforeEach(() => {
        document.body.innerHTML = `
            <canvas id="minesweeperCanvas" height="388" width="388"></canvas>
        `

        // mock canvas as not compatible with windows
        HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
            drawImage: jest.fn()
        }))

        canvas = document.getElementById("minesweeperCanvas")
        ctx = canvas.getContext("2d")
        
        imageGrid = Array(36).fill(0).map(element => `/images/MINESWEEPER_${element}.png`)
    })

    it("should mock call getcontext with the correct argument", () => {
        expect(canvas.getContext).toHaveBeenCalledWith('2d')
    })

    it("should mock drawImage", () => {
        ctx.drawImage('imageSource',100,100,100,100)
        expect(ctx.drawImage).toHaveBeenCalledWith('imageSource',100,100,100,100)
    })

    // it("does not overlap horizontally", () => {
    //     displayImageGrid(imageGrid, ctx)
    // })

    // it("does not overlap vertically", () => {

    // })
    
    // it("displays left to right up to 6 images, then up to down up to 6 images", () => {

    // })
})


