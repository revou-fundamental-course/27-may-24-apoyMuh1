document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !dob || !gender || !message) {
        alert("Tolong isi Form yang belum Lengkap");
        return;
    }

    // Display form values
    var output = `
        <h4>Form Submitted</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    document.getElementById('form-output').innerHTML = output;
    document.getElementById('form-output').style.display = 'block';
});
