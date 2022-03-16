import sharp from 'sharp';
import fs from 'fs';
const directory = './images';

fs.readdirSync(directory).forEach((file) => {
    sharp(`${directory}/${file}`)
        .resize(478, 240) // width, height
        .toFile(`${directory}/${file}-small.jpg`);
});
