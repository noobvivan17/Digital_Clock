// Setting the Interval
setInterval(showTime, 1000);

// Functioning of the Clock
function showTime() {
    // Initiating Date Object
    let time = new Date();

    // Storing the time inside variables
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let am_pm = "AM";

    // Condition for AM/PM
    if (hour > 12) {
        hour -= 12; // hour = hour - 12
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    // Setting the times in double digits by Ternary Operators
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    // Time Structure
    let currentTime = `${hour}:${minute}:${second} ${am_pm}`;

    let clock = document.querySelector('#clock');
    clock.innerHTML = currentTime;

}

// Calling the Function
showTime();
