document.addEventListener("DOMContentLoaded", function() {
    // Example: Dynamically updating statistics (you can fetch data from an API)
    document.getElementById('student-count').textContent = "1500";
    document.getElementById('course-count').textContent = "120";
    document.getElementById('faculty-count').textContent = "75";

    // Example: Adding a new update (you can modify this to fetch from a database or API)
    const updatesList = document.getElementById('updates-list');
    const newUpdate = document.createElement('li');
    newUpdate.textContent = "New semester starts next week";
    updatesList.appendChild(newUpdate);
});
