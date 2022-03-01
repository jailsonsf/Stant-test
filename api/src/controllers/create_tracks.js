const INITIAL_EVENT_HOUR = 9 * 60;
const LUNCH = 12 * 60;
const MIDLE_EVENT_HOUR = 13 * 60;
const NETWORKING = 16 * 60;

const tracks = [];

function newTrack(events) {
    let current_event_time = INITIAL_EVENT_HOUR;
    let rest_events = events;

    const track = {}
    for (let index in events) {
        if (Object.keys(track).length === 0) {
            track[current_event_time] = events[index]['title'];
            current_event_time += events[index]['duration'];
            rest_events.splice(events[index], 1);
        }

        let len_events = events.length;
        let count = index;
        while (current_event_time + events[index]['duration'] < LUNCH) {
            if (count == len_events) {
                break;
            }

            if (current_event_time + events[index]['duration'] == LUNCH) {
                track[current_event_time] = events[index]['title'];
                current_event_time += events[index]['duration'];
                rest_events.splice(index, 1);
            }

            count++;
        }

        if ((current_event_time + events[index]['duration']) <= LUNCH) {
            track[current_event_time] = events[index]['title'];
            current_event_time += events[index]['duration'];
            rest_events.splice(events[index], 1);
        } else {
            track[LUNCH] = 'Lunch break';
            current_event_time = MIDLE_EVENT_HOUR;
        }

        if (current_event_time == LUNCH) {
            track[MIDLE_EVENT_HOUR] = events[index]['title'];
            current_event_time += events[index]['duration'];
            rest_events.splice(events[index], 1);
        } else if (current_event_time > LUNCH) {
            let len_events = events.length;
            let count = index;
            while (current_event_time + events[index]['duration'] < NETWORKING) {
                if (count == len_events) {
                    break;
                }

                if (current_event_time + events[index]['duration'] <= NETWORKING) {
                    track[current_event_time] = events[index]['title'];
                    current_event_time += events[index]['duration'];
                    rest_events.splice(events[index], 1);
                }

                count++;
            }

            if ((current_event_time + events[index]['duration']) < NETWORKING) {
                track[current_event_time] = events[index]['title'];
                current_event_time += events[index]['duration'];
                rest_events.splice(events[index], 1);
            } else {
                track[NETWORKING] = 'Networking break';
                current_event_time = MIDLE_EVENT_HOUR;
            }
        }
    }

    tracks.push(track);

    return rest_events;
}

module.exports = {
    createTracks(array_events) {
        let events_to_organize = array_events;

        while (events_to_organize.length > 0) {
            events_to_organize = newTrack(events_to_organize);
        }

        return tracks;
    }
}