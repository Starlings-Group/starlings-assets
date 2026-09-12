/**
 * ============================================================================
 * STARLINGS MAIN JAVASCRIPT
 * Terbagi menjadi 5 Modul untuk kemudahan Maintenance
 * ============================================================================
 */

/* ============================================================================
 * MODUL 1: DATABASE PARTNER
 * Berisi data statis untuk profil partner. Edit teks di sini jika ada perubahan.
 * ============================================================================ */
const partnerInfoData = {
    "anang": {
        name: "Dr. Anang Witjaksono, SSos., SE., MM., CIP., AMII., ACII., CRMP., PIA., CRGP., CPT., QIA., Ak., CA.",
        role: "Partner – Finance, Audit, Risk & Tax Advisory",
        img: "https://lh3.googleusercontent.com/d/1zQ1FvtPfrQUWJABE40pSBVE4Wzi3M3pT",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='text-black leading-relaxed mb-4'>Dr. Anang Witjaksono is an authoritative figure in Indonesia's Finance, Accounting, and Risk Management industries, with <strong>extraordinary capabilities specifically in the insurance sector and insurance audit</strong>. Holding a Doctoral degree (Dr.) in Business Administration with a focus on Risk Management from the University of Indonesia, he brings a profound academic insight tested by decades of experience leading the financial sector at the national level.</p><p class='text-black leading-relaxed mb-8'>His professional career encompasses various executive roles in major institutions. He is highly distinguished for his past role as the <strong>Chief Audit Executive at PT Jasaraharja Putera (2021)</strong>, where he directed the Finance, Internal Audit (SPI), and Risk Management divisions. Currently, he actively serves as a <strong>Fit and Proper Assessor for the Financial Services Authority (OJK) (2026 - present)</strong> and as a <strong>Faculty Member at the Faculty of Administrative Science (FIA), University of Indonesia (2023 - present)</strong>.</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Insurance & Insurance Audit:</strong> Extraordinary capability in general insurance, risk-based capital (RBC), and comprehensive insurance audits, backed by CIP, AMII, and ACII international certifications.</li><li><strong>Corporate Finance & Accounting:</strong> Licensed accountant (Ak., CA) with expertise in financial planning, Asset Liability Management, and financial accounting standards compliance.</li><li><strong>Audit & Fraud Investigation:</strong> QIA and PIA certified, possessing deep expertise in Internal Audit, Basic Forensic Audit, and Fraud Loss Calculation (OJK Certified).</li><li><strong>Risk Management & Governance:</strong> CRMP and CRGP certified, expert in corporate risk mitigation, GCG (Good Corporate Governance) implementation, and business process design.</li><li><strong>Tax Compliance:</strong> Holds Applied Tax Brevet A, B, and C qualifications, providing precise and tactical tax advisory.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Career Highlights</h3><ul class='list-disc list-outside text-black space-y-2 mb-8 ml-5'><li><strong>Assessor, Fit and Proper</strong> – Otoritas Jasa Keuangan (2026 - present)</li><li><strong>Faculty Member</strong> – FIA University of Indonesia (2023 - present)</li><li><strong>Chief Audit Executive</strong> – PT Jasaraharja Putera (2021)</li><li>Senior Manager of Finance – PT Jasa Raharja (Persero) (2019 - 2021)</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Education & Credentials</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Ph.D. in Business Administration (Risk Management) – Universitas Indonesia</li><li>Master of Management (Finance & Banking) – Universitas Indonesia</li><li>Bachelor of Accounting – Universitas Islam Bandung</li><li>Bachelor of Communications – Universitas Padjadjaran</li></ul>"
    },
    "umam": {
        name: "M. Khaerul Umam, S.Ak., M.E., Ak., CA., BKP.",
        role: "Partner – Tax & Business Advisory",
        img: "https://lh3.googleusercontent.com/d/1C8Z_yoJWGNx5OXzdVXYKrsftoAA0Fkzb",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='text-black leading-relaxed mb-8'>M. Khaerul Umam represents the modern generation of financial professionals, combining academic acumen, certified technical expertise, and business agility. With a multi-disciplinary educational background—earning a Master of Economics from Universitas Mulawarman and an Accounting Profession degree from Universitas Padjadjaran—he views clients' financial issues not only from a compliance perspective but also through the lens of macroeconomic prospects and business resilience. His career journey reflects a strong work ethic and deep understanding of various industries. From his experience in heavy industry distributors and retail, philanthropic institutions, to founding and leading his own companies, he deeply understands the real pain points faced by business practitioners daily in managing bookkeeping, cash flow, and taxation.</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Tax Compliance & Strategy:</strong> Certified Tax Consultant (BKP - Ministry of Finance RI) and graduate of Brevet A, B, & C. Expert in designing efficient tax planning while ensuring full compliance with prevailing regulations.</li><li><strong>Corporate Accounting:</strong> As a Chartered Accountant (CA) and Certified Tax Technician (CTT), he possesses high accuracy in preparing commercial and fiscal financial statements for various business scales.</li><li><strong>Business Advisory & Entrepreneurship:</strong> Armed with hands-on experience as a Director (General Supplier) and applied Economics knowledge (M.E.), he provides advisory that aligns with clients' expansion and sustainability goals.</li><li><strong>Training & Capacity Building:</strong> Holding Master Trainer and Master Instructor certifications from the National Professional Certification Board (BNSP), and active as a Tax Accounting Lecturer, making him highly reliable in educating clients' internal teams on accounting and tax best practices.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Education & Professional Licenses</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Accounting Profession (Ak.) – Universitas Padjadjaran</li><li>Master of Economics – Universitas Mulawarman</li><li>Bachelor of Accounting – STIE Madani Balikpapan</li><li>BKP (Certified Tax Consultant) – Ministry of Finance RI</li><li>CA (Chartered Accountant) – Indonesian Institute of Accountants</li><li>CTT (Certified Tax Technician) – Association of Indonesian Tax Technicians</li><li>Master Instructor – National Professional Certification Board (BNSP)</li></ul>"
    },
    "vitaloka": {
        name: "Vitaloka Kemaladewi Hutagalung, S.E., Ak., CA.",
        role: "Partner – Corporate Finance, Risk Management & Tax Dispute",
        img: "https://lh3.googleusercontent.com/d/1buB6l5TI1JEYUNprywBQ2BfJMZdLV18g",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='text-black leading-relaxed mb-8'>Vitaloka Kemaladewi Hutagalung represents a rare blend of a reliable corporate manager and a dynamic entrepreneur. Her educational journey at Universitas Padjadjaran (Diploma & Profession) and Universitas Widyatama (Bachelor's & Master's) established a highly solid technical accounting foundation. This is widely recognized through her Chartered Accountant (CA) and ASEAN Chartered Professional Accountant (ASEAN CPA) licenses, validating her competencies at the regional level. In her professional career, Vitaloka has proven her ability to manage the financial complexities of large entities, notably her role as Accounting, Finance, and Risk Management Manager at PT Jasa Tirta Luhur (a State-Owned Enterprise Subsidiary). Beyond the corporate realm, her leadership has also been tested as a Director in several service and construction companies, and as a Supervisory Board member in educational foundations.</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Corporate Financial Management:</strong> Expert in Financial Statement preparation, Financial Statement Analysis, Cash Flow & Treasury Management, and Budgeting & Forecasting to ensure optimal corporate liquidity and profitability.</li><li><strong>Risk Management & Internal Control (ICOFR):</strong> Designing and implementing robust internal control systems and conducting risk assessments to protect client assets and business continuity.</li><li><strong>Taxation & Tax Dispute Resolution:</strong> Armed with a license as a Tax Court Attorney, Vitaloka is not only proficient in regular Tax Compliance but also has the authority and expertise to assist and represent clients in complex tax dispute resolutions at the court level.</li><li><strong>Audit Coordination:</strong> Extensive experience in managing management reporting cycles and providing full Audit Support during external audit processes.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Education & Professional Licenses</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Master of Accounting – Universitas Widyatama (On-Going)</li><li>Accounting Profession (Ak.) – Universitas Padjadjaran</li><li>Bachelor of Accounting – Universitas Widyatama</li><li>Diploma in Accounting – Universitas Padjadjaran</li><li>ASEAN CPA – ASEAN Chartered Professional Accountant</li><li>CA (Chartered Accountant) – Indonesian Institute of Accountants</li><li>Licensed Tax Court Attorney</li><li>Practicing Accountant (AB)</li></ul>"
    },
    "seni": {
        name: "Seni Nafisah Maullina, S.E., Ak., CA.",
        role: "Partner – Financial Accounting & Business Advisory",
        img: "https://lh3.googleusercontent.com/d/1NvCQy7xSGijgGtT-8g7-u9BouGoqIBAs",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='text-black leading-relaxed mb-8'>Seni Nafisah Maullina is a highly dedicated accounting practitioner with a solid track record in leading the transformation of corporate finance functions across various industry sectors, particularly retail and manufacturing. Earning a Bachelor of Economics and an Accounting Profession (Ak.) degree, she complements her academic qualifications with high-level professional recognition as a Chartered Accountant (CA) from the Indonesian Institute of Accountants (IAI). Before taking on a strategic role as a Partner at STARLINGS, Seni built her flight hours and expertise through experience in various public accounting firms and corporations. Her meticulous, analytical, and detail-oriented approach makes her a trusted partner for companies requiring financial governance restructuring, budget efficiency, and reporting transparency.</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Financial Accounting & Reporting:</strong> Expert in designing, structuring, and preparing comprehensive Financial Statements that strictly adhere to the latest Financial Accounting Standards (SAK), providing full visibility to management and stakeholders.</li><li><strong>Business Process Improvement:</strong> Analyzing and refining financial Standard Operating Procedures (SOPs) to identify bottlenecks, minimize inefficiencies, and prevent potential budget leakages (cost control).</li><li><strong>Audit Readiness & Corporate Tax Support:</strong> Providing full support in fiscal reconciliation and structured document preparation to ensure the company is always ready to face external audit processes without major findings.</li><li><strong>Management Advisory:</strong> Converting raw bookkeeping data into easily understandable analytical management reports, providing strategic guidance for C-Level executives in business expansion.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Education & Professional Licenses</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Accounting Profession (Ak.)</li><li>Bachelor of Economics (S.E.)</li><li>CA (Chartered Accountant) – Indonesian Institute of Accountants (IAI)</li></ul>"
    },
    "wulan": {
        name: "Wulan Nurani, S.Ak., Ak., CA.",
        role: "Partner – Multi-Industry Tax & Accounting Advisory",
        img: "https://lh3.googleusercontent.com/d/1FBooMEtjZ4YolOC5aocuUdzR0e_2staz",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='text-black leading-relaxed mb-8'>Wulan Nurani represents the profile of a modern, agile accountant with high adaptability to the complexities of various business models. Her technical foundation was built through a comprehensive academic trajectory, starting from a Bachelor of Accounting at Universitas MH. Thamrin, Accounting Profession Education (PPAk), to currently pursuing a Master of Accounting (M.Ak) at Universitas Padjadjaran. Wulan's professional career is marked by her ability to manage leadership positions (Leader Accounting & Tax) in five different companies simultaneously, covering high-end property developers, tourism management, and restaurant chains. Previously, she also served as Finance, Accounting & Tax Supervisor at a construction services holding company, and gained strategic experience at a non-governmental organization (Indonesian Sharia Insurance Association). This cross-sectoral understanding allows her to design tailor-made financial and tax strategies matching the unique characteristics of each client's industry.</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Multi-Entity & Holding Company Finance:</strong> Highly experienced in preparing consolidated financial statements, designing intercompany transaction flows, and maintaining group compliance for diverse business lines.</li><li><strong>Tax Compliance & Strategy (Brevet A & B):</strong> As a certified tax expert who also contributed as a Tax Volunteer for KPP Pratama, Wulan is proficient in structuring tax risk mitigation, fiscal burden efficiency, and leading corporate tax compliance in property, hospitality, and construction sectors known for complex tax regulations.</li><li><strong>Cross-Industry Accounting Frameworks:</strong> Possesses deep technical expertise in applying specific accounting standards for Property Developers (Revenue Recognition), Hospitality, F&B, and Non-Profit Organizations.</li><li><strong>Accounting System Implementation:</strong> Holding a Zahir Accounting certification, she is an expert in designing, supervising, and implementing bookkeeping digitalization to accelerate client reporting processes.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Education & Professional Licenses</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Master of Accounting – Universitas Padjadjaran (On-Going)</li><li>Accounting Profession (Ak.) – Universitas Padjadjaran</li><li>Bachelor of Accounting – Universitas MH. Thamrin</li><li>CA (Chartered Accountant) – Indonesian Institute of Accountants</li><li>Tax Brevet A & B</li></ul>"
    },
    "frias": {
        name: "Frias Valentino K.E., S. Ak., Ak., CA.",
        role: "Partner – Internal Control, Fraud Mitigation & Business System Advisory",
        img: "https://lh3.googleusercontent.com/d/1cXoqilJ_ll-siUH36dHg_cmM_btFV28B",
        html: "<h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='text-black leading-relaxed mb-8'>Frias Valentino represents the profile of today's accountant and financial consultant: tactical, analytical, and system-resilience oriented. With prestigious licenses as a Chartered Accountant (CA) and Registered Accountant (Ak.), Frias has built an exceptionally broad career portfolio, assisting more than 30 business entities spanning the Mining, E-Commerce, Manufacturing/Garment, Food & Beverage (F&B), and Non-Profit Organization (NGO) sectors. His experience was forged through crucial roles, ranging from Auditor at a Public Accounting Firm (KAP) handling mining corporate consolidation audits, Internal Control Specialist in the Evermos ecosystem, to founding his own company. This 360-degree perspective enables Frias not only to present standard-compliant reports (PSAK/IFRS) but also to build a governance foundation that is immune to fraud risks (fraud-proof).</p><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Core Competencies</h3><ul class='service-list text-black space-y-3 mb-8'><li><strong>Fraud Management & Investigative Audit:</strong> Possesses sharp instincts and proven methodologies in detecting misstatements or potential fraud, and redesigning SOPs to close financial leakage loopholes.</li><li><strong>Internal Control & System Architecture:</strong> Expert in business flowcharting and implementing internal control systems as well as integrated ERP mentoring tailored to the scale and complexity of client operations.</li><li><strong>Consolidation & Complex Accounting:</strong> Highly experienced in executing audits and restating financial statements for complex business schemes, such as Holding Companies, Joint Operations, and the application of PSAK 111 and Sharia PSAK.</li><li><strong>Financial Forecasting & Costing:</strong> Converting bookkeeping data into business projections (forecasting analysis) using liquidity and profitability models, essential for startup and manufacturing business models.</li></ul><h3 class='text-xl font-bold text-black mb-3 border-l-4 border-brand-primary pl-3'>Key Experience & Track Record</h3><ul class='list-disc list-outside text-black space-y-2 ml-5'><li>Founder & Director – PT PembukuanQ Sukses Indonesia</li><li>Internal Control Specialist – Evermos Group</li><li>Auditor – KAP Titus Haryanto dan Mayhotraja</li><li>System Accountant (ERP Implementation) – PT Siven Teknologi Informasi</li><li>Lecturer Assistant (Advanced Accounting) – Universitas Widyatama</li></ul>"
    }
};

