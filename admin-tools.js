// Function QR Codes
function generateRfpQrCode() {
    const url = window.location.origin + window.location.pathname + '?page=rfp-view';
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(url);
    if (typeof Swal !== 'undefined') {
        Swal.fire({ title: 'RFP QR Code', text: 'Scan this code to easily open the Request for Proposal form on your mobile device.', imageUrl: qrUrl, imageWidth: 250, imageHeight: 250, imageAlt: 'QR Code', confirmButtonText: 'Close', confirmButtonColor: '#E35336' });
    }
}

function generateCurrentUrlQrCode() {
    const url = window.location.href;
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(url);
    if (typeof Swal !== 'undefined') {
        Swal.fire({ title: 'Profile QR Code', text: 'Scan this barcode to share or open the partner profile on another device.', imageUrl: qrUrl, imageWidth: 250, imageHeight: 250, imageAlt: 'Profile QR Code', confirmButtonText: 'Close', confirmButtonColor: '#E35336' });
    }
}

// Admin Mockup System
let isAdmin = localStorage.getItem('starlingsAdmin') === 'true';

function promptAdminLogin() {
    if (isAdmin) {
        Swal.fire({ title: 'Admin Logged In', text: 'You already have admin privileges. Do you want to logout?', icon: 'info', showCancelButton: true, confirmButtonText: 'Logout', confirmButtonColor: '#E35336' }).then((result) => {
            if (result.isConfirmed) { localStorage.setItem('starlingsAdmin', 'false'); isAdmin = false; toggleAdminUI(); Swal.fire('Logged Out', '', 'success'); }
        });
        return;
    }
    Swal.fire({
        title: 'Admin Login', html: '<input id="swal-input1" class="swal2-input" placeholder="Email"><input id="swal-input2" class="swal2-input" type="password" placeholder="Password">', focusConfirm: false, confirmButtonColor: '#E35336',
        preConfirm: () => {
            if (document.getElementById('swal-input1').value === 'office@starlings-group.com' && document.getElementById('swal-input2').value === 'GoInternasional!Amin') return true;
            Swal.showValidationMessage('Invalid email or password'); return false;
        }
    }).then((result) => {
        if (result.isConfirmed) { localStorage.setItem('starlingsAdmin', 'true'); isAdmin = true; toggleAdminUI(); Swal.fire({ icon: 'success', title: 'Login Successful', confirmButtonColor: '#E35336' }); }
    });
}

function toggleAdminUI() {
    document.querySelectorAll('.admin-editable, #home-view p, #home-view h1, #home-view h2, #home-view span').forEach(el => {
        if(el.tagName === 'I' || el.tagName === 'BUTTON' || el.closest('button')) return;
        if (isAdmin) el.setAttribute('contenteditable', 'true'); else el.removeAttribute('contenteditable');
    });
    const lockIcon = document.getElementById('admin-lock-icon');
    if(lockIcon) { lockIcon.className = isAdmin ? 'fas fa-unlock text-xl text-brand-primary' : 'fas fa-lock text-xl'; }
}
