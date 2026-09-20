const formsHTML = `
<!-- ==============================================
     CAREER VIEW (RECRUITMENT FORM)
     ============================================== -->
<div class='page-section hidden min-h-screen bg-gray-50 pt-10 pb-20' id='career-view'>
    <div class='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='mb-10 text-center'>
            <h1 class='text-4xl font-bold text-black mb-4'>Join the <span class='text-brand-primary'>STARLINGS</span> Team</h1>
            <p class='text-black max-w-2xl mx-auto' id='edit-career-desc'>We are looking for the best talents to grow together. Please fill out the form below with accurate information.</p>
        </div>
        <div class='bg-white border border-gray-200 rounded-lg p-8 shadow-xl'>
            <form id='recruitmentForm' onsubmit='handleFormSubmit(event)'>
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Personal Information</h3>
                    <div class='flex flex-col gap-6'>
                        <div class='w-full'>
                            <label class='block text-sm font-medium text-black mb-1'>Email Address <span class='text-red-500'>*</span></label>
                            <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='email' required='required' type='email'/>
                        </div>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Full Name (As per ID) <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='nama_lengkap' required='required' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Nickname</label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='nama_panggilan' type='text'/>
                            </div>
                        </div>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Place of Birth <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='tempat_lahir' required='required' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Date of Birth <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='tanggal_lahir' required='required' type='date'/>
                            </div>
                        </div>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Gender <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='gender' required='required'>
                                    <option value=''>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>WhatsApp Number <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='whatsapp' placeholder='08...' required='required' type='tel'/>
                            </div>
                        </div>
                        <div class='w-full'>
                            <label class='block text-sm font-medium text-black mb-1'>ID Address <span class='text-red-500'>*</span></label>
                            <textarea class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='alamat_ktp' required='required' rows='3'></textarea>
                        </div>
                        <div class='w-full'>
                            <label class='block text-sm font-medium text-black mb-1'>Current Domicile (If different from ID)</label>
                            <textarea class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='alamat_domisili' rows='2'></textarea>
                        </div>
                    </div>
                </div>
                
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Education &amp; Background</h3>
                    <div class='flex flex-col gap-6'>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Highest Education <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='pendidikan_terakhir' required='required'>
                                    <option value=''>Select Education</option>
                                    <option value='High School'>High School</option>
                                    <option value='Diploma'>Diploma</option>
                                    <option value='Bachelor'>Bachelor</option>
                                    <option value='Master'>Master</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Other Education (Certifications/Courses)</label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='pendidikan_lainnya' type='text'/>
                            </div>
                        </div>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Do you own a laptop? <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='punya_laptop' required='required'>
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </select>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Do you own a motorcycle? <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='punya_motor' required='required'>
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </select>
                            </div>
                        </div>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/3'>
                                <label class='block text-sm font-medium text-black mb-1'>Child number (e.g. 1st, 2nd) <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='anak_ke' required='required' type='number'/>
                            </div>
                            <div class='w-full sm:w-1/3'>
                                <label class='block text-sm font-medium text-black mb-1'>Marital Status <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='status_menikah' required='required'>
                                    <option value='Single'>Single</option>
                                    <option value='Married'>Married</option>
                                </select>
                            </div>
                            <div class='w-full sm:w-1/3'>
                                <label class='block text-sm font-medium text-black mb-1'>Have children?</label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='punya_anak'>
                                    <option value='No'>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Essay &amp; Documents</h3>
                    <div class='mb-6'>
                        <label class='block text-sm font-medium text-black mb-2'>If you were reborn into this world, what would you want to be? And what dream would you pursue? <span class='text-red-500'>*</span></label>
                        <textarea class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='essay_mimpi' required='required' rows='5'></textarea>
                    </div>
                    <div class='mb-6'>
                        <label class='block text-sm font-medium text-black mb-2'>Upload Documents (Cover Letter, CV, ID, Certifications) <span class='text-red-500'>*</span><br/><span class='text-xs text-gray-500'>Format: PDF (Max 5MB per file). Please combine into 1 PDF or select multiple files.</span></label>
                        <div class='flex items-center justify-center w-full'>
                            <label class='flex flex-col w-full h-32 border-2 border-brand-primary border-dashed rounded cursor-pointer hover:bg-gray-50 transition'>
                                <div class='flex flex-col items-center justify-center pt-7'>
                                    <i class='fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2'></i> 
                                    <p class='text-sm text-gray-500 group-hover:text-black pt-1 tracking-wider'>Select your PDF files</p>
                                </div>
                                <input accept='.pdf' class='opacity-0' id='fileUpload' multiple='multiple' name='files' required='required' type='file'/>
                            </label>
                        </div>
                        <div class='mt-2 text-sm text-brand-primary' id='fileList'></div>
                    </div>
                </div>
                
                <div class='text-right'>
                    <button class='bg-brand-primary text-white font-bold py-3 px-8 rounded shadow hover:bg-black transition duration-300 w-full md:w-auto flex items-center justify-center gap-2 btn-animate' type='submit'>
                        <span>Submit Application</span> <i class='fas fa-paper-plane'></i>
                    </button>
                </div>
            </form>
        </div>
        <div class='mt-8 text-center'><button class='text-gray-500 hover:text-brand-primary underline' onclick='showPage("home")'>Back to Home Page</button></div>
    </div>
</div>

<!-- ==============================================
     REQUEST FOR PROPOSAL (RFP) VIEW
     ============================================== -->
<div class='page-section hidden min-h-screen bg-gray-50 pt-20 pb-20' id='rfp-view'>
    <div class='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        <!-- Generate RFP Barcode Button -->
        <div class='flex justify-end mb-4'>
            <button class='bg-brand-primary text-white px-4 py-2 rounded font-bold hover:bg-black transition text-sm flex items-center shadow cursor-pointer' onclick='generateRfpQrCode()'>
                <i class='fas fa-qrcode mr-2'></i> Share / QR Code
            </button>
        </div>

        <div class='mb-10 text-center'>
            <h1 class='text-4xl font-bold text-black mb-4'>Request for Proposal for <span class='text-brand-primary'>Services</span></h1>
            <p class='text-black max-w-2xl mx-auto'>Submit your request below, and our partners will get back to you with a tailored financial solution.</p>
        </div>
        
        <div class='bg-white border border-gray-200 rounded-lg p-8 shadow-xl'>
            <form id='rfpForm' onsubmit='submitRFP(event)'>
                
                <!-- Personal Details -->
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Personal Information</h3>
                    <div class='flex flex-col gap-6'>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/4'>
                                <label class='block text-sm font-medium text-black mb-1'>Title <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='title' required='required'>
                                    <option value=''>Select Title</option>
                                    <option value='Dr.'>Dr.</option>
                                    <option value='Miss'>Miss</option>
                                    <option value='Mr.'>Mr.</option>
                                    <option value='Mrs.'>Mrs.</option>
                                    <option value='Ms.'>Ms.</option>
                                    <option value='Prof.'>Prof.</option>
                                </select>
                            </div>
                            <div class='w-full sm:w-3/4'>
                                <label class='block text-sm font-medium text-black mb-1'>Full Name <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='full_name' required='required' type='text'/>
                            </div>
                        </div>
                        
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Position/Job title <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='job_title' required='required' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Email address <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='email' required='required' type='email'/>
                            </div>
                        </div>

                        <div class='w-full'>
                            <label class='block text-sm font-medium text-black mb-1'>Phone number <span class='text-red-500'>*</span></label>
                            <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='phone' required='required' type='tel'/>
                        </div>
                    </div>
                </div>

                <!-- Company Details -->
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Company Details</h3>
                    <div class='flex flex-col gap-6'>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Company/Organization name</label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='company' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Company Location <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='location' placeholder='City, Country' required='required' type='text'/>
                            </div>
                        </div>

                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Industry <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='industry' required='required' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Area of interest <span class='text-red-500'>*</span></label>
                                <select class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='interest' required='required'>
                                    <option value=''>Select Area of Interest</option>
                                    <option value='Accounting Services'>Accounting Services</option>
                                    <option value='Tax'>Tax</option>
                                    <option value='Consulting'>Consulting</option>
                                </select>
                            </div>
                        </div>

                        <div class='w-full'>
                            <label class='block text-sm font-medium text-black mb-1'>Company website address</label>
                            <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='website' placeholder='e.g., www.company.com' type='text'/>
                        </div>
                    </div>
                </div>

                <!-- Business Metrics -->
                <div class='mb-8'>
                    <h3 class='text-xl font-bold text-brand-primary mb-6 border-b border-gray-200 pb-2'>Business Metrics</h3>
                    <div class='flex flex-col gap-6'>
                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Yearly revenue (Nominal) <span class='text-red-500'>*</span></label>
                                <div class='flex flex-row w-full'>
                                    <select class='bg-gray-50 text-black rounded-l px-3 py-3 border border-gray-300 border-r-0 focus:border-brand-primary outline-none shrink-0' name='currency' required='required'>
                                        <option value='IDR'>IDR</option>
                                        <option value='USD'>USD</option>
                                        <option value='EUR'>EUR</option>
                                        <option value='GBP'>GBP</option>
                                        <option value='SGD'>SGD</option>
                                        <option value='AUD'>AUD</option>
                                        <option value='MYR'>MYR</option>
                                        <option value='JPY'>JPY</option>
                                        <option value='CNY'>CNY</option>
                                        <option value='KRW'>KRW</option>
                                        <option value='THB'>THB</option>
                                        <option value='VND'>VND</option>
                                        <option value='PHP'>PHP</option>
                                        <option value='INR'>INR</option>
                                        <option value='SAR'>SAR</option>
                                        <option value='AED'>AED</option>
                                        <option value='CAD'>CAD</option>
                                        <option value='CHF'>CHF</option>
                                        <option value='NZD'>NZD</option>
                                        <option value='BRL'>BRL</option>
                                        <option value='ZAR'>ZAR</option>
                                        <option value='RUB'>RUB</option>
                                        <option value='TRY'>TRY</option>
                                        <option value='HKD'>HKD</option>
                                        <option value='TWD'>TWD</option>
                                    </select>
                                    <input class='w-full bg-white text-black rounded-r px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none min-w-0 format-number' inputmode='numeric' name='revenue' placeholder='Amount' required='required' type='text'/>
                                </div>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Number of Monthly Purchase Transactions <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none format-number' inputmode='numeric' name='transactions' required='required' type='text'/>
                            </div>
                        </div>

                        <div class='flex flex-col sm:flex-row gap-6'>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Number of Business Bank Accounts <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none format-number' inputmode='numeric' name='bank_accounts' required='required' type='text'/>
                            </div>
                            <div class='w-full sm:w-1/2'>
                                <label class='block text-sm font-medium text-black mb-1'>Number of Employees <span class='text-red-500'>*</span></label>
                                <input class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none format-number' inputmode='numeric' name='employees' required='required' type='text'/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Info -->
                <div class='mb-8'>
                    <div class='mb-6'>
                        <label class='block text-sm font-medium text-black mb-2'>Comments and/or instructions <span class='text-red-500'>*</span></label>
                        <textarea class='w-full bg-white text-black rounded px-4 py-3 border border-gray-300 focus:border-brand-primary outline-none' name='comments' required='required' rows='4'></textarea>
                    </div>

                    <div class='mb-6 p-4 bg-gray-50 border border-gray-200 rounded'>
                        <label class='block text-sm font-medium text-black mb-3 leading-relaxed'>
                            I agree to receive emailed reports, articles, event invitations and other information related to STARLINGS products and services. I understand I may unsubscribe at any time by clicking the link included in emails. <span class='text-red-500'>*</span>
                        </label>
                        <div class='flex flex-row flex-wrap items-center gap-6 mt-2'>
                            <label class='flex items-center text-black cursor-pointer'>
                                <input class='mr-2 text-brand-primary focus:ring-brand-primary h-4 w-4 border-gray-300' name='consent' required='required' type='radio' value='Yes'/>
                                Yes
                            </label>
                            <label class='flex items-center text-black cursor-pointer'>
                                <input class='mr-2 text-brand-primary focus:ring-brand-primary h-4 w-4 border-gray-300' name='consent' required='required' type='radio' value='No'/>
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <div class='text-right'>
                    <button class='bg-brand-primary text-white font-bold py-3 px-8 rounded shadow hover:bg-black transition duration-300 w-full md:w-auto flex items-center justify-center gap-2 btn-animate' type='submit'>
                        <span>Submit Request</span> <i class='fas fa-paper-plane'></i>
                    </button>
                </div>
            </form>
        </div>
        <div class='mt-8 text-center'><button class='text-gray-500 hover:text-brand-primary underline' onclick='showPage("home")'>Back to Home Page</button></div>
    </div>
</div>
`;

// Memasukkan HTML yang diekstrak ke dalam struktur DOM Blogger Anda
const container = document.getElementById('dynamic-pages-container');
if (container) {
    container.insertAdjacentHTML('beforeend', formsHTML);
}

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

// Menangkap event pada elemen 'fileUpload' yang sudah ditambahkan ke dalam DOM
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
