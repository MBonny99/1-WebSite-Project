document.addEventListener('DOMContentLoaded', function() {
    fetch('/user-data')
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('userName').innerText = `${data.nome} ${data.cognome}`;
                document.getElementById('balance').innerText = data.balance || 'N/A';
                document.getElementById('stipendio').innerText = data.stipendio || 'N/A';
                document.getElementById('entrate').innerText = data.entrate || 'N/A';
            } else {
                document.getElementById('userName').innerText = 'Guest';
                document.getElementById('balance').innerText = 'N/A';
                document.getElementById('stipendio').innerText = 'N/A';
                document.getElementById('entrate').innerText = 'N/A';
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
});
