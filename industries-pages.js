const industriesHTML = `
<!-- INDUSTRY: FINANCIAL SERVICES -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-financial'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Financial Services' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Financial Services & Regulators</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>The financial sector, encompassing banks, insurance companies, cooperatives, and regulators, faces unparalleled scrutiny. Strict regulatory compliance (OJK/BI).</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: TECH & E-COMMERCE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-tech-ecommerce'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Tech Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Tech & E-Commerce</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Technology companies and E-commerce platforms operate at breakneck speeds. The massive volume of micro-transactions creates a nightmare for payment gateway reconciliation.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: MANUFACTURING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-manufacturing'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Manufacturing' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Manufacturing & Equipment</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Factories, machine shops, and heavy equipment distributors operate with massive, capital-intensive inventories.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: REAL ESTATE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-real-estate'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Real Estate' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1541888086925-920a0eb47134?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Real Estate & Infrastructure</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Property developers and SOE infrastructure subsidiaries deal with multi-year projects that make standard accounting impossible.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: RETAIL -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-retail'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Retail Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Retail & Trading</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>For fashion brands, commodity traders, and general suppliers, inventory is cash. The biggest threat is shrinkage (loss/theft).</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: FNB -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-fnb'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='F&B Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Hospitality & F&B</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>The Food & Beverage and Hospitality sectors face intense competition and extremely tight margins.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: SERVICES -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-services'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Professional Services' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Professional Services</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Creative agencies, consulting firms, and general service providers do not sell physical goods. Their primary asset is time and expertise.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: GARMENT -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-garment'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Garment Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Garment & Apparel</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>The garment and apparel manufacturing industry is highly labor-intensive and deadline-driven.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: MINING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-mining'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Mining Industry' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Mining & Resources</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>The mining and natural resource sectors demand monumental capital expenditure (Capex) before generating a single dollar.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: HEALTHCARE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-healthcare'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Healthcare' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Healthcare & Clinics</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Complex doctor/therapist commission schemes, medical supply expiry tracking, and insurance claims.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: NGO -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-education-ngo'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='NGO' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>NGOs & Public Sector</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Non-Profit Organizations, Educational institutions, and community enterprises do not aim for commercial profit but face incredibly strict reporting standards.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: HOLDING -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-holding'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Holding Company' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Corporate Holding</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Holding companies managing portfolios across Construction, Hotels, F&B, and other sectors face extreme consolidation complexity.</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: AGRICULTURE -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-agriculture'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Agriculture' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Agriculture & Farming</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>Farming and agriculture businesses face biological and seasonal risks. Accounting for biological assets (PSAK 69).</p>
        </div>
    </div>
</div>

<!-- INDUSTRY: ENTERTAINMENT -->
<div class='page-section hidden bg-white min-h-screen pb-20' id='industry-entertainment'>
    <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img alt='Entertainment' class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
        <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
        <div class='relative z-10 text-center px-4'>
            <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>Media & Entertainment</h1>
        </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
        <div class='bg-white border border-gray-200 p-8 shadow-xl rounded-lg'>
            <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
            <p class='text-black leading-relaxed'>The entertainment and media industry thrives on events and IP. The accounting challenge is managing highly variable revenue streams.</p>
        </div>
    </div>
</div>
`;
document.getElementById('dynamic-pages-container').insertAdjacentHTML('beforeend', industriesHTML);
