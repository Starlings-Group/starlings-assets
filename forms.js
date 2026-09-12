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
        if(value !== "") e.target.value = parseInt(value, 10).toLocaleString('en-US');
        else e.target.value = "";
    }
});

async function submitRFP(e) {
    e.preventDefault();
    const RFP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjlPU4qSXTuRY3_NX5e31vl_wER6SPfVMSyEO1HhSECa3sFR3tgqpGnLOlbjdWgMqrBg/exec"; 
    const btn = e.target.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML; 
    btn.innerHTML = '<span class="spinner"></span> Sending...';
    btn.disabled = true;

    try {
        const formData = new FormData(e.target);
        const dataObj = Object.fromEntries(formData.entries());

        if (dataObj.revenue) dataObj.revenue = dataObj.revenue.replace(/,/g, '');
        if (dataObj.transactions) dataObj.transactions = dataObj.transactions.replace(/,/g, '');
        if (dataObj.bank_accounts) dataObj.bank_accounts = dataObj.bank_accounts.replace(/,/g, '');
        if (dataObj.employees) dataObj.employees = dataObj.employees.replace(/,/g, '');
        if (dataObj.currency && dataObj.revenue) dataObj.revenue = dataObj.currency + ' ' + dataObj.revenue;

        await fetch(RFP_SCRIPT_URL, { method: 'POST', body: JSON.stringify(dataObj) });

        if (typeof Swal !== 'undefined') {
            Swal.fire({ icon: 'success', title: 'Proposal Request Sent!', text: 'Thank you for reaching out. Our team will review your requirements and contact you shortly.', confirmButtonColor: '#E35336' }).then(() => {
                e.target.reset();
                showPage('home');
            });
        }
    } catch (err) {
        if (typeof Swal !== 'undefined') Swal.fire({ icon: 'error', title: 'System Notice', text: 'An error occurred while sending the request. Please try again.', confirmButtonColor: '#E35336' });
    } finally {
        btn.innerHTML = originalContent; btn.disabled = false;
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiPKwx9kNIoIehO4SKzhsGu2MzSHBeaKasXCUb49EiQzgt4EYlXOuIyEEvHkfLOaed/exec"; 
    const btn = e.target.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML; 
    btn.innerHTML = '<span class="spinner"></span> Sending...';
    btn.disabled = true;

    try {
        const formData = new FormData(e.target);
        const fileInput = document.getElementById('fileUpload');
        const file = fileInput ? fileInput.files[0] : null;
        
        if(file) {
            const reader = new FileReader();
            reader.onload = async function() {
                const dataObj = Object.fromEntries(formData.entries());
                dataObj.file = { name: file.name, type: file.type, data: reader.result.split(',')[1] }; 
                await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(dataObj) });
                if (typeof Swal !== 'undefined') {
                    Swal.fire({ icon: 'success', title: 'Sent!', text: 'Your application has been successfully submitted.', confirmButtonColor: '#E35336' }).then(() => {
                        e.target.reset(); document.getElementById('fileList').innerHTML = ''; showPage('home');
                    });
                }
            };
            reader.readAsDataURL(file);
        } else {
             const dataObj = Object.fromEntries(formData.entries());
             await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(dataObj) });
             if (typeof Swal !== 'undefined') {
                 Swal.fire({ icon: 'success', title: 'Sent!', text: 'Your application has been successfully submitted.', confirmButtonColor: '#E35336' }).then(() => {
                     e.target.reset(); showPage('home');
                 });
             }
        }
    } catch (error) {
        if (typeof Swal !== 'undefined') Swal.fire({ icon: 'error', title: 'Failed', text: 'A system error occurred. Please try again.', confirmButtonColor: '#E35336' });
    } finally {
        btn.innerHTML = originalContent; btn.disabled = false;
    }
}
