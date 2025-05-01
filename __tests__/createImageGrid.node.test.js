import {createImagePath, inputValidation, acceptedValues} from '../js/w13_mod.js';

describe('createImageGrid', () => {
    describe('inputValidation', () => {
        it("throws error if input is not an array", () => {
            expect(() => inputValidation(1)).toThrowError(TypeError("Input must be an array."))
        })

        it("does not throw error if input is an array", () => {
            expect(() => inputValidation([1,2,3])).not.toThrowError(TypeError("Input must be an array."))
        })

        it("throws error if input is less than 36 items", () => {
            expect(() => inputValidation(Array(35))).toThrowError(RangeError("Input array must contain exactly 36 items."))
        })

        it("throws error if input is more than 36 items", () => {
            expect(() => inputValidation(Array(37))).toThrowError(RangeError("Input array must contain exactly 36 items."))
        })

        it("does not throw an error if there is exactly 36 items", () => {
            expect(() => inputValidation(Array(36))).not.toThrowError(RangeError)
        })

        it("throws error if elements are not accepted values", () => {
            expect(() => inputValidation(Array(36).fill('NOTACCEPTED'))).toThrowError(TypeError("Input array must contain accepted values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 'F', 'M', 'X'"))
        })

        it("does not throw an error if elements are accepted values", () => {
            expect(() => inputValidation(Array(36).fill(acceptedValues[0]))).not.toThrowError(TypeError("Input array must contain accepted values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 'F', 'M', 'X'"))
        })
    })
    describe('createImagePath', () => {    
        it("converts int elements into image paths", () => {
            expect(createImagePath([1,2,3])).toEqual(["/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png"])
        })

        it("converts string elements into image paths", () => {
            expect(createImagePath(['X','F','M'])).toEqual(["/images/MINESWEEPER_X.png","/images/MINESWEEPER_F.png","/images/MINESWEEPER_M.png"])
        })
    })
})