// Get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
const currentDay = currentDate.getDate();

// Populate year dropdown
const yearDropdown = document.getElementById('birth-year');
for (let year = 1900; year <= currentYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
}

// Populate month dropdown
const monthDropdown = document.getElementById('birth-month');
for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthDropdown.appendChild(option);
}

// Populate day dropdown
const dayDropdown = document.getElementById('birth-day');
const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
for (let day = 1; day <= daysInMonth; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    dayDropdown.appendChild(option);
}

// Set default values to current date
yearDropdown.value = currentYear;
monthDropdown.value = currentMonth;
dayDropdown.value = currentDay;