/* ============================================================================
 * MODUL 2: ROUTER & NAVIGASI PENGATUR HALAMAN
 * Logika untuk menampilkan dan menyembunyikan div halaman.
 * Jika Anda membuat halaman/div baru di HTML, daftarkan ID-nya di array 'allPages'.
 * ============================================================================ */
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const partnerId = urlParams.get('id');
    const isBloggerPage = window.location.pathname !== '/' && window.location.pathname !== '/index.html';

    if (page) {
        if (page === 'partner-detail-view' && partnerId) {
            showPartnerProfile(partnerId);
        } else {
            showPage(page, false);
        }
    } else if (isBloggerPage) {
        showBloggerNativeContent();
    } else {
        showPage('home', false);
    }
    toggleAdminUI();
});

window.addEventListener('popstate', function(event) {
    window.location.reload();
});

function showBloggerNativeContent() {
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    const bloggerContent = document.getElementById('main-blogger-content');
    if (bloggerContent) bloggerContent.classList.remove('hidden');
}

function showPage(pageId, addToHistory = true, partnerId = null) {
    // DAFTARKAN SEMUA ID HALAMAN STATIS ANDA DI SINI
    const allPages = [
        'home-view', 'company-profile', 'partner-detail-view', 'career-view', 'rfp-view',
        'service-pembukuan', 'service-pajak', 'service-internal-control', 'service-manajemen-keuangan',
        'industry-financial', 'industry-tech-ecommerce', 'industry-manufacturing', 'industry-real-estate',
        'industry-retail', 'industry-fnb', 'industry-services', 'industry-garment', 'industry-mining',
        'industry-healthcare', 'industry-education-ngo', 'industry-holding', 'industry-agriculture',
        'industry-entertainment'
    ];

    let targetId = pageId;
    if (pageId === 'home') targetId = 'home-view';
    if (!allPages.includes(targetId)) targetId = 'home-view';

    // Sembunyikan semua halaman statis dan halaman dinamis (Blogger)
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    const bloggerContent = document.getElementById('main-blogger-content');
    if (bloggerContent) bloggerContent.classList.add('hidden');

    // Tampilkan halaman yang dituju
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.remove('hidden');

    // Trigger map jika ke halaman home
    if(targetId === 'home-view' && typeof google !== 'undefined' && google.visualization) {
        setTimeout(fetchAndDrawMap, 100);
    }

    window.scrollTo(0,0);

    // Update URL bar
    if (addToHistory) {
        const url = new URL(window.location);
        if (targetId === 'home-view') {
            url.searchParams.delete('page');
            url.searchParams.delete('id');
        } else {
            url.searchParams.set('page', pageId);
            if (partnerId) url.searchParams.set('id', partnerId);
            else url.searchParams.delete('id');
        }
        if (url.href !== window.location.href) {
            window.history.pushState({ page: pageId, id: partnerId }, '', url);
        }
    }
}

