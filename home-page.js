const homeHTML = `
<!-- ==============================================
     1. HOME VIEW
     ============================================== -->
<div class='page-section hidden' id='home-view'>
    <!-- HERO SECTION -->
    <div class='relative bg-white h-[550px] flex items-center'>
        <div class='absolute inset-0 z-0'>
            <img alt='STARLINGS Financial Consulting Office' class='w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        </div>
        <div class='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div class='max-w-3xl border-l-8 border-brand-primary pl-8 py-6 bg-white/80 backdrop-blur-sm rounded-r-lg shadow-sm'>
                <h1 class='text-4xl md:text-6xl font-bold text-black tracking-tight mb-4 uppercase' id='edit-hero-title'>
                    STARLINGS: RELIABLE<br/><span class='text-brand-primary'>ACCOUNTING, TAX & FINANCIAL SOLUTIONS</span>
                </h1>
                <p class='text-xl text-black mb-8 max-w-2xl font-light' id='edit-hero-desc'>
                    STARLINGS is your strategic partner in accounting, internal control, tax, and financial management for sustainable business growth.
                </p>
                <div class='flex flex-col sm:flex-row gap-4'>
                    <a class='inline-block bg-brand-primary text-white font-bold px-8 py-3 rounded hover:bg-black transition text-center shadow-lg' href='https://wa.me/6289671312942' target='_blank'>Free Consultation</a>
                    <button class='inline-block border-2 border-brand-primary text-brand-primary font-bold px-8 py-3 rounded hover:bg-brand-primary hover:text-white transition text-center cursor-pointer' onclick='showPage("rfp-view")'>Request Proposal</button>
                </div>
            </div>
        </div>
    </div>

    <!-- EXPERIENCE DASHBOARD -->
    <section class='py-16 bg-white border-b border-gray-200'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div class='mb-12 text-center'>
                <h2 class='text-3xl font-bold text-black mb-4'>Our National Experience</h2>
                <div class='h-1 w-20 bg-brand-primary rounded mx-auto'></div>
            </div>
            <div class='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
                <div class='lg:col-span-2 bg-gray-50 rounded-lg p-2 border border-gray-200 shadow-sm'>
                    <div id='regions_div' style='width: 100%; height: 400px;'><div class='flex h-full items-center justify-center'><span class='text-gray-500 font-medium'>Loading Map Data...</span></div></div>
                </div>
                <div class='lg:col-span-1 space-y-6 flex flex-col h-full'>
                    <div class='bg-brand-primary rounded-lg p-6 text-white shadow-lg text-center flex flex-col justify-center h-40'>
                        <h3 class='text-lg font-medium opacity-90 mb-2'>Total Companies Served</h3>
                        <div class='text-6xl font-bold' id='stat-total-companies'>-</div>
                    </div>
                    <div class='bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex-grow flex flex-col'>
                        <h3 class='text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2'>Clients by Industry</h3>
                        <div class='flex-grow w-full h-[250px]' id='industry_treemap'><div class='flex h-full items-center justify-center'><span class='text-gray-500 text-sm'>Loading Chart...</span></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA STRIP -->
    <section class='bg-brand-primary py-12'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between'>
            <div class='mb-6 md:mb-0 text-center md:text-left'>
                <h2 class='text-2xl md:text-3xl font-bold text-white'>Ready to streamline your business accounting?</h2>
                <p class='text-white font-medium mt-2'>Submit your Request for Proposal to get started.</p>
            </div>
            <a class='bg-white text-brand-primary px-8 py-3 font-bold rounded shadow-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer' onclick='showPage("rfp-view")'>
                Request Proposal
            </a>
        </div>
    </section>
</div>
`;
document.getElementById('dynamic-pages-container').insertAdjacentHTML('afterbegin', homeHTML);
