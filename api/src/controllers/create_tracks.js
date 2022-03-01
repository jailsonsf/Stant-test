const INITIAL_EVENT_HOUR = 9 * 60;
const LUNCH = 12 * 60;
const MIDLE_EVENT_HOUR = 13 * 60;
const NETWORKING = 17 * 60;

const tracks = [];
const track = [];
function createTracks(array_events) {
    for (let index = 0; index < array_events.length - 1; index++) {
        console.log(array_events[index]);
    }

    return array_events;
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