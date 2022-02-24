module.exports = {
    convertFile2Array(data) {
        return data.split(/\r?\n/);
    },

    convertArray2Object(line) {
        var arr = line.split(' ');
        var event_time = arr[arr.length-1];
        arr.pop();

        if (event_time.toLowerCase() == 'lightning') {
            event_time = 5
        } else {
            event_time = parseInt(event_time.slice(0, -3));
        }

        return { title: arr.join(' '), duration: event_time }
    }
}