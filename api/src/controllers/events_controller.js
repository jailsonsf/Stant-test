const fs = require("fs");
const path = require("path");

const { convertFileToArray, convertArrayToObject } = require("../utils/convert_array");
const { verifyFile } = require("../utils/verify_file");
const { createTracks } = require("./create_tracks");

module.exports = {
    organize_events(req, res) {
        if (!req.file) {
            return res.status(400).json({ error: 'File not found' });
        }

        const { filename } = req.file;

        if (verifyFile(filename) != 'txt') {
            return res.status(400).json({ error: 'Send a .txt file' });
        }

        fs.readFile(`${path.resolve(__dirname, '..', '..', 'uploads')}/${filename}`,
        'utf-8', (err, data) => {
            var lines = convertFileToArray(data);

            var array_events = []
            lines.forEach(line => {
                array_events.push(convertArrayToObject(line));
            });

            if (err) {
                console.log(err);
                return;
            }

            return  res.status(200).json(createTracks(array_events))
        });
    }
    
}
