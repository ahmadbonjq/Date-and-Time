let is24Format = true;
 
function updateTime() {
    const now = new Date();

             let hours = is24Format ? now.getHours() : now.getHours() - 12 || 12;
             const minutes = String(now.getMinutes()).padStart(2, '0');
             const seconds = String(now.getSeconds()).padStart(2, '0');
             const amPm = is24Format ? "" : (now.getHours() >= 12 ? "PM" : "AM");
    if(is24Format){
        hours =String(hours).padStart(2, '0');
    }

    // Create the time string in HH:MM:SS format
     const timeString = `${hours}:${minutes}:${seconds} ${amPm}`.trim();

    // Update the time display on the webpage
    document.getElementById("time").textContent = timeString;
    
    // Get the current years, monthes, and days
    const years = String(now.getFullYear()).padStart(2, '0');
    const months = String(now.getMonth()+1).padStart(2, '0');
    const days = String(now.getDate()).padStart(2, '0');

       // Create the date string in YYYY/MM/DD format
       
    const dateString = `${years}/${months}/${days}`;
    
    // Update the date display on the webpage
    document.getElementById("date").textContent = dateString;

}

// Update the time every second (1000 milliseconds)


// Initial call to display the time immediately when the page loads
function Type_24Function() {
    is24Format = true;
    updateTime();
}

function Type_12Function() {
    is24Format = false;
    updateTime();
}
setInterval(updateTime, 1000);
updateTime();
