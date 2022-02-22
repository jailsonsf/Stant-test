module.exports = {
    organize_events(req, res) {
        const { filename } = req.file;

        return res.json({ file: filename });
    }
}