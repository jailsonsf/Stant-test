module.exports = {
    convertFile2Array(data) {
        return data.split(/\r?\n/);
    },

    convertArray2Object(line) {
        var arr = line.split(' ');
        var event_time = arr[arr.length-1];
        arr.pop();

        return { title: arr.join(' '), duration: event_time }
    }
}