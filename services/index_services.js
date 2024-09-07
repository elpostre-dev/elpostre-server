const { stringify } = require("uuid");
const { v4: uuidv4 } = require('uuid');

let i = {}

i.convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}

i.convertTime24to12 = (time12h) => {
    let [hours, minutes, seconds] = time12h.split(':');
    let modifier = ''
    if (parseInt(hours) > 12) {
        hours = String(parseInt(hours) - 12)
        modifier = "PM"
    } else if (parseInt(hours) == 12) {
        modifier = 'PM'
    } else {
        modifier = 'AM'
    }

    return `${hours}:${minutes} ${modifier}`;
}

i.insertUUID = () => {
    return uuid = uuidv4()
}

module.exports = i