function showPartnerProfile(id) {
    const data = partnerInfoData[id];
    if (!data) return;
    document.getElementById('pd-img').src = data.img;
    document.getElementById('pd-name').innerText = data.name;
    document.getElementById('pd-role').innerText = data.role;
    document.getElementById('pd-content').innerHTML = data.html;
    showPage('partner-detail-view', true, id);
    if(isAdmin) toggleAdminUI();
}

function generateRfpQrCode() { Swal.fire({ title: 'RFP QR Code', imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(window.location.origin + window.location.pathname + '?page=rfp-view'), imageWidth: 250, confirmButtonColor: '#E35336' }); }
function generateCurrentUrlQrCode() { Swal.fire({ title: 'Profile QR', imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(window.location.href), imageWidth: 250, confirmButtonColor: '#E35336' }); }


/* ============================================================================
 * MODUL 3: GOOGLE CHARTS & MAPS
 * Menarik data dari Google Sheets untuk ditampilkan di Beranda
 * ============================================================================ */
if (typeof google !== 'undefined') {
    google.charts.load('current', {'packages':['geochart', 'treemap']});
    google.charts.setOnLoadCallback(fetchAndDrawMap);
}

function mapProvinsiToISO(provName) {
    if(!provName) return null;
    provName = provName.toString().toLowerCase();
    if (provName.includes("aceh")) return "ID-AC"; if (provName.includes("bali")) return "ID-BA";
    if (provName.includes("bangka") || provName.includes("belitung")) return "ID-BB"; if (provName.includes("banten")) return "ID-BT";
    if (provName.includes("bengkulu")) return "ID-BE"; if (provName.includes("jakarta") || provName.includes("dki")) return "ID-JK";
    if (provName.includes("jambi")) return "ID-JA"; if (provName.includes("jawa barat") || provName.includes("jabar")) return "ID-JB";
    if (provName.includes("jawa tengah") || provName.includes("jateng")) return "ID-JT"; if (provName.includes("jawa timur") || provName.includes("jatim")) return "ID-JI";
    if (provName.includes("yogyakarta") || provName.includes("diy") || provName.includes("jogja")) return "ID-YO";
    if (provName.includes("kalimantan barat") || provName.includes("kalbar")) return "ID-KB"; if (provName.includes("kalimantan selatan") || provName.includes("kalsel")) return "ID-KS";
    if (provName.includes("kalimantan tengah") || provName.includes("kalteng")) return "ID-KT"; if (provName.includes("kalimantan timur") || provName.includes("kaltim")) return "ID-KI";
    if (provName.includes("kalimantan utara") || provName.includes("kaltara")) return "ID-KU"; if (provName.includes("kepulauan riau") || provName.includes("kepri")) return "ID-KR";
    if (provName.includes("riau")) return "ID-RI"; if (provName.includes("lampung")) return "ID-LA";
    if (provName.includes("maluku utara")) return "ID-MU"; if (provName.includes("maluku")) return "ID-MA";
    if (provName.includes("nusa tenggara barat") || provName.includes("ntb")) return "ID-NB"; if (provName.includes("nusa tenggara timur") || provName.includes("ntt")) return "ID-NT";
    if (provName.includes("papua barat daya")) return "ID-PD"; if (provName.includes("papua barat")) return "ID-PB";
    if (provName.includes("papua pegunungan")) return "ID-PE"; if (provName.includes("papua selatan")) return "ID-PS";
    if (provName.includes("papua tengah")) return "ID-PT"; if (provName.includes("papua")) return "ID-PA";
    if (provName.includes("sulawesi barat") || provName.includes("sulbar")) return "ID-SR"; if (provName.includes("sulawesi selatan") || provName.includes("sulsel")) return "ID-SN";
    if (provName.includes("sulawesi tengah") || provName.includes("sulteng")) return "ID-ST"; if (provName.includes("sulawesi tenggara") || provName.includes("sultra")) return "ID-SG";
    if (provName.includes("sulawesi utara") || provName.includes("sulut")) return "ID-SA"; if (provName.includes("gorontalo")) return "ID-GO";
    if (provName.includes("sumatera barat") || provName.includes("sumbar")) return "ID-SB"; if (provName.includes("sumatera selatan") || provName.includes("sumsel")) return "ID-SS";
    if (provName.includes("sumatera utara") || provName.includes("sumut")) return "ID-SU"; return null;
}

