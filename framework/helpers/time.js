// Returns the elapsed time in seconds
function timerToTime(timer) {
    var values = timer.getTimeValues();
    var result = 0;
    result += 1.0 * values["seconds"];
    result += 0.1 * values["secondTenths"];
    return result;
}
function dateToString(date) {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + timeToString(date);
}
function timeToString(date) {
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return hours + ":" + minutes;
}
function dateToAPI(date) {
    return date.toISOString().replace("Z", "+00:00");
}
//# sourceMappingURL=time.js.map