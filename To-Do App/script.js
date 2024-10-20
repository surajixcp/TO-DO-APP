const inputBox = document.getElementById('input-box'); // ID selection
const listContainer = document.getElementById('list-container'); // ID selection

function addTask() {
    if (inputBox.value.trim() === '') { // Use trim to avoid empty space input
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value.trim(); // Trim the input value
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Multiplication sign for deletion
        li.appendChild(span);

        inputBox.value = ""; // Clear input box
        saveData();
    }
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem('data'); // Retrieve data from localStorage
    if (data) {
        listContainer.innerHTML = data; // Display saved tasks
    }
}

// Initialize the to-do list on page load
showTask();
