

function toggleLeftPanel() {
    const leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('active');
}

window.onclick = function(event) {
    const leftPanel = document.querySelector('.left-panel');
    const leftPanelIcon = document.querySelector('.left-panel-icon');

    if (event.target === leftPanelIcon) {
        return;
    }

    if (leftPanel.classList.contains('active') && !leftPanel.contains(event.target)) {
        leftPanel.classList.remove('active');
    }
};

function showPanel(panelId) {
    const panels = document.querySelectorAll('.panel-content');
    const menuItems = document.querySelectorAll('.menu li');
    const leftPanel = document.querySelector('.left-panel');

    panels.forEach(panel => {
        if (panel.id === panelId) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });

    menuItems.forEach(item => {
        if (item.getAttribute('data-target') === panelId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Close the left panel after selecting an option
    leftPanel.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active', 'click-effect'));

            // Add click effect class to the clicked menu item
            item.classList.add('click-effect');

            // After a short delay, add the active class and remove the click effect class
            setTimeout(() => {
                item.classList.remove('click-effect');
                item.classList.add('active');
            }, 100); // Delay in milliseconds, adjust as needed
        });
    });
});


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
