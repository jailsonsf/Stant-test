function minutesToHoursString(Minutes) {
    const hour = Math.floor(Minutes / 60);
    const minutes = Minutes % 60;

    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function hoursToMinutes(hours) {
    return hours * 60;
}

function stringHoursToMinutes(hours) {
    const [ hour, minutes ] = hours.split(':').map(x => parseInt(x) );

    const total_minutes = hoursToMinutes(hour) + minutes;

    return total_minutes;
}

module.exports = {
    minutesToHoursString,
    hoursToMinutes,
    stringHoursToMinutes
}