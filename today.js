
function updateDateTime() {
    const now = new Date();
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("date").textContent = `${date} ${monthName} ${year}`;
    document.getElementById("day").textContent = dayName;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second
