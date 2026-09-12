let isAdmin = localStorage.getItem('starlingsAdmin') === 'true';

function promptAdminLogin() {
    if (isAdmin) {
        Swal.fire({
            title: 'Admin Logged In',
            text: 'You already have admin privileges. Do you want to logout?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Logout',
            confirmButtonColor: '#E35336'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('starlingsAdmin', 'false');
                isAdmin = false;
                toggleAdminUI();
                Swal.fire('Logged Out', '', 'success');
            }
        });
        return;
    }

    Swal.fire({
        title: 'Admin Login',
        html: '<input id="swal-input1" class="swal2-input" placeholder="Email"><input id="swal-input2" class="swal2-input" type="password" placeholder="Password">',
        focusConfirm: false,
        confirmButtonColor: '#E35336',
        preConfirm: () => {
            const email = document.getElementById('swal-input1').value;
            const password = document.getElementById('swal-input2').value;
            if (email === 'office@starlings-group.com' && password === 'GoInternasional!Amin') {
                return true;
            } else {
                Swal.showValidationMessage('Invalid email or password');
                return false;
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('starlingsAdmin', 'true');
            isAdmin = true;
            toggleAdminUI();
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You now have access to upload Content, News, and Research. You can directly edit the text on the page.',
                confirmButtonColor: '#E35336'
            });
        }
    });
}

function toggleAdminUI() {
    const adminControls = document.querySelectorAll('.admin-controls');
    adminControls.forEach(el => {
        if (isAdmin) { el.classList.remove('hidden'); } else { el.classList.add('hidden'); }
    });
    
    const editableTexts = document.querySelectorAll('.admin-editable, .page-section p, .page-section h1, .page-section h2, .page-section h3, .page-section h4, .page-section li, .page-section span');
    editableTexts.forEach(el => {
        if(el.tagName === 'I' || el.tagName === 'BUTTON' || el.closest('button')) return;
        if (isAdmin) { el.setAttribute('contenteditable', 'true'); } else { el.removeAttribute('contenteditable'); }
    });

    const lockIcon = document.getElementById('admin-lock-icon');
    if (isAdmin) {
        if(lockIcon) {
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-unlock');
            lockIcon.classList.add('text-brand-primary');
        }
    } else {
        if(lockIcon) {
            lockIcon.classList.remove('fa-unlock');
            lockIcon.classList.add('fa-lock');
            lockIcon.classList.remove('text-brand-primary');
        }
    }
}

function openUploadModal(type) {
    let folderLink = '';
    if (type === 'research') folderLink = 'https://drive.google.com/open?id=17-TA9jdphHh4fvvMUqNHTSkH5EWDTDRJ&usp=drive_copy';
    if (type === 'news') folderLink = 'https://drive.google.com/open?id=1yNmoZI5OITqBjiBMmt5idjr_js8-sNhD&usp=drive_copy';
    if (type === 'activities') folderLink = 'https://drive.google.com/open?id=1J0wSTN-SGYEzvXsmnLU0lxXHyIcRiy3y&usp=drive_copy';

    Swal.fire({
        title: `Upload ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        html: `
            <p class="text-sm text-gray-600 mb-4">Because this is a static Blogger website, direct file uploads require an external Google Apps Script backend.</p>
            <p class="text-sm text-gray-800 mb-4">To upload securely to your Database, please drop your files directly into your designated Google Drive folder:</p>
            <a href="${folderLink}" target="_blank" class="block w-full bg-brand-primary text-white font-bold py-2 rounded mb-4 hover:bg-black transition">
                <i class="fab fa-google-drive mr-2"></i> Open Drive Folder
            </a>
        `,
        showConfirmButton: false,
        showCloseButton: true
    });
}
