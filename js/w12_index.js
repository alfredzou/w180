import { createImageGrid, displayImageGrid } from "./w12_mod.js";

const canvas = document.getElementById("minesweeperCanvas");
const ctx = canvas.getContext("2d");

const imageGrid = createImageGrid(
    [
        1,2,3,4,5,6,
        1,2,3,4,5,6,
        1,2,3,4,5,6,
        1,2,3,4,5,6,
        1,2,3,4,5,6,
        1,2,3,4,5,6,
    ]
) 

displayImageGrid(imageGrid, ctx)