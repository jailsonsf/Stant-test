module.exports = {
    verifyFile(filename) {
        let filename_split = filename.split('.');
        let ext = filename_split.slice(-1).pop();

        return ext.toLowerCase();
    },
}