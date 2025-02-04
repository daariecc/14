document.getElementById('open-btn').addEventListener('click', function() {
    document.getElementById('envelope').classList.add('open');
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('envelope').classList.remove('open');
});
