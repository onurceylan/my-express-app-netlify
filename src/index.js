document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    fetch(`/greet?firstName=${firstName}&lastName=${lastName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('result').innerText = `Hello, ${data.firstName} ${data.lastName}!`;
        })
        .catch(error => console.error('Error:', error));
});
