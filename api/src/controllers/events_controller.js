const fs = require("fs");
const path = require("path");

const { convertFile2Array, convertArray2Object } = require("../utils/convert_array");
const { createTracks } = require("./create_tracks");

module.exports = {
    organize_events(req, res) {
        const { filename } = req.file;

        fs.readFile(`${path.resolve(__dirname, '..', '..', 'uploads')}/${filename}`,
        'utf-8', (err, data) => {
            var lines = convertFile2Array(data);

            var array_events = []
            lines.forEach(line => {
                array_events.push(convertArray2Object(line));
            });

            if (err) {
                console.log(err);
                return;
            }

            return  res.json(createTracks(array_events))
        });
    }
    
}