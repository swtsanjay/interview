
function clearSearch(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object") {
            clearSearch(value);
        } else {
            if ((typeof value === 'string' && value.length < 1)) {
                delete (obj[key]);
            }
        }
    }
}


module.exports = { clearSearch };