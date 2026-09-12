const servicesHTML = `
<!-- SERVICE: BOOKKEEPING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-pembukuan'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Accounting' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Bookkeeping (Accounting)</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
            <p class='text-black leading-relaxed'>Our Bookkeeping services are designed to free you from the complexities of daily financial administration. We don't just record numbers; we ensure every business transaction is documented neatly, accurately, and in accordance with general accounting principles.</p>
        </div>
    </div>
</div>

<!-- SERVICE: PAJAK -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-pajak'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Tax' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224154-26032ffc0d04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Tax Services</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
            <p class='text-black leading-relaxed'>Comprehensive management ranging from the calculation, payment, to the reporting of various types of corporate and individual taxes professionally.</p>
        </div>
    </div>
</div>

<!-- SERVICE: INTERNAL CONTROL -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-internal-control'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Internal Control' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Internal Control</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
            <p class='text-black leading-relaxed'>Growing businesses often face risks of operational leaks, inefficiencies, or even internal fraud. Our Internal Control services aim to create "safeguards".</p>
        </div>
    </div>
</div>

<!-- SERVICE: FINANCIAL MANAGEMENT -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-manajemen-keuangan'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Financial Management' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Financial Management</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
            <p class='text-black leading-relaxed'>From cash flow management ensuring uninterrupted operations to realistic annual budgeting for expansion, we act as your strategic partner.</p>
        </div>
    </div>
</div>
`;
document.getElementById('dynamic-pages-container').insertAdjacentHTML('beforeend', servicesHTML);
