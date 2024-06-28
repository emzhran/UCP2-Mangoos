document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', function(e) {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const massage = document.getElementById('massage').value;

        Swal.fire({
            title: 'Form Submission',
            html: `<strong>Nama:</strong> ${nama}<br>
                   <strong>Email:</strong> ${email}<br>
                   <strong>Message:</strong> ${massage}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
});