const servicesHTML = `
<!-- SERVICE: BOOKKEEPING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-pembukuan'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Accounting' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Bookkeeping (Accounting)</h1>
            <p class='text-xl text-black'>Precise Financial Recording for the Right Business Decisions.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Services</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Bookkeeping</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
                    <p class='text-black leading-relaxed'>Our Bookkeeping services are designed to free you from the complexities of daily financial administration. We don't just record numbers; we ensure every business transaction is documented neatly, accurately, and in accordance with general accounting principles.</p>
                    <p class='text-black leading-relaxed'>With proper bookkeeping, you will have full visibility over your company's cash flow, profitability, and asset position. The reports we provide are ready for management analysis, tax reporting, or presentations to investors.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>What We Do?</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li>Daily transaction journal recording (Cash In, Cash Out, Purchases, Sales).</li>
                        <li>Monthly Bank Reconciliation to ensure data accuracy.</li>
                        <li>General Ledger Preparation.</li>
                        <li>Accounts Payable and Receivable Management (AP/AR Aging Report).</li>
                        <li>Preparation of Monthly &amp; Annual Financial Statements (Income Statement, Balance Sheet, Cash Flow).</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Standards &amp; Quality</h3>
                    <p class='text-sm text-black mb-6'>We work with rigorous methodologies to ensure compliance and accuracy.</p>
                    <div class='space-y-4'>
                        <div class='flex items-start'><i class='fas fa-book text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>PSAK / IFRS</h4><p class='text-xs text-gray-600'>Compliance with Financial Accounting Standards applicable globally and locally.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-check-double text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Double-Entry System</h4><p class='text-xs text-gray-600'>Double-entry bookkeeping system to minimize errors.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-lock text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Data Confidentiality</h4><p class='text-xs text-gray-600'>Complete guarantee of client financial data confidentiality.</p></div></div>
                    </div>
                    <div class='mt-8 pt-6 border-t border-gray-200'>
                        <a class='block w-full bg-brand-primary text-white rounded font-bold text-center py-3 hover:bg-black transition' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SERVICE: PAJAK -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-pajak'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Tax Services' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224154-26032ffc0d04?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Tax Services</h1>
            <p class='text-xl text-black'>Comprehensive Tax Compliance for Your Business Peace of Mind.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Services</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Tax Services</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
                    <p class='text-black leading-relaxed'>Ever-evolving tax regulations often present a unique challenge for business owners. Our Tax Services are here to ensure that all your tax obligations are managed timely, accurately, and in accordance with the latest applicable regulations, safeguarding you from administrative sanctions or penalties.</p>
                    <p class='text-black leading-relaxed'>We provide comprehensive management ranging from the calculation, payment, to the reporting of various types of corporate and individual taxes professionally.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>Our Tax Coverage</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Value Added Tax (VAT):</strong> Calculation of Input/Output VAT and Periodic VAT Return Reporting.</li>
                        <li><strong>Income Tax / Withholding Tax (WHT):</strong> Management of Income Tax Article 21, 22, 23, 24, 25, and 28/29.</li>
                        <li><strong>Tax Document Administration:</strong> Preparation of Withholding Tax Slips and issuance of Tax Invoices.</li>
                        <li><strong>Annual Tax Returns:</strong> Preparation and reporting of Annual Taxes for both Corporate and Individual taxpayers.</li>
                        <li><strong>Local Taxes &amp; Other Tax Objects:</strong> Processing of PBJT (Specific Goods and Services Tax) and other relevant tax obligations tailored to your industry type.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Service Excellence</h3>
                    <p class='text-sm text-black mb-6'>The right solution to minimize your tax risks.</p>
                    <div class='space-y-4'>
                        <div class='flex items-start'><i class='fas fa-shield-alt text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Tax Compliance</h4><p class='text-xs text-gray-600'>Ensuring 100% tax compliance based on the latest Tax Laws.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-clock text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Timely Delivery</h4><p class='text-xs text-gray-600'>Always on-time tax reporting and payment to avoid penalties.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-lightbulb text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Tax Planning</h4><p class='text-xs text-gray-600'>Legal tax planning strategies to optimize the corporate tax burden.</p></div></div>
                    </div>
                    <div class='mt-8 pt-6 border-t border-gray-200'>
                        <a class='block w-full bg-brand-primary text-white rounded font-bold text-center py-3 hover:bg-black transition' href='https://wa.me/6289671312942' target='_blank'>Tax Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SERVICE: INTERNAL CONTROL -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-internal-control'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Internal Control' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Internal Control</h1>
            <p class='text-xl text-black'>Secure Your Business Assets with a Robust Control System.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Services</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Internal Control</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
                    <p class='text-black leading-relaxed'>Growing businesses often face risks of operational leaks, inefficiencies, or even internal fraud. Our Internal Control services aim to create "safeguards" that protect your company's assets without hindering operational speed.</p>
                    <p class='text-black leading-relaxed'>We perform in-depth diagnostics of your workflow, identify weak points, and design practical yet rigorous Standard Operating Procedures (SOPs) tailored for implementation.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>Our Focus Areas</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li>Operational audits and business risk evaluation.</li>
                        <li>SOP Design &amp; Implementation (Finance, Procurement, Inventory, Sales).</li>
                        <li>Stock Opname &amp; Asset Tagging Management.</li>
                        <li>Fraud prevention and data discrepancy investigations.</li>
                        <li>Workflow optimization for cost efficiency.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Framework</h3>
                    <p class='text-sm text-black mb-6'>Systematic risk-based approach.</p>
                    <div class='space-y-4'>
                        <div class='flex items-start'><i class='fas fa-shield-alt text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>COSO Framework</h4><p class='text-xs text-gray-600'>Adopting the Committee of Sponsoring Organizations principles for internal controls.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-search-dollar text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Risk-Based Audit</h4><p class='text-xs text-gray-600'>Focusing on areas with the highest financial risks.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-file-contract text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Compliance</h4><p class='text-xs text-gray-600'>Ensuring compliance with corporate and government regulations.</p></div></div>
                    </div>
                    <div class='mt-8 pt-6 border-t border-gray-200'>
                        <a class='block w-full bg-brand-primary text-white rounded font-bold text-center py-3 hover:bg-black transition' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SERVICE: FINANCIAL MANAGEMENT -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='service-manajemen-keuangan'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Financial Management' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Financial Management</h1>
            <p class='text-xl text-black'>Financial Strategies for Sustainable Growth.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Services</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Financial Management</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
                    <p class='text-black leading-relaxed'>Accounting data is just a collection of numbers if it isn't analyzed. Our Financial Management services translate these numbers into strategic insights. We help Business Owners plan the future, not just record the past.</p>
                    <p class='text-black leading-relaxed'>From cash flow management ensuring uninterrupted operations to realistic annual budgeting for expansion, we act as your strategic partner (virtual CFO).</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>Strategic Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li>Cash Flow Management &amp; Forecasting.</li>
                        <li>Annual Budgeting.</li>
                        <li>Financial Ratio Analysis (Liquidity, Solvency, Profitability).</li>
                        <li>Feasibility Studies for new projects.</li>
                        <li>Cost Reduction Strategies.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Analytical Standards</h3>
                    <p class='text-sm text-black mb-6'>Proven corporate finance methodologies.</p>
                    <div class='space-y-4'>
                        <div class='flex items-start'><i class='fas fa-chart-pie text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Financial Ratio Analysis</h4><p class='text-xs text-gray-600'>Using industry standard ratios to benchmark performance.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-money-bill-wave text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>Cash Flow Modeling</h4><p class='text-xs text-gray-600'>Detailed cash projections to mitigate liquidity risks.</p></div></div>
                        <div class='flex items-start'><i class='fas fa-bullseye text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>KPI Monitoring</h4><p class='text-xs text-gray-600'>Establishing measurable key financial performance indicators.</p></div></div>
                    </div>
                    <div class='mt-8 pt-6 border-t border-gray-200'>
                        <a class='block w-full bg-brand-primary text-white rounded font-bold text-center py-3 hover:bg-black transition' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
document.getElementById('dynamic-pages-container').insertAdjacentHTML('beforeend', servicesHTML);
