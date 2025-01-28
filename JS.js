let is24Format = true;
let dateFormat = 'YYYY/MM/DD';  // Default date format

// This function updates the time and date
function updateTime() {
    const now = new Date();

    // Set the time
    let hours = is24Format ? now.getHours() : now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = is24Format ? "" : (now.getHours() >= 12 ? "PM" : "AM");
    
    if (is24Format) {
        hours = String(hours).padStart(2, '0');
    }

    // Format the time as HH:MM:SS AM/PM or HH:MM:SS based on the format
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`.trim();
    document.getElementById("time").textContent = timeString;
    
    // Format the date based on the selected format
    const years = String(now.getFullYear()).padStart(2, '0');
    const months = String(now.getMonth() + 1).padStart(2, '0');
    const days = String(now.getDate()).padStart(2, '0');

    let dateString = '';
    if (dateFormat === 'YYYY/MM/DD') {
        dateString = `${years}/${months}/${days}`;
    } else if (dateFormat === 'MM/DD/YYYY') {
        dateString = `${months}/${days}/${years}`;
    } else if (dateFormat === 'DD/MM/YYYY') {
        dateString = `${days}/${months}/${years}`;
    }

    // Display the date on the page
    document.getElementById("date").textContent = dateString;
}

// Switch to 24-hour format
function Type_24Function() {
    is24Format = true;
    updateTime();
}

// Switch to 12-hour format
function Type_12Function() {
    is24Format = false;
    updateTime();
}

// Event listener to change the date format
document.getElementById("DateFormat").addEventListener("change", function(event) {
    dateFormat = event.target.value;
    updateTime();  // Update the date after changing the format
});

// Update the time every second
setInterval(updateTime, 1000);
updateTime();  // Update the time when the page loads