function translateIndustry(indNameRaw) {
    if(!indNameRaw) return 'Other Industries';
    let lower = indNameRaw.toString().toLowerCase().trim();
    if(lower === 'regulator keuangan' || lower === 'financial regulator') return 'Financial Regulators';
    if(lower === 'pendidikan' || lower === 'education') return 'Education';
    if(lower === 'asuransi' || lower === 'insurance') return 'Insurance';
    if(lower === 'asuransi bumn' || lower === 'state-owned enterprise insurance') return 'SOE Insurance';
    if(lower === 'perdagangan/it' || lower === 'trade/it') return 'Trade & IT';
    if(lower === 'manufaktur' || lower === 'manufacturing') return 'Manufacturing';
    if(lower === 'perbankan' || lower === 'banking') return 'Banking';
    if(lower === 'alat berat' || lower === 'heavy equipment') return 'Heavy Equipment';
    if(lower === 'distributor pompa' || lower === 'pump distributor') return 'Pump Distributor';
    if(lower === 'lembaga zakat' || lower === 'zakat institution') return 'Zakat & Charity';
    if(lower === 'distributor cat' || lower === 'paint distributor') return 'Paint Distributor';
    if(lower === 'general supplier') return 'General Supplier';
    if(lower === 'infrastruktur/anak bumn' || lower === 'infrastructure/state-owned enterprises' || lower === 'infrastruktur bumn' || lower === 'state-owned enterprise infrastructure') return 'Infrastructure & SOE';
    if(lower === 'retail') return 'Retail';
    if(lower === 'f&b / hospitality' || lower === 'food and beverage' || lower === 'f&b' || lower === 'fnb' || lower === 'restaurant' || lower === 'hotel / villa') return 'Food & Beverage';
    if(lower === 'services / procurement & construction' || lower === 'construction services / hotel / fnb holding') return 'Construction & Procurement';
    if(lower === 'creative services') return 'Creative Services';
    if(lower === 'education / ngo' || lower === 'ngo' || lower === 'non-governmental organizations' || lower === 'lembaga non pemerintah') return 'NGO & Foundations';
    if(lower === 'developer properti' || lower === 'property developer') return 'Property Developer';
    if(lower === 'company jasa' || lower === 'service company') return 'Service Providers';
    if(lower === 'pemerintahan / pajak' || lower === 'government / tax') return 'Government & Tax';
    if(lower === 'konsultan keuangan & akuntansi' || lower === 'financial & accounting consultant') return 'Financial Consultants';
    if(lower === 'entertainment') return 'Entertainment';
    if(lower === 'fashion') return 'Fashion';
    if(lower === 'ecommerce') return 'E-commerce';
    if(lower === 'machine shop') return 'Machine Shop';
    if(lower === 'commodity') return 'Commodities';
    if(lower === 'konveksi' || lower === 'garmen' || lower === 'garments' || lower === 'apparel manufacturing') return 'Garment & Apparel';
    if(lower === 'bumdes' || lower === 'village-owned enterprises') return 'Village Enterprises (BUMDES)';
    if(lower === 'mining' || lower === 'pertambangan') return 'Mining & Resources';
    if(lower === 'gift') return 'Gift & Novelty';
    if(lower === 'koperasi' || lower === 'cooperative') return 'Cooperatives';
    if(lower === 'klinik kesehatan' || lower === 'health clinic') return 'Healthcare Clinics';
    if(lower === 'holding' || lower === 'holding jasa konstruksi / hotel / fnb') return 'Holding Companies';
    if(lower === 'agency') return 'Agencies';
    if(lower === 'farm') return 'Agriculture & Farming';
    if(lower === 'kantor akuntan publik' || lower === 'public accounting firm') return 'Public Accounting Firms';
    if(lower === 'teknologi informasi' || lower === 'information technology') return 'Information Technology';
    if(lower === 'peralatan medis' || lower === 'medical equipment') return 'Medical Equipment';
    return indNameRaw.toString().replace(/\b\w/g, l => l.toUpperCase());
}

