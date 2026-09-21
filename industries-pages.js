const industriesHTML = `
<!-- INDUSTRY: FNB -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-fnb'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='F&amp;B Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Hospitality &amp; F&amp;B</h1>
            <p class='text-xl text-black'>Serving Restaurants, Hotels, and Culinary Businesses.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Hospitality &amp; F&amp;B</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The Food &amp; Beverage and Hospitality sectors face intense competition and extremely tight margins. The primary challenges involve preventing <strong>margin leakage</strong> from perishable materials, fluctuating market prices, and risks of theft or discrepancy in daily cash collections.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Daily Food Cost Analysis:</strong> Monitoring COGS per menu item to ensure margins remain healthy and profitable.</li>
                        <li><strong>Strict Inventory SOPs:</strong> Regular stock-taking procedures to detect raw material spoilage and discrepancies.</li>
                        <li><strong>POS &amp; Accounting Integration:</strong> Ensuring every cashier/front-desk transaction is accurately reconciled with the general ledger.</li>
                        <li><strong>Menu Profitability Reporting:</strong> Identifying "Star" vs "Dog" items to optimize your menu offerings.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-utensils text-brand-primary w-5'></i> Food and Beverage (F&amp;B)</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-concierge-bell text-brand-primary w-5'></i> Restaurants &amp; Cafes</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-hotel text-brand-primary w-5'></i> Hotels &amp; Villas</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: GARMENT & APPAREL -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-garment'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Garment Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Garment &amp; Apparel</h1>
            <p class='text-xl text-black'>Managing Labor-Intensive Payrolls and Custom Order Flexibility.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Garment &amp; Apparel</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The garment and apparel manufacturing industry is highly labor-intensive and deadline-driven. Primary challenges include complex piece-rate payroll management for thousands of employees, tracking custom Purchase Orders (PO), and managing fabric waste (scraps). Additionally, late deliveries can result in severe financial penalties from buyers.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Job Order Costing:</strong> Calculating precise production costs per order batch or custom design to determine true profitability.</li>
                        <li><strong>Payroll &amp; HR SOPs:</strong> Integrated payroll systems tied to factory attendance and sewing line productivity.</li>
                        <li><strong>Material Usage Control:</strong> Monitoring fabric waste and reconciling Purchase Orders vs Invoices strictly.</li>
                        <li><strong>Project Cash Flow:</strong> Planning cash flows tailored to buyer payment terms (e.g., LC/TT) to ensure smooth pre-shipment operations.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-tshirt text-brand-primary w-5'></i> Garment Industry</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-cut text-brand-primary w-5'></i> Apparel &amp; Garment Production</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-industry text-brand-primary w-5'></i> Apparel Manufacturing</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: TEXTILE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-textile'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Textile Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Textile Industry</h1>
            <p class='text-xl text-black'>Raw Material Control and Mass Production Efficiency.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Textile</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The global textile industry faces volatile pricing pressures on raw materials like cotton and polyester. On the production side, the main challenge is <strong>material efficiency (yield)</strong>. Excessive waste cuts directly into profit margins. Furthermore, managing accounts payable to yarn/fabric suppliers requires mature cash flow strategies.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Production Cost Accounting:</strong> Precise Cost of Goods Sold (COGS) calculations incorporating materials, labor, and factory overhead.</li>
                        <li><strong>Waste Control:</strong> Monitoring the ratio of inputs vs. production outputs to minimize material waste.</li>
                        <li><strong>Working Capital Management:</strong> Strategies for supplier payments vs. customer collections to maintain liquidity.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-scroll text-brand-primary w-5'></i> Textile Manufacturers</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-box text-brand-primary w-5'></i> Fabric Suppliers</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: NGO & EDUCATION -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-education-ngo'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='NGO' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>NGOs &amp; Public Sector</h1>
            <p class='text-xl text-black'>Fund Accountability and Transparency for Donor Trust.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>NGO &amp; Public Sector</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Non-Profit Organizations, Educational institutions, and community enterprises do not aim for commercial profit but face incredibly strict reporting standards. The primary challenge is <strong>Fund Accounting</strong>&#8212;separating restricted funds from specific donors and unrestricted funds. Recording errors can result in a loss of donor trust or legal compliance issues.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Fund Accounting Systems:</strong> Clear segregation of records based on funding sources, government grants, or donor projects.</li>
                        <li><strong>Grant Compliance SOPs:</strong> Ensuring fund usage complies with MoUs, charity regulations, and strict grant agreements.</li>
                        <li><strong>Budget Realization Reporting:</strong> Presenting transparent Budget vs. Actual comparison reports for stakeholder and public accountability.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-hand-holding-heart text-brand-primary w-5'></i> NGOs &amp; Foundations</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-graduation-cap text-brand-primary w-5'></i> Education Institutions</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-mosque text-brand-primary w-5'></i> Charitable &amp; Zakat Institutions</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-seedling text-brand-primary w-5'></i> Village-Owned Enterprises (BUMDES)</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: BEAUTY & WELLNESS -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-healthcare'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Beauty Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Healthcare, Beauty &amp; Wellness</h1>
            <p class='text-xl text-black'>Managing Thousands of SKUs and Complex Commission Schemes.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Healthcare &amp; Wellness</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Beauty clinics and healthcare businesses have unique characteristics: <strong>Huge SKU volumes</strong> (creams, serums, medical tools) and strict expiration dates. Additionally, this business model heavily relies on human resource incentives. Miscalculating doctor, therapist, and beauty consultant commissions is often a source of disputes and cash leakage.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Per-SKU Inventory System:</strong> Detailed tracking of incoming and outgoing stock down to the smallest unit (gr/ml) for cabin usage.</li>
                        <li><strong>Automated Commission Audits:</strong> Verification of commission calculations based on action performance vs. product sales.</li>
                        <li><strong>Expiration Control:</strong> Early warning systems for stock approaching expiration dates to push for promotions.</li>
                        <li><strong>Marketing Budgeting:</strong> ROI analysis of advertising costs vs. new patient revenue.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-stethoscope text-brand-primary w-5'></i> Clinics &amp; Health Facilities</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-spa text-brand-primary w-5'></i> Beauty Clinics &amp; Salons</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-prescription-bottle-alt text-brand-primary w-5'></i> Skincare Retailers</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: FINANCIAL SERVICES -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-financial'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Financial Services' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Financial Services &amp; Regulators</h1>
            <p class='text-xl text-black'>Strict Compliance and Complex Risk Management.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Financial Services</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The financial sector, encompassing banks, insurance companies, cooperatives, and regulators, faces unparalleled scrutiny. The primary challenges are strict regulatory compliance (OJK/BI), managing capital adequacy, and navigating complex market risks without stifling growth.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Regulatory Compliance:</strong> Framework design aligning internal processes with OJK, Bank Indonesia, and Ministry of Cooperatives standards.</li>
                        <li><strong>Audit &amp; Risk Advisory:</strong> Comprehensive internal audit support, fraud vulnerability assessments, and corporate governance (GCG) implementation.</li>
                        <li><strong>Financial Modeling:</strong> Asset-Liability management and capital adequacy forecasting.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-university text-brand-primary w-5'></i> Banking &amp; Insurance</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-landmark text-brand-primary w-5'></i> Financial Regulators</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-users text-brand-primary w-5'></i> Cooperatives</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-chart-line text-brand-primary w-5'></i> Accounting Firms</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: TECH & E-COMMERCE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-tech-ecommerce'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Tech Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Tech &amp; E-Commerce</h1>
            <p class='text-xl text-black'>High Transaction Volumes and Rapid Scaling Strategies.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Tech &amp; E-Commerce</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Technology companies and E-commerce platforms operate at breakneck speeds. The massive volume of micro-transactions creates a nightmare for payment gateway reconciliation. Furthermore, tech startups face unique challenges in runway calculation, cash-burn management, and investor reporting.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Revenue Reconciliation:</strong> API-integrated accounting strategies to match digital payments (e-wallets, bank transfers) with actual sales data.</li>
                        <li><strong>Startup Financial Modeling:</strong> Detailed runway forecasting and unit economics (CAC vs LTV) analysis.</li>
                        <li><strong>Investor Reporting:</strong> Preparing clean, IFRS-compliant financial decks ready for venture capital due diligence.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-laptop-code text-brand-primary w-5'></i> Information Technology</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-shopping-bag text-brand-primary w-5'></i> E-Commerce Platforms</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-network-wired text-brand-primary w-5'></i> Trade &amp; IT Services</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: MANUFACTURING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-manufacturing'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Manufacturing' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Manufacturing &amp; Equipment</h1>
            <p class='text-xl text-black'>COGS Optimization and Inventory Valuation.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Manufacturing</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Factories, machine shops, and heavy equipment distributors operate with massive, capital-intensive inventories. The core accounting challenge lies in tracking the exact Cost of Goods Sold (COGS) through complex production stages (raw materials, work-in-progress, finished goods) while managing equipment depreciation.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Standard Costing Systems:</strong> Establishing accurate Bill of Materials (BOM) accounting to identify variance and production inefficiencies.</li>
                        <li><strong>Inventory &amp; Asset Valuation:</strong> Rigorous stock opname procedures and fixed asset tagging for heavy machinery.</li>
                        <li><strong>Supply Chain Financial Control:</strong> Streamlining accounts payable to raw material vendors and managing accounts receivable from distributors.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-industry text-brand-primary w-5'></i> Manufacturing Plants</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-truck-moving text-brand-primary w-5'></i> Heavy Equipment</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-cogs text-brand-primary w-5'></i> Machine Shops &amp; Distributors</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: REAL ESTATE & INFRASTRUCTURE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-real-estate'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Real Estate' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1541888086925-920a0eb47134?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Real Estate &amp; Infrastructure</h1>
            <p class='text-xl text-black'>Long-Term Project Accounting and Capital Management.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Real Estate &amp; Infra</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Property developers and SOE infrastructure subsidiaries deal with multi-year projects that make standard accounting impossible. Recognizing revenue correctly according to PSAK 115, managing contractor retentions, and surviving capital-intensive cash flow droughts are daily struggles.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Project Accounting:</strong> Implementing percentage-of-completion methods for accurate revenue recognition.</li>
                        <li><strong>Cash Flow Modeling:</strong> Formulating precise liquidity forecasts to prevent project stalling due to payment delays.</li>
                        <li><strong>Tax Strategy:</strong> Handling Final Income Tax (PPh Final) for construction services and property sales efficiently.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-building text-brand-primary w-5'></i> Property Developers</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-hard-hat text-brand-primary w-5'></i> Construction Services</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-road text-brand-primary w-5'></i> SOE Infrastructure</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: RETAIL -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-retail'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Retail Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Retail &amp; Trading</h1>
            <p class='text-xl text-black'>Inventory Synchronization and Multi-Branch Reporting.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Retail &amp; Trading</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>For fashion brands, commodity traders, and general suppliers, inventory is cash. The biggest threat is shrinkage (loss/theft), discrepancies between Point of Sale (POS) and warehouse systems, and managing working capital while awaiting payments from B2B clients.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>System Integration:</strong> Ensuring POS, inventory management, and accounting systems speak the same language.</li>
                        <li><strong>Shrinkage Mitigation:</strong> Designing strict warehouse-to-store transfer SOPs and regular cycle counts.</li>
                        <li><strong>AR/AP Management:</strong> Tight control over B2B accounts receivable to ensure retail liquidity.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-store text-brand-primary w-5'></i> Retail &amp; Fashion</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-boxes text-brand-primary w-5'></i> General Suppliers</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-gift text-brand-primary w-5'></i> Gift &amp; Commodities</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
  
<!-- INDUSTRY: SERVICES -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-services'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Professional Services' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Professional Services</h1>
            <p class='text-xl text-black'>Project-Based Billing and Profitability Tracking.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Professional Services</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Creative agencies, consulting firms, and general service providers do not sell physical goods. Their primary asset is time and expertise. The challenge is accurately tracking project profitability, managing variable retainer incomes, and minimizing unbillable hours.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Project Profitability Analysis:</strong> Allocating overhead and human resource costs to specific projects to find true margins.</li>
                        <li><strong>Invoicing Systems:</strong> Streamlining the billing process to reduce Accounts Receivable aging.</li>
                        <li><strong>Tax Advisory:</strong> Managing Withholding Tax (PPh 23/21) specifically related to professional service fees.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-bullhorn text-brand-primary w-5'></i> Creative Agencies</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-briefcase text-brand-primary w-5'></i> Consulting Firms</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-cogs text-brand-primary w-5'></i> Service Providers</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: MINING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-mining'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Mining Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Mining &amp; Resources</h1>
            <p class='text-xl text-black'>Navigating Capex, Depletion, and Environmental Compliance.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Mining &amp; Resources</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The mining and natural resource sectors demand monumental capital expenditure (Capex) before generating a single dollar. Managing depletion accounting, fluctuating global commodity prices, and stringent government environmental tax provisions require specialized expertise.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Fixed Asset &amp; Depletion Accounting:</strong> Proper capitalization of exploration costs and calculation of resource depletion over time.</li>
                        <li><strong>Supply Chain Financial Tracking:</strong> Monitoring logistics, heavy machinery maintenance costs, and fuel consumption efficiencies.</li>
                        <li><strong>Tax &amp; Royalty Compliance:</strong> Ensuring exact calculation of government non-tax state revenues (PNBP) and corporate taxes.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-mountain text-brand-primary w-5'></i> Mining Corporations</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-oil-can text-brand-primary w-5'></i> Energy &amp; Resources</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: HOLDING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-holding'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Holding Company' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Corporate Holding</h1>
            <p class='text-xl text-black'>Consolidated Financials Across Diverse Subsidiaries.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Corporate Holding</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Holding companies managing portfolios across Construction, Hotels, F&amp;B, and other sectors face extreme consolidation complexity. Managing intercompany transactions, transfer pricing, and generating a unified view of group financial health is a constant hurdle for C-Level executives.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Financial Consolidation:</strong> Eliminating intercompany balances and presenting accurate group-level consolidated financial statements.</li>
                        <li><strong>Group Tax Planning:</strong> Ensuring transfer pricing documentation is compliant and optimizing the overall tax burden of the group.</li>
                        <li><strong>Subsidiary Audits:</strong> Standardizing internal control procedures across all subsidiary entities to prevent decentralized fraud.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-sitemap text-brand-primary w-5'></i> Holding Companies</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-globe text-brand-primary w-5'></i> Multi-Industry Groups</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: AGRICULTURE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-agriculture'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Agriculture' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Agriculture &amp; Farming</h1>
            <p class='text-xl text-black'>Biological Asset Valuation and Seasonal Costing.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Agriculture</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>Farming and agriculture businesses face biological and seasonal risks. Accounting for biological assets (PSAK 69), tracking unpredictable yields due to weather, and managing highly irregular cash flows between planting and harvest seasons are major hurdles.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Biological Asset Accounting:</strong> Implementing fair value accounting for living animals and crops.</li>
                        <li><strong>Harvest Costing:</strong> Analyzing exact yield costs versus market pricing.</li>
                        <li><strong>Seasonal Budgeting:</strong> Ensuring liquidity is maintained during low-income planting seasons.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-tractor text-brand-primary w-5'></i> Farming &amp; Agriculture</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-seedling text-brand-primary w-5'></i> Plantations</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- INDUSTRY: ENTERTAINMENT -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-entertainment'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Entertainment' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80'>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Media &amp; Entertainment</h1>
            <p class='text-xl text-black'>Event-Based Budgeting and Intellectual Property.</p>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
            <div class='text-sm text-gray-500 mb-6'>
                <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>Entertainment</span>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                <div class='md:col-span-2 space-y-6'>
                    <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                    <p class='text-black leading-relaxed'>The entertainment and media industry thrives on events and IP. The accounting challenge is managing highly variable revenue streams, event-specific P&amp;L tracking, and amortizing intangible assets like intellectual property or production rights.</p>
                    <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                    <ul class='service-list text-black space-y-2'>
                        <li><strong>Event P&amp;L Tracking:</strong> Isolating costs and revenues per event to find true profitability.</li>
                        <li><strong>IP &amp; Royalty Accounting:</strong> Accurately tracking royalty payouts and amortizing intellectual property.</li>
                        <li><strong>Vendor Control:</strong> Strict SOPs for managing third-party vendor payments during high-stress production periods.</li>
                    </ul>
                </div>
                <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                    <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                    <ul class='text-black space-y-3 text-sm'>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-film text-brand-primary w-5'></i> Media &amp; Entertainment</li>
                        <li class='border-b border-gray-200 pb-2'><i class='fas fa-music text-brand-primary w-5'></i> Event Organizers</li>
                    </ul>
                    <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

// Memasukkan HTML yang diekstrak ke dalam struktur DOM
document.getElementById('dynamic-pages-container').insertAdjacentHTML('beforeend', industriesHTML);
