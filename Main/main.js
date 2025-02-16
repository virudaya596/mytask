
function updateDateTime() {
            const now = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
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

    let currentIndex = 0;
    const tabs = document.querySelectorAll('.tab');
    const contentContainer = document.getElementById('content');

    const taskData = [
      // MONDAY SCHEDULES
[ 
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 06:30 AM", dura: "For 30 Minutes", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "06:30 AM - 06:45 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "06:45 AM - 07:15 AM", dura: "Within 30 Minutes", task: "Bath Up", desc: "Bath To Clean", img: "Files/bath.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 02:15 PM", dura: "For 5 Hours & 20 Minutes", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "02:15 PM - 02:40 PM", dura: "Within 25 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "02:40 PM - 03:00 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "03:00 PM - 05:00 PM", dura: "For 2 Hours", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "05:00 PM - 05:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "05:15 PM - 06:30 PM", dura: "For 1 Hour & 15 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "06:30 PM - 07:00 PM", dura: "For 30 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 09:00 PM", dura: "For 2 Hours", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
],

// TUESDAY SCHEDULES
[ 
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 07:00 AM", dura: "For 1 Hour", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "07:00 AM - 07:15 AM", dura: "For 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 02:15 PM", dura: "For 5 Hours & 20 Minutes", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "02:15 PM - 02:40 PM", dura: "Within 25 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "02:40 PM - 03:00 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "03:00 PM - 05:00 PM", dura: "For 2 Hours", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "05:00 PM - 05:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "05:15 PM - 06:30 PM", dura: "For 1 Hours & 15 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "06:30 PM - 07:00 PM", dura: "For 30 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 09:00 PM", dura: "For 2 Hours", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
], 

  // WEDNESDAY SCHEDULES
[
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 06:30 AM", dura: "For 30 Minutes", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "06:30 AM - 06:45 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "06:45 AM - 07:15 AM", dura: "Within 30 Minutes", task: "Bath Up", desc: "Bath To Clean", img: "Files/bath.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 02:15 PM", dura: "For 5 Hours & 20 Minutes", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "02:15 PM - 02:40 PM", dura: "Within 25 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "02:40 PM - 03:00 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "03:00 PM - 05:00 PM", dura: "For 2 Hours", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "05:00 PM - 05:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "05:15 PM - 06:30 PM", dura: "For 1 Hour & 15 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "06:30 PM - 07:00 PM", dura: "For 30 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 09:00 PM", dura: "For 2 Hours", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
], 

// THURSDAY SCHEDULES
[
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 07:00 AM", dura: "For 1 Hour", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "07:00 AM - 07:15 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 02:15 PM", dura: "Within 5 Hours & 20 Minutes", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "02:15 PM - 02:40 PM", dura: "Within 25 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "02:40 PM - 03:00 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "03:00 PM - 05:00 PM", dura: "For 2 Hours", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "05:00 PM - 05:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "05:15 PM - 06:30 PM", dura: "For 1 Hour & 15 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "06:30 PM - 07:00 PM", dura: "For 30 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 09:00 PM", dura: "For 2 Hours", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
],
 
// FRIDAY SCHEDULES
[
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 07:00 AM", dura: "For 1 Hour", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "07:00 AM - 07:15 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 02:15 PM", dura: "Within 5 Hours & 20 Minutes", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "02:15 PM - 02:40 PM", dura: "Within 25 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "02:40 PM - 03:00 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "03:00 PM - 05:00 PM", dura: "For 2 Hours", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "05:00 PM - 05:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "05:15 PM - 06:30 PM", dura: "For 1 Hour & 15 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "06:30 PM - 07:00 PM", dura: "For 30 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 09:00 PM", dura: "For 2 Hours", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
], 

// SATURDAY SCHEDULES
[
{ time: "04:00 AM - 04:30 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:30 AM - 05:00 AM", dura: "Within 30 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 06:30 AM", dura: "Within 30 Minutes", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "06:30 AM - 06:45 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "06:45 AM - 07:15 AM", dura: "Within 30 Minutes", task: "Bath Up", desc: "Bath To Clean", img: "Files/bath.gif" },
{ time: "07:15 AM - 08:00 AM", dura: "For 45 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "08:00 AM - 08:55 AM", dura: "Within 55 Minutes", task: "Preparing for School", desc: "Hurry Up! Dress Up, Go to School.", img: "Files/ready.gif" },
{ time: "08:55 AM - 12:05 PM", dura: "Within 3 Hours", task: "School Hours", desc: "I'm In School...", img: "Files/school.gif" },
{ time: "12:05 PM - 12:30 PM", dura: "Within 15 Minutes", task: "Back To Home", desc: "Coming Back to Home.", img: "Files/go2home.gif" },
{ time: "12:30 PM - 12:50 PM", dura: "Within 20 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "12:50 PM - 02:20 PM", dura: "For 1 Hour & 30 Minutes", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "02:20 PM - 02:30 PM", dura: "For 10 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "02:30 PM - 04:30 PM", dura: "For 2 Hours", task: "Gaming", desc: "Time To Mine & Craft Or Other Games!", img: "Files/gaming.gif" },
{ time: "04:30 PM - 06:00 PM", dura: "For 1 Hour & 30 Minutes", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "06:00 PM - 07:00 PM", dura: "For 1 Hour", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 08:00 PM", dura: "For 1 Hour", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "08:00 PM - 09:30 PM", dura: "For 1 Hour & 30 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "10:00 PM - 11:30 PM", dura: "Within 1 Hour & 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "11:30 PM - 04:30 AM", dura: "For 5 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
], 

// SUNDAY SCHEDULES
[
{ time: "04:30 AM - 04:45 AM", dura: "Within 30 Minutes", task: "Wake Up", desc: "It's Time to Wake Up, Leave the Bed of Laze.", img: "Files/wakeup.gif" },
{ time: "04:45 AM - 05:00 AM", dura: "Within 15 Minutes", task: "Freshing Up", desc: "Get A Lighter Feel!", img: "Files/fresh.png" },
{ time: "05:00 AM - 05:30 AM", dura: "For 30 Minutes", task: "Morning Walk", desc: "Go to Walk for Fresh Air.", img: "Files/walk.gif" },
{ time: "05:30 AM - 05:45 AM", dura: "For 15 Minutes", task: "Morning Exercise", desc: "Exercise! You've to become Fit 'n' Fine.", img: "Files/exercise.gif" },
{ time: "05:45 AM - 06:00 AM", dura: "For 15 Minutes", task: "Meditation", desc: "Dive into Your Own Depth with Quitness!", img: "Files/meditation.gif" },
{ time: "06:00 AM - 07:00 AM", dura: "For 1 Hour", task: "Rapid Revision", desc: "Read A Just ReCap Only.", img: "Files/revision.gif" },
{ time: "07:00 AM - 07:15 AM", dura: "Within 15 Minutes", task: "Brushing Teeth", desc: "Brush Your Tooth. And Get Freshen up!", img: "Files/brush.gif" },
{ time: "07:15 AM - 07:30 AM", dura: "For 15 Minutes", task: "Cycling", desc: "Don't Forget to Ride Bicycle. It's all the Fun...", img: "Files/cycling.gif" },
{ time: "07:30 AM - 07:45 AM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:45 AM - 08:45 AM", dura: "For 1 Hour", task: "Story Writing", desc: "It's Time to Creativity to Write Something...!", img: "Files/writing.gif" },
{ time: "08:45 AM - 09:00 AM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "09:00 AM - 10:30 AM", dura: "For 1 Hour & 30 Minutes", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "10:30 AM - 12:00 PM", dura: "For 1 Hour & 30 Minutes", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "12:00 PM - 01:00 PM", dura: "For 1 Hour", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "01:00 PM - 01:30 PM", dura: "Within 30 Minutes", task: "Lunch Time", desc: "Time to Lunch! Rats in Stomach.", img: "Files/lunch.gif" },
{ time: "01:30 PM - 03:00 PM", dura: "For 1 Hour & 30 Minutes", task: "Noon Nap", desc: "A Little Nap Time", img: "Files/nap.gif" },
{ time: "03:00 PM - 03:15 PM", dura: "For 15 Minutes", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "03:15 PM - 04:30 PM", dura: "For 1 Hour & 15 Minutes", task: "Gaming", desc: "Time To Mine & Craft Or Other Games!", img: "Files/gaming.gif" },
{ time: "04:30 PM - 06:00 PM", dura: "For 1 Hour & 30 Minutes", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "06:00 PM - 07:00 PM", dura: "For 1 Hour", task: "Free", desc: "Nothing to Do!", img: "Files/free.gif" },
{ time: "07:00 PM - 08:00 PM", dura: "For 1 Hour", task: "Academics Study", desc: "Dive into Academics' Prep...", img: "Files/study.gif" },
{ time: "08:00 PM - 09:00 PM", dura: "For 1 Hour", task: "Coding", desc: "Time to Code to be a Good Developer!", img: "Files/coding.gif" },
{ time: "09:00 PM - 09:30 PM", dura: "Within 30 Minutes", task: "Dinner", desc: "Time To Dinner! Last Meal!", img: "Files/dinner.gif" },
{ time: "09:30 PM - 10:00 PM", dura: "Within 30 Minutes", task: "Go to Bed", desc: "Go to Bed! Time to Dive into Dreams...", img: "Files/sleep.gif" },
{ time: "10:00 PM - 04:00 AM", dura: "For 6 Hours", task: "Night Sleep", desc: "I'm Sleeping! Don't Disturb Me...", img: "Files/sleeping.gif" }
]
    ];

    function showContent(index) {
      tabs[currentIndex].classList.remove('active');
      currentIndex = index;
      tabs[currentIndex].classList.add('active');

      contentContainer.innerHTML = '';
      taskData[currentIndex].forEach(task => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="time">${task.time}</div>
          <div class="task">${task.task}</div>
          <div class="duration">${task.dura}</div>
          <div class="description">${task.desc}</div>
          <img src="${task.img}" alt="Task Image" class="image">
        `;
        contentContainer.appendChild(card);
      });
    }

    showContent(0);
    