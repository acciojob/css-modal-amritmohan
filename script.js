//your JS code here. If required.

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