async function fetchAndDrawMap() {
    const mapContainer = document.getElementById('regions_div');
    const treeContainer = document.getElementById('industry_treemap');
    if (!mapContainer || !treeContainer) return;

    const url = 'https://docs.google.com/spreadsheets/d/1LyOMXw6yn2AI_5s6OnUDiYZ-CYAkyyS9Rt0yPXpa1QA/gviz/tq?tqx=out:json&sheet=db';
    try {
        const res = await fetch(url);
        const text = await res.text();
        const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonString);

        const provIdx = 2; const indIdx = 4; 
        let totalCompanies = 0; let provData = {}; let industryData = {};

        data.table.rows.forEach(row => {
            if(!row || !row.c) return;
            let provCell = row.c[provIdx];
            if (provCell && provCell.v) {
                totalCompanies++;
                let provName = provCell.v.toString().trim();
                let isoCode = mapProvinsiToISO(provName);
                if(isoCode) provData[isoCode] = (provData[isoCode] || 0) + 1;
                
                let indCell = row.c[indIdx];
                let indNameRaw = (indCell && indCell.v) ? indCell.v.toString().trim() : '';
                if (indNameRaw !== '') {
                    let indNameEnglish = translateIndustry(indNameRaw);
                    industryData[indNameEnglish] = (industryData[indNameEnglish] || 0) + 1;
                }
            }
        });

        const totalEl = document.getElementById('stat-total-companies');
        if(totalEl) totalEl.innerText = totalCompanies;

        var mapTable = new google.visualization.DataTable();
        mapTable.addColumn('string', 'Province'); mapTable.addColumn('number', 'Clients');
        for (let iso in provData) { mapTable.addRow([iso, provData[iso]]); }

        var mapOptions = { region: 'ID', resolution: 'provinces', colorAxis: {colors: ['#fca5a5', '#E35336']}, backgroundColor: 'transparent', datalessRegionColor: '#e5e7eb', defaultColor: '#e5e7eb', tooltip: { trigger: 'focus' }, legend: 'none' };
        new google.visualization.GeoChart(mapContainer).draw(mapTable, mapOptions);

        var treeTable = new google.visualization.DataTable();
        treeTable.addColumn('string', 'Industry'); treeTable.addColumn('string', 'Parent'); treeTable.addColumn('number', 'Size'); treeTable.addColumn('number', 'Color');
        treeTable.addRow(['Industries', null, 0, 0]);
        for (let ind in industryData) { treeTable.addRow([ind, 'Industries', industryData[ind], industryData[ind]]); }

        var treeOptions = { minColor: '#ffbaba', midColor: '#E35336', maxColor: '#991b1b', headerHeight: 0, fontColor: '#ffffff', showScale: false, generateTooltip: showFullTooltip };
        new google.visualization.TreeMap(treeContainer).draw(treeTable, treeOptions);

        function showFullTooltip(row, size, value) {
            return '<div style="background:#fff;padding:10px;border:1px solid #e5e7eb;border-radius:4px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);">' +
                   '<span style="font-family:Roboto;font-weight:bold;color:#000;">' + treeTable.getValue(row, 0) + '</span><br>' +
                   '<span style="font-family:Roboto;color:#6b7280;font-size:12px;">Total Clients: ' + size + '</span></div>';
        }
    } catch(e) {
        console.error('Error fetching map data:', e);
        mapContainer.innerHTML = '<div class="flex h-full items-center justify-center p-4 text-center text-red-500 font-medium border border-red-200 rounded bg-red-50">Data Failed to Load. Ensure Google Sheet is set to "Anyone with the link can view".</div>';
        treeContainer.innerHTML = '<div class="flex h-full items-center justify-center p-4 text-center text-red-500 font-medium">Failed to load industry data.</div>';
    }
}


/* ============================================================================
 * MODUL 4: FORM HANDLING (RFP & REKRUTMEN)
 * Logika format angka dan pengiriman formulir ke Google Sheets.
 * ============================================================================ */
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


/* ============================================================================
 * MODUL 5: ADMIN SYSTEM
 * ============================================================================ */
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
