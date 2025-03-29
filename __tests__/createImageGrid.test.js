import {createImageGrid} from '../js/w8.js';

test("converts numbers into image paths", () => {
    expect(createImageGrid([1,2,3])).toEqual([
        "/images/MINESWEEPER_1.png",
        "/images/MINESWEEPER_2.png",
        "/images/MINESWEEPER_3.png",
    ])
})