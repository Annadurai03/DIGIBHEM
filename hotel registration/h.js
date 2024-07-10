const ROOM_RATES = {
    delux: 2000,
    suite: 3000,
    ac: 500,
    locker: 200,
    extraPerson: 1000
};

function calculateTotal() {
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    const roomType = document.getElementById('roomType').value;
    const ac = document.getElementById('ac').checked;
    const locker = document.getElementById('locker').checked;
    const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);
    
    let roomCost = ROOM_RATES[roomType] * totalDays;
    let amenitiesCost = 0;
    
    if (ac) {
        amenitiesCost += ROOM_RATES.ac * totalDays;
    }
    if (locker) {
        amenitiesCost += ROOM_RATES.locker * totalDays;
    }

    let extraPersonCost = 0;
    if (totalPersons > 2) {
        extraPersonCost = (totalPersons - 2) * ROOM_RATES.extraPerson * totalDays;
    }

    const totalCost = roomCost + amenitiesCost + extraPersonCost;
    const balance = totalCost - advanceAmount;

    document.getElementById('totalCost').value = totalCost;
    document.getElementById('balance').value = balance;
}
