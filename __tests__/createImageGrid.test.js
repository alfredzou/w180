import {createImageGrid} from '../js/w10_mod.js';

// test("converts numbers into image paths", () => {
//     expect(createImageGrid(
//         [
//             1,2,3,4,5,6,
//             1,2,3,4,5,6,
//             1,2,3,4,5,6,
//             1,2,3,4,5,6,
//             1,2,3,4,5,6,
//             1,2,3,4,5,6,
//         ]
//     )).toEqual(
//         [
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//             "/images/MINESWEEPER_1.png","/images/MINESWEEPER_2.png","/images/MINESWEEPER_3.png","/images/MINESWEEPER_4.png","/images/MINESWEEPER_5.png","/images/MINESWEEPER_6.png",
//         ]
//     )


test("converts numbers into image paths", () => {
    expect(createImageGrid([1,2,3])).toEqual([
        "/images/MINESWEEPER_1.png",
        "/images/MINESWEEPER_2.png",
        "/images/MINESWEEPER_3.png",
    ])
})

// test("acceptable values only", () => {
//     expect(createImageGrid([1,2,3,4,5,6,7,8])).toEqual([
//         "/images/MINESWEEPER_1.png",
//         "/images/MINESWEEPER_2.png",
//         "/images/MINESWEEPER_3.png",
//     ])
// })