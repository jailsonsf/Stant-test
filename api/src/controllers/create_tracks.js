const { 
    hoursToMinutes,
    minutesToHoursString,
    stringHoursToMinutes
} = require('../utils/convert_hours');

const INITIAL_EVENT_HOUR = hoursToMinutes(9);
const LUNCH = hoursToMinutes(12);
const MIDLE_EVENT_HOUR = hoursToMinutes(13);
const NETWORKING_MAX = hoursToMinutes(17);

function createTracks(array_events) {
    const tracks = [];
    let track = [];

    let event_start_time = INITIAL_EVENT_HOUR;
    let previous_event_end_time = INITIAL_EVENT_HOUR;
    let network_event = null;

    function addEvent(event_to_add, event_time) {
        let event = createEvent(event_to_add, event_time);
        track.push(event);
        previous_event_end_time = stringHoursToMinutes(event.event_end);
    }

    function addLunch() {
        let event = {
            title: 'Lunch break',
            duration: 60,
        }
        track.push(createEvent(event, LUNCH));
    }

    function addNetworking() {
        network_event = createEvent({
            title: 'Network break',
            duration: 60,
        }, NETWORKING_MAX);
        track.push(network_event);
    }

    function moveToLast(event, index) {
        array_events.splice(index, 1);
        array_events.push(event);
    }

    for (let index = 0; index < array_events.length; index++) {
        if (tracks.length === 0 || track.length === 0) {
            addEvent(array_events[index], event_start_time);

            if (tracks.length > 0) {
                track.push(network_event);
            }
        } else {
            if (array_events[index].duration + previous_event_end_time <= LUNCH) {
                addEvent(array_events[index], previous_event_end_time);

                if (previous_event_end_time === LUNCH) {
                    addLunch();
                    previous_event_end_time = MIDLE_EVENT_HOUR;
                }
            } else {
                if (
                    array_events[index].duration + previous_event_end_time > LUNCH
                ) {
                    let event = array_events[index];
                    moveToLast(event, index);
                }

                if (
                    array_events[index].duration + previous_event_end_time <= NETWORKING_MAX
                ) {
                    addEvent(array_events[index], previous_event_end_time);
                } else {
                    let event = array_events[index];
                    moveToLast(event, index);
                    
                    addNetworking();
                    track = [];
                }
            }
        }
        
        if (!tracks.includes(track)) {
            tracks.push(track)
        }
    }

    return { tracks };
}

function createEvent(event, event_start) {
    return {
        ...event,
        event_start: minutesToHoursString(event_start),
        event_end: minutesToHoursString(event_start + event.duration)
    };
}

module.exports = {
    createTracks
}
