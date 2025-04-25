import { displayImageGrid } from '../js/w12_mod.js'
import { jest } from '@jest/globals'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const fs = require('fs')
import {JSDOM} from 'jsdom'

describe('displayImageGrid', () => {
    let canvas, ctx, imageGrid, document;

    beforeEach(() => {
        try {
            const htmlContent = fs.readFileSync('./html/w12_minesweeper_quiz.html','utf8')
            console.log(htmlContent)
            const dom = new JSDOM(htmlContent)
            document = dom.window.document
    
            // // mock canvas as not compatible with windows
            // HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
            //     drawImage: jest.fn()
            // }))
            
            // canvas = document.getElementById("minesweeperCanvas")
            // ctx = canvas.getContext("2d")
            
            // imageGrid = Array(36).fill(0).map(element => `/images/MINESWEEPER_${element}.png`)
        } catch (err) {
            console.error("Error reading file", err)
        }

        })

    it("should find the html element", () => {
        expect(document.getElementById("minesweeperCanvas")).not.toBeNull()
    })

    // it("should mock call getcontext with the correct argument", () => {
    //     expect(canvas.getContext).toHaveBeenCalledWith('2d')
    // })

    // it("should mock drawImage", () => {
    //     ctx.drawImage('imageSource',100,100,100,100)
    //     expect(ctx.drawImage).toHaveBeenCalledWith('imageSource',100,100,100,100)
    // })

    // it("does not overlap horizontally", () => {
    //     displayImageGrid(imageGrid, ctx)
    // })

    // it("does not overlap vertically", () => {

    // })
    
    // it("displays left to right up to 6 images, then up to down up to 6 images", () => {

    // })
})


