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

var fileUploadEl = document.getElementById('fileUpload');
if (fileUploadEl) {
    fileUploadEl.addEventListener('change', function(e) {
        const list = document.getElementById('fileList');
        if(list){
            list.innerHTML = '';
            for (let i = 0; i < this.files.length; i++) {
                list.innerHTML += '<div><i class="fas fa-file-pdf mr-2"></i>' + this.files[i].name + '</div>';
            }
        }
    });
}

document.addEventListener('input', function (e) {
    if (e.target.classList.contains('format-number')) {
        let value = e.target.value.replace(/\D/g, "");
        if(value !== "") {
            e.target.value = parseInt(value, 10).toLocaleString('en-US');
        } else {
            e.target.value = "";
        }
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiPKwx9kNIoIehO4SKzhsGu2MzSHBeaKasXCUb49EiQzgt4EYlXOuIyEEvHkfLOaed/exec"; 
    const btn = e.target.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML; 
    btn.innerHTML = '<span class="spinner"></span> Sending...';
    btn.disabled = true;
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    const restoreButton = () => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        btn.classList.remove('opacity-75', 'cursor-not-allowed');
    };

    try {
        const form = document.getElementById('recruitmentForm');
        const formData = new FormData(form);
        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = async function() {
            try {
                const fileData = { name: file.name, type: file.type, data: reader.result.split(',')[1] };
                const dataObj = Object.fromEntries(formData.entries());
                dataObj.file = fileData; 
                const response = await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(dataObj) });
                if (response.ok) {
                     if (typeof Swal !== 'undefined') {
                         Swal.fire({ icon: 'success', title: 'Sent!', text: 'Your application has been successfully submitted.', confirmButtonColor: '#E35336' }).then(() => {
                            form.reset(); document.getElementById('fileList').innerHTML = ''; showPage('home'); restoreButton();
                        });
                     }
                } else { throw new Error('Failed to send'); }
            } catch (err) {
                console.error(err);
                if (typeof Swal !== 'undefined') { Swal.fire({ icon: 'error', title: 'Failed', text: 'An error occurred while sending the data. Please try again.', confirmButtonColor: '#E35336' }); }
                restoreButton();
            }
        };
        
        reader.onerror = function() {
            if (typeof Swal !== 'undefined') { Swal.fire({ icon: 'error', title: 'Failed', text: 'Failed to read the file.', confirmButtonColor: '#E35336' }); }
            restoreButton();
        };
        
        if(file) { reader.readAsDataURL(file); } else { restoreButton(); }
    } catch (error) {
        console.error(error);
        if (typeof Swal !== 'undefined') { Swal.fire({ icon: 'error', title: 'Failed', text: 'A system error occurred. Please try again.', confirmButtonColor: '#E35336' }); }
        restoreButton();
    } 
}

async function submitRFP(e) {
    e.preventDefault();
    const RFP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjlPU4qSXTuRY3_NX5e31vl_wER6SPfVMSyEO1HhSECa3sFR3tgqpGnLOlbjdWgMqrBg/exec"; 
    const btn = e.target.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML; 
    
    btn.innerHTML = '<span class="spinner"></span> Sending...';
    btn.disabled = true;
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    try {
        const form = document.getElementById('rfpForm');
        const formData = new FormData(form);
        const dataObj = Object.fromEntries(formData.entries());

        if (dataObj.revenue) dataObj.revenue = dataObj.revenue.replace(/,/g, '');
        if (dataObj.transactions) dataObj.transactions = dataObj.transactions.replace(/,/g, '');
        if (dataObj.bank_accounts) dataObj.bank_accounts = dataObj.bank_accounts.replace(/,/g, '');
        if (dataObj.employees) dataObj.employees = dataObj.employees.replace(/,/g, '');

        if (dataObj.currency && dataObj.revenue) { dataObj.revenue = dataObj.currency + ' ' + dataObj.revenue; }

        const response = await fetch(RFP_SCRIPT_URL, { method: 'POST', body: JSON.stringify(dataObj) });

        if (typeof Swal !== 'undefined') {
            Swal.fire({ icon: 'success', title: 'Proposal Request Sent!', text: 'Thank you for reaching out. Our team will review your requirements and contact you shortly.', confirmButtonColor: '#E35336' }).then(() => {
                form.reset(); showPage('home');
            });
        }

    } catch (err) {
        console.error(err);
        if (typeof Swal !== 'undefined') { Swal.fire({ icon: 'error', title: 'System Notice', text: 'An error occurred while sending the request. Please try again or contact us via WhatsApp.', confirmButtonColor: '#E35336' }); }
    } finally {
        btn.innerHTML = originalContent; btn.disabled = false; btn.classList.remove('opacity-75', 'cursor-not-allowed');
    }
}
