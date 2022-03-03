const { v4: uuidV4 } = require('uuid');

module.exports = {
    convertFileToArray(data) {
        return data.split(/\r?\n/);
    },

    convertArrayToObject(line) {
        var arr = line.split(' ');
        var event_time = arr[arr.length-1];
        arr.pop();

        if (event_time.toLowerCase() == 'lightning') {
            event_time = 5
        } else {
            event_time = parseInt(event_time.slice(0, -3));
        }

        return { 
            id: uuidV4(),
            title: arr.join(' '),
            duration: event_time
        }
    }
}
