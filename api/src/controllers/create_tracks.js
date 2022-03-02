const INITIAL_EVENT_HOUR = 9 * 60;
const LUNCH = 12 * 60;
const MIDLE_EVENT_HOUR = 13 * 60;
const NETWORKING_MIN = 16 * 60;
const NETWORKING_MAX = 17 * 60;

const tracks = [];
let track = [];
function createTracks(array_events) {
    let event_start_time = INITIAL_EVENT_HOUR;
    let previous_event_end_time = INITIAL_EVENT_HOUR;
    let network_event = null;

    function addEvent(event_to_add, event_time) {
        let event = createEvent(event_to_add, event_time);
        track.push(event);
        previous_event_end_time = event.event_end;
    }

    for (let index = 0; index < array_events.length; index++) {
        if (tracks.length === 0 || track.length === 0) {
            addEvent(array_events[index], event_start_time);

            if (network_event) {
                track.push(network_event);
            }
        } else {
            if (array_events[index].duration + previous_event_end_time <= LUNCH) {
                addEvent(array_events[index], previous_event_end_time);

                if (previous_event_end_time === LUNCH) {
                    let event = {
                        title: 'Lunch break',
                        duration: 60,
                    }
                    track.push(createEvent(event, LUNCH));
                    previous_event_end_time = MIDLE_EVENT_HOUR;
                }
            } else {
                if (array_events[index].duration == 5 || array_events[index].duration + previous_event_end_time > LUNCH) {
                    let event = array_events[index];
                    array_events.splice(index, 1);
                    array_events.push(event);
                }

                if (array_events[index].duration + previous_event_end_time < NETWORKING_MAX) {
                    addEvent(array_events[index], previous_event_end_time);
                } else {
                    let network_event = createEvent({
                        title: 'Network break',
                        duration: 60,
                    }, previous_event_end_time);
                    track.push(network_event);
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
        event_start,
        event_end: event_start + event.duration
    };
}

module.exports = {
    createTracks
}