// --- 1. DATABASE KONTEN: SERVICES & INDUSTRIES ---
const serviceData = {
    "pembukuan": {
        title: "Bookkeeping (Accounting)", subtitle: "Precise Financial Recording for the Right Business Decisions.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        desc1: "Our Bookkeeping services are designed to free you from the complexities of daily financial administration. We don't just record numbers; we ensure every business transaction is documented neatly, accurately, and in accordance with general accounting principles.",
        desc2: "With proper bookkeeping, you will have full visibility over your company's cash flow, profitability, and asset position. The reports we provide are ready for management analysis, tax reporting, or presentations to investors.",
        listTitle: "What We Do?", list: ["Daily transaction journal recording (Cash In, Cash Out, Purchases, Sales).", "Monthly Bank Reconciliation to ensure data accuracy.", "General Ledger Preparation.", "Accounts Payable and Receivable Management (AP/AR Aging Report).", "Preparation of Monthly & Annual Financial Statements."],
        standards: [{icon: "fas fa-book", title: "PSAK / IFRS", desc: "Compliance with Financial Accounting Standards applicable globally and locally."}, {icon: "fas fa-check-double", title: "Double-Entry System", desc: "Double-entry bookkeeping system to minimize errors."}, {icon: "fas fa-lock", title: "Data Confidentiality", desc: "Complete guarantee of client financial data confidentiality."}]
    },
    "pajak": {
        title: "Tax Services", subtitle: "Comprehensive Tax Compliance for Your Business Peace of Mind.", img: "https://images.unsplash.com/photo-1554224154-26032ffc0d04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        desc1: "Ever-evolving tax regulations often present a unique challenge for business owners. Our Tax Services are here to ensure that all your tax obligations are managed timely, accurately, and in accordance with the latest applicable regulations, safeguarding you from administrative sanctions or penalties.",
        desc2: "We provide comprehensive management ranging from the calculation, payment, to the reporting of various types of corporate and individual taxes professionally.",
        listTitle: "Our Tax Coverage", list: ["Value Added Tax (VAT): Calculation of Input/Output VAT and Periodic VAT Return Reporting.", "Income Tax / Withholding Tax (WHT): Management of Income Tax Article 21, 22, 23, 24, 25, and 28/29.", "Tax Document Administration: Preparation of Withholding Tax Slips and issuance of Tax Invoices.", "Annual Tax Returns: Preparation and reporting of Annual Taxes.", "Local Taxes: Processing of PBJT and other relevant tax obligations."],
        standards: [{icon: "fas fa-shield-alt", title: "Tax Compliance", desc: "Ensuring 100% tax compliance based on the latest Tax Laws."}, {icon: "fas fa-clock", title: "Timely Delivery", desc: "Always on-time tax reporting and payment to avoid penalties."}, {icon: "fas fa-lightbulb", title: "Tax Planning", desc: "Legal tax planning strategies to optimize the corporate tax burden."}]
    },
    "internal-control": {
        title: "Internal Control", subtitle: "Secure Your Business Assets with a Robust Control System.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        desc1: "Growing businesses often face risks of operational leaks, inefficiencies, or even internal fraud. Our Internal Control services aim to create 'safeguards' that protect your company's assets without hindering operational speed.",
        desc2: "We perform in-depth diagnostics of your workflow, identify weak points, and design practical yet rigorous Standard Operating Procedures (SOPs) tailored for implementation.",
        listTitle: "Our Focus Areas", list: ["Operational audits and business risk evaluation.", "SOP Design & Implementation (Finance, Procurement, Inventory, Sales).", "Stock Opname & Asset Tagging Management.", "Fraud prevention and data discrepancy investigations.", "Workflow optimization for cost efficiency."],
        standards: [{icon: "fas fa-shield-alt", title: "COSO Framework", desc: "Adopting the Committee of Sponsoring Organizations principles for internal controls."}, {icon: "fas fa-search-dollar", title: "Risk-Based Audit", desc: "Focusing on areas with the highest financial risks."}, {icon: "fas fa-file-contract", title: "Compliance", desc: "Ensuring compliance with corporate and government regulations."}]
    },
    "manajemen-keuangan": {
        title: "Financial Management", subtitle: "Financial Strategies for Sustainable Growth.", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        desc1: "Accounting data is just a collection of numbers if it isn't analyzed. Our Financial Management services translate these numbers into strategic insights. We help Business Owners plan the future, not just record the past.",
        desc2: "From cash flow management ensuring uninterrupted operations to realistic annual budgeting for expansion, we act as your strategic partner (virtual CFO).",
        listTitle: "Strategic Solutions", list: ["Cash Flow Management & Forecasting.", "Annual Budgeting.", "Financial Ratio Analysis (Liquidity, Solvency, Profitability).", "Feasibility Studies for new projects.", "Cost Reduction Strategies."],
        standards: [{icon: "fas fa-chart-pie", title: "Financial Ratio Analysis", desc: "Using industry standard ratios to benchmark performance."}, {icon: "fas fa-money-bill-wave", title: "Cash Flow Modeling", desc: "Detailed cash projections to mitigate liquidity risks."}, {icon: "fas fa-bullseye", title: "KPI Monitoring", desc: "Establishing measurable key financial performance indicators."}]
    }
};

const industryData = {
    "financial": { title: "Financial Services & Regulators", subtitle: "Strict Compliance and Complex Risk Management.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f", chal: "The financial sector, encompassing banks, insurance companies, cooperatives, and regulators, faces unparalleled scrutiny. The primary challenges are strict regulatory compliance (OJK/BI), managing capital adequacy, and navigating complex market risks.", sol: ["<strong>Regulatory Compliance:</strong> Framework design aligning internal processes with OJK & BI.", "<strong>Audit & Risk Advisory:</strong> Comprehensive internal audit support and GCG implementation.", "<strong>Financial Modeling:</strong> Asset-Liability management and capital adequacy forecasting."], sec: [{icon:"fas fa-university", name:"Banking & Insurance"},{icon:"fas fa-landmark", name:"Financial Regulators"},{icon:"fas fa-users", name:"Cooperatives"},{icon:"fas fa-chart-line", name:"Accounting Firms"}] },
    "tech-ecommerce": { title: "Tech & E-Commerce", subtitle: "High Transaction Volumes and Rapid Scaling Strategies.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", chal: "The massive volume of micro-transactions creates a nightmare for payment gateway reconciliation. Furthermore, tech startups face unique challenges in runway calculation, cash-burn management, and investor reporting.", sol: ["<strong>Revenue Reconciliation:</strong> API-integrated accounting strategies to match digital payments.", "<strong>Startup Financial Modeling:</strong> Detailed runway forecasting and unit economics analysis.", "<strong>Investor Reporting:</strong> Preparing clean, IFRS-compliant financial decks."], sec: [{icon:"fas fa-laptop-code", name:"Information Technology"},{icon:"fas fa-shopping-bag", name:"E-Commerce Platforms"},{icon:"fas fa-network-wired", name:"Trade & IT Services"}] },
    "manufacturing": { title: "Manufacturing & Equipment", subtitle: "COGS Optimization and Inventory Valuation.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", chal: "Factories and distributors operate with massive inventories. The core accounting challenge lies in tracking the exact Cost of Goods Sold (COGS) through complex production stages while managing equipment depreciation.", sol: ["<strong>Standard Costing Systems:</strong> Establishing accurate Bill of Materials (BOM) accounting.", "<strong>Inventory & Asset Valuation:</strong> Rigorous stock opname procedures and fixed asset tagging.", "<strong>Supply Chain Financial Control:</strong> Streamlining accounts payable to vendors."], sec: [{icon:"fas fa-industry", name:"Manufacturing Plants"},{icon:"fas fa-truck-moving", name:"Heavy Equipment"},{icon:"fas fa-cogs", name:"Machine Shops"}] },
    "real-estate": { title: "Real Estate & Infrastructure", subtitle: "Long-Term Project Accounting and Capital Management.", img: "https://images.unsplash.com/photo-1541888086925-920a0eb47134", chal: "Property developers deal with multi-year projects that make standard accounting impossible. Recognizing revenue correctly according to PSAK 115 and surviving capital-intensive cash flow droughts are daily struggles.", sol: ["<strong>Project Accounting:</strong> Percentage-of-completion methods for accurate revenue recognition.", "<strong>Cash Flow Modeling:</strong> Precise liquidity forecasts to prevent project stalling.", "<strong>Tax Strategy:</strong> Handling Final Income Tax (PPh Final) efficiently."], sec: [{icon:"fas fa-building", name:"Property Developers"},{icon:"fas fa-hard-hat", name:"Construction Services"},{icon:"fas fa-road", name:"SOE Infrastructure"}] },
    "retail": { title: "Retail & Trading", subtitle: "Inventory Synchronization and Multi-Branch Reporting.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8", chal: "For fashion brands and traders, inventory is cash. The biggest threat is shrinkage (loss/theft), discrepancies between Point of Sale (POS) and warehouse systems, and managing working capital.", sol: ["<strong>System Integration:</strong> Ensuring POS, inventory, and accounting systems speak the same language.", "<strong>Shrinkage Mitigation:</strong> Strict warehouse-to-store transfer SOPs.", "<strong>AR/AP Management:</strong> Tight control over B2B accounts receivable."], sec: [{icon:"fas fa-store", name:"Retail & Fashion"},{icon:"fas fa-boxes", name:"General Suppliers"},{icon:"fas fa-gift", name:"Gift & Commodities"}] },
    "fnb": { title: "Hospitality & F&B", subtitle: "Serving Restaurants, Hotels, and Culinary Businesses.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", chal: "The Food & Beverage sectors face extremely tight margins. The primary challenges involve preventing margin leakage from perishable materials, and risks of theft or discrepancy in daily cash collections.", sol: ["<strong>Daily Food Cost Analysis:</strong> Monitoring COGS per menu item.", "<strong>Strict Inventory SOPs:</strong> Regular stock-taking procedures.", "<strong>POS Integration:</strong> Ensuring cashier transactions match the ledger.", "<strong>Menu Profitability Reporting:</strong> Identifying 'Star' vs 'Dog' items."], sec: [{icon:"fas fa-utensils", name:"Food and Beverage (F&B)"},{icon:"fas fa-concierge-bell", name:"Restaurants & Cafes"},{icon:"fas fa-hotel", name:"Hotels & Villas"}] },
    "garment": { title: "Garment & Apparel", subtitle: "Managing Labor-Intensive Payrolls and Custom Order Flexibility.", img: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea", chal: "Primary challenges include complex piece-rate payroll management for thousands of employees, tracking custom Purchase Orders (PO), and managing fabric waste (scraps).", sol: ["<strong>Job Order Costing:</strong> Calculating precise production costs per order.", "<strong>Payroll & HR SOPs:</strong> Integrated payroll systems tied to factory attendance.", "<strong>Material Usage Control:</strong> Monitoring fabric waste and reconciling POs."], sec: [{icon:"fas fa-tshirt", name:"Garment Industry"},{icon:"fas fa-cut", name:"Apparel Production"},{icon:"fas fa-industry", name:"Apparel Manufacturing"}] },
    "textile": { title: "Textile Industry", subtitle: "Raw Material Control and Mass Production Efficiency.", img: "https://images.unsplash.com/photo-1524292332709-b33366a7f165", chal: "The global textile industry faces volatile pricing pressures on raw materials. On the production side, the main challenge is material efficiency (yield). Excessive waste cuts directly into profit margins.", sol: ["<strong>Production Cost Accounting:</strong> Precise COGS calculations incorporating materials, labor, and overhead.", "<strong>Waste Control:</strong> Monitoring the ratio of inputs vs. production outputs.", "<strong>Working Capital Management:</strong> Strategies for supplier payments vs. collections."], sec: [{icon:"fas fa-scroll", name:"Textile Manufacturers"},{icon:"fas fa-box", name:"Fabric Suppliers"}] },
    "education-ngo": { title: "NGOs & Public Sector", subtitle: "Fund Accountability and Transparency for Donor Trust.", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433", chal: "The primary challenge is Fund Accounting—separating restricted funds from specific donors and unrestricted funds. Recording errors can result in a loss of donor trust or legal compliance issues.", sol: ["<strong>Fund Accounting Systems:</strong> Clear segregation of records based on funding sources.", "<strong>Grant Compliance SOPs:</strong> Ensuring fund usage complies with donor agreements.", "<strong>Budget Realization Reporting:</strong> Transparent Budget vs. Actual comparison reports."], sec: [{icon:"fas fa-hand-holding-heart", name:"NGOs & Foundations"},{icon:"fas fa-graduation-cap", name:"Education Institutions"},{icon:"fas fa-seedling", name:"Village-Owned Enterprises (BUMDES)"}] },
    "kecantikan": { title: "Beauty & Wellness", subtitle: "Managing Thousands of SKUs and Complex Commission Schemes.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9", chal: "Beauty clinics have huge SKU volumes and strict expiration dates. Miscalculating doctor, therapist, and beauty consultant commissions is often a source of disputes and cash leakage.", sol: ["<strong>Per-SKU Inventory System:</strong> Detailed tracking of stock down to the smallest unit (gr/ml).", "<strong>Automated Commission Audits:</strong> Verification of commission calculations.", "<strong>Expiration Control:</strong> Early warning systems for stock approaching expiration."], sec: [{icon:"fas fa-spa", name:"Beauty Clinics & Salons"},{icon:"fas fa-prescription-bottle-alt", name:"Skincare Retailers"}] },
    "services": { title: "Professional Services", subtitle: "Project-Based Billing and Profitability Tracking.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", chal: "Creative agencies and consulting firms do not sell physical goods. The challenge is accurately tracking project profitability, managing variable retainer incomes, and minimizing unbillable hours.", sol: ["<strong>Project Profitability Analysis:</strong> Allocating overhead costs to specific projects.", "<strong>Invoicing Systems:</strong> Streamlining the billing process to reduce AR aging.", "<strong>Tax Advisory:</strong> Managing Withholding Tax (PPh 23/21) for service fees."], sec: [{icon:"fas fa-bullhorn", name:"Creative Agencies"},{icon:"fas fa-briefcase", name:"Consulting Firms"},{icon:"fas fa-cogs", name:"Service Providers"}] },
    "mining": { title: "Mining & Resources", subtitle: "Navigating Capex, Depletion, and Environmental Compliance.", img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b", chal: "Managing depletion accounting, fluctuating global commodity prices, and stringent government environmental tax provisions require specialized expertise.", sol: ["<strong>Depletion Accounting:</strong> Proper capitalization and calculation of resource depletion.", "<strong>Supply Chain Financial Tracking:</strong> Monitoring logistics and heavy machinery costs.", "<strong>Tax & Royalty Compliance:</strong> Ensuring exact calculation of government non-tax revenues."], sec: [{icon:"fas fa-mountain", name:"Mining Corporations"},{icon:"fas fa-oil-can", name:"Energy & Resources"}] },
    "holding": { title: "Corporate Holding", subtitle: "Consolidated Financials Across Diverse Subsidiaries.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", chal: "Holding companies managing portfolios across various sectors face extreme consolidation complexity, including intercompany transactions and transfer pricing.", sol: ["<strong>Financial Consolidation:</strong> Eliminating intercompany balances.", "<strong>Group Tax Planning:</strong> Ensuring transfer pricing documentation is compliant.", "<strong>Subsidiary Audits:</strong> Standardizing internal control procedures across entities."], sec: [{icon:"fas fa-sitemap", name:"Holding Companies"},{icon:"fas fa-globe", name:"Multi-Industry Groups"}] },
    "agriculture": { title: "Agriculture & Farming", subtitle: "Biological Asset Valuation and Seasonal Costing.", img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae", chal: "Accounting for biological assets (PSAK 69), tracking unpredictable yields due to weather, and managing highly irregular cash flows between planting and harvest seasons.", sol: ["<strong>Biological Asset Accounting:</strong> Implementing fair value accounting for living crops/animals.", "<strong>Harvest Costing:</strong> Analyzing exact yield costs versus market pricing.", "<strong>Seasonal Budgeting:</strong> Maintaining liquidity during planting seasons."], sec: [{icon:"fas fa-tractor", name:"Farming & Agriculture"},{icon:"fas fa-seedling", name:"Plantations"}] },
    "entertainment": { title: "Media & Entertainment", subtitle: "Event-Based Budgeting and Intellectual Property.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819", chal: "The accounting challenge is managing highly variable revenue streams, event-specific P&L tracking, and amortizing intangible assets like intellectual property or production rights.", sol: ["<strong>Event P&L Tracking:</strong> Isolating costs and revenues per event.", "<strong>IP & Royalty Accounting:</strong> Accurately tracking royalty payouts.", "<strong>Vendor Control:</strong> Strict SOPs for managing third-party vendor payments."], sec: [{icon:"fas fa-film", name:"Media & Entertainment"},{icon:"fas fa-music", name:"Event Organizers"}] }
};

const partnerInfoData = {
    "anang": { name: "Dr. Anang Witjaksono...", role: "Partner – Finance, Audit, Risk & Tax Advisory", img: "https://lh3.googleusercontent.com/d/1zQ1FvtPfrQUWJABE40pSBVE4Wzi3M3pT", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='mb-4'>Dr. Anang Witjaksono is an authoritative figure in Indonesia's Finance, Accounting, and Risk Management industries...</p>" },
    "umam": { name: "M. Khaerul Umam...", role: "Partner – Tax & Business Advisory", img: "https://lh3.googleusercontent.com/d/1C8Z_yoJWGNx5OXzdVXYKrsftoAA0Fkzb", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='mb-4'>M. Khaerul Umam represents the modern generation of financial professionals...</p>" },
    "vitaloka": { name: "Vitaloka Kemaladewi Hutagalung...", role: "Partner – Corporate Finance, Risk Management & Tax Dispute", img: "https://lh3.googleusercontent.com/d/1buB6l5TI1JEYUNprywBQ2BfJMZdLV18g", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='mb-4'>Vitaloka Kemaladewi Hutagalung represents a rare blend of a reliable corporate manager and a dynamic entrepreneur...</p>" },
    "seni": { name: "Seni Nafisah Maullina...", role: "Partner – Financial Accounting & Business Advisory", img: "https://lh3.googleusercontent.com/d/1NvCQy7xSGijgGtT-8g7-u9BouGoqIBAs", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='mb-4'>Seni Nafisah Maullina is a highly dedicated accounting practitioner with a solid track record...</p>" },
    "wulan": { name: "Wulan Nurani...", role: "Partner – Multi-Industry Tax & Accounting Advisory", img: "https://lh3.googleusercontent.com/d/1FBooMEtjZ4YolOC5aocuUdzR0e_2staz", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Her</h3><p class='mb-4'>Wulan Nurani represents the profile of a modern, agile accountant with high adaptability...</p>" },
    "frias": { name: "Frias Valentino K.E....", role: "Partner – Internal Control, Fraud Mitigation & Business System Advisory", img: "https://lh3.googleusercontent.com/d/1cXoqilJ_ll-siUH36dHg_cmM_btFV28B", html: "<h3 class='text-xl font-bold mb-3 border-l-4 border-brand-primary pl-3'>About Him</h3><p class='mb-4'>Frias Valentino represents the profile of today's accountant and financial consultant: tactical, analytical, and system-resilience oriented...</p>" }
};

// --- 2. DYNAMIC RENDERING FUNCTIONS ---
function renderDynamicService(id) {
    const data = serviceData[id];
    if(!data) return;
    const stdHtml = data.standards.map(s => `<div class='flex items-start'><i class='${s.icon} text-brand-primary mt-1 mr-3'></i> <div><h4 class='font-bold text-black text-sm'>${s.title}</h4><p class='text-xs text-gray-600'>${s.desc}</p></div></div>`).join('');
    const listHtml = data.list.map(l => `<li>${l}</li>`).join('');
    
    document.getElementById('dynamic-service-view').innerHTML = `
        <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
            <img class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='${data.img}'/>
            <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> 
            <div class='relative z-10 text-center px-4'>
                <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>${data.title}</h1>
                <p class='text-xl text-black'>${data.subtitle}</p>
            </div>
        </div>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
            <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
                <div class='text-sm text-gray-500 mb-6'>
                    <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Services</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>${data.title}</span>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    <div class='md:col-span-2 space-y-6'>
                        <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Service Description</h2>
                        <p class='text-black leading-relaxed'>${data.desc1}</p>
                        <p class='text-black leading-relaxed'>${data.desc2}</p>
                        <h3 class='text-xl font-bold text-black mt-8 mb-4'>${data.listTitle}</h3>
                        <ul class='service-list text-black space-y-2'>${listHtml}</ul>
                    </div>
                    <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                        <h3 class='text-xl font-bold text-brand-primary mb-4'>Standards &amp; Quality</h3>
                        <div class='space-y-4'>${stdHtml}</div>
                        <div class='mt-8 pt-6 border-t border-gray-200'>
                            <a class='block w-full bg-brand-primary text-white rounded font-bold text-center py-3 hover:bg-black transition' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDynamicIndustry(id) {
    const data = industryData[id];
    if(!data) return;
    const solHtml = data.sol.map(s => `<li>${s}</li>`).join('');
    const secHtml = data.sec.map(s => `<li class='border-b border-gray-200 pb-2'><i class='${s.icon} text-brand-primary w-5'></i> ${s.name}</li>`).join('');

    document.getElementById('dynamic-industry-view').innerHTML = `
        <div class='relative h-[400px] w-full flex items-center justify-center bg-gray-100 overflow-hidden'>
            <img class='absolute inset-0 w-full h-full object-cover opacity-[0.15]' src='${data.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'/>
            <div class='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
            <div class='relative z-10 text-center px-4'>
                <h1 class='text-4xl md:text-5xl font-bold text-black mb-4'>${data.title}</h1>
                <p class='text-xl text-black'>${data.subtitle}</p>
            </div>
        </div>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20'>
            <div class='bg-white border border-gray-200 p-8 md:p-12 shadow-xl rounded-lg'>
                <div class='text-sm text-gray-500 mb-6'>
                    <span class='hover:text-brand-primary cursor-pointer' onclick='showPage("home")'>Home</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span class='text-brand-primary'>Industries</span> <i class='fas fa-chevron-right mx-2 text-xs'></i> <span>${data.title}</span>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    <div class='md:col-span-2 space-y-6'>
                        <h2 class='text-3xl font-bold text-black mb-4 border-l-4 border-brand-primary pl-4'>Industry Challenges</h2>
                        <p class='text-black leading-relaxed'>${data.chal}</p>
                        <h3 class='text-xl font-bold text-black mt-8 mb-4'>STARLINGS Solutions</h3>
                        <ul class='service-list text-black space-y-2'>${solHtml}</ul>
                    </div>
                    <div class='bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit'>
                        <h3 class='text-xl font-bold text-brand-primary mb-4'>Target Sectors</h3>
                        <ul class='text-black space-y-3 text-sm'>${secHtml}</ul>
                        <div class='mt-8 pt-6 border-t border-gray-200'><a class='block w-full bg-brand-primary text-white font-bold text-center py-3 hover:bg-black transition rounded' href='https://wa.me/6289671312942' target='_blank'>Consult Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- 3. PAGE ROUTING & UI LOGIC ---
function showPage(pageId, addToHistory = true, partnerId = null) {
    const staticPages = ['home-view', 'company-profile', 'partner-detail-view', 'career-view', 'rfp-view', 'research-view', 'news-view', 'activities-view'];
    
    let targetId = pageId;
    if (pageId === 'home') targetId = 'home-view';
    if (pageId === 'career') targetId = 'career-view';
    if (pageId === 'rfp') targetId = 'rfp-view'; 

    // Handle Dynamic Rendering
    if (pageId.startsWith('service-')) {
        renderDynamicService(pageId.replace('service-', ''));
        targetId = 'dynamic-service-view';
    } else if (pageId.startsWith('industry-')) {
        renderDynamicIndustry(pageId.replace('industry-', ''));
        targetId = 'dynamic-industry-view';
    }

    if (!staticPages.includes(targetId) && targetId !== 'dynamic-service-view' && targetId !== 'dynamic-industry-view') {
        targetId = 'home-view';
    }

    // Hide all pages
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));

    // Show target
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.remove('hidden');
    
    if(targetId === 'home-view' && typeof google !== 'undefined' && google.visualization) {
        setTimeout(fetchAndDrawMap, 100);
    }
    window.scrollTo(0,0);

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
        if (url.href !== window.location.href) window.history.pushState({ page: pageId, id: partnerId }, '', url);
    }
}

// --- 4. ADMIN & UTILITIES (Map, SweetAlert, RFP, etc) ---
let isAdmin = localStorage.getItem('starlingsAdmin') === 'true';

function promptAdminLogin() {
    if (isAdmin) {
        Swal.fire({ title: 'Admin Logged In', text: 'You already have admin privileges. Do you want to logout?', icon: 'info', showCancelButton: true, confirmButtonText: 'Logout', confirmButtonColor: '#E35336' }).then((r) => {
            if (r.isConfirmed) { localStorage.setItem('starlingsAdmin', 'false'); isAdmin = false; toggleAdminUI(); Swal.fire('Logged Out', '', 'success'); }
        }); return;
    }
    Swal.fire({
        title: 'Admin Login', html: '<input id="swal-input1" class="swal2-input" placeholder="Email"><input id="swal-input2" class="swal2-input" type="password" placeholder="Password">', focusConfirm: false, confirmButtonColor: '#E35336',
        preConfirm: () => {
            if (document.getElementById('swal-input1').value === 'office@starlings-group.com' && document.getElementById('swal-input2').value === 'GoInternasional!Amin') return true;
            Swal.showValidationMessage('Invalid email or password'); return false;
        }
    }).then((r) => {
        if (r.isConfirmed) { localStorage.setItem('starlingsAdmin', 'true'); isAdmin = true; toggleAdminUI(); Swal.fire({ icon: 'success', title: 'Login Successful', text: 'Access granted.', confirmButtonColor: '#E35336' }); }
    });
}

function toggleAdminUI() {
    document.querySelectorAll('.admin-controls').forEach(el => isAdmin ? el.classList.remove('hidden') : el.classList.add('hidden'));
    document.querySelectorAll('.admin-editable, .page-section p, .page-section h1, .page-section h2, .page-section h3, .page-section h4, .page-section li, .page-section span').forEach(el => {
        if(el.tagName === 'I' || el.tagName === 'BUTTON' || el.closest('button')) return;
        if (isAdmin) el.setAttribute('contenteditable', 'true'); else el.removeAttribute('contenteditable');
    });
    const lockIcon = document.getElementById('admin-lock-icon');
    if(lockIcon) {
        lockIcon.className = isAdmin ? 'fas fa-unlock text-xl text-brand-primary' : 'fas fa-lock text-xl';
    }
}

function openUploadModal(type) {
    let link = type==='research' ? '17-TA9jdphHh4fvvMUqNHTSkH5EWDTDRJ' : type==='news' ? '1yNmoZI5OITqBjiBMmt5idjr_js8-sNhD' : '1J0wSTN-SGYEzvXsmnLU0lxXHyIcRiy3y';
    Swal.fire({ title: `Upload ${type}`, html: `<p class="mb-4">Upload files to Google Drive:</p><a href="https://drive.google.com/open?id=${link}&usp=drive_copy" target="_blank" class="block w-full bg-brand-primary text-white py-2 rounded"><i class="fab fa-google-drive"></i> Open Folder</a>`, showConfirmButton: false, showCloseButton: true });
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

window.addEventListener('load', function() {
    const p = new URLSearchParams(window.location.search).get('page');
    const id = new URLSearchParams(window.location.search).get('id');
    if (p === 'partner-detail-view' && id) showPartnerProfile(id);
    else if (p) showPage(p, false);
    else if(document.getElementById('home-view')) document.getElementById('home-view').classList.remove('hidden');
    if (!p || p === 'home') if (typeof google !== 'undefined' && google.visualization) setTimeout(fetchAndDrawMap, 100);
    toggleAdminUI();
});

window.addEventListener('popstate', function() {
    const p = new URLSearchParams(window.location.search).get('page');
    const id = new URLSearchParams(window.location.search).get('id');
    if (p === 'partner-detail-view' && id) showPartnerProfile(id); else showPage(p || 'home', false);
});

// Map & Treemap
if (typeof google !== 'undefined') { google.charts.load('current', {'packages':['geochart', 'treemap']}); google.charts.setOnLoadCallback(fetchAndDrawMap); }

async function fetchAndDrawMap() {
    const mapC = document.getElementById('regions_div'), treeC = document.getElementById('industry_treemap');
    if (!mapC || !treeC) return;
    try {
        const res = await fetch('https://docs.google.com/spreadsheets/d/1LyOMXw6yn2AI_5s6OnUDiYZ-CYAkyyS9Rt0yPXpa1QA/gviz/tq?tqx=out:json&sheet=db');
        const text = await res.text();
        const data = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));
        let total = 0, provData = {}, indData = {};
        
        data.table.rows.forEach(r => {
            if(!r || !r.c) return;
            if (r.c[2] && r.c[2].v) {
                total++;
                let p = r.c[2].v.toString().toLowerCase();
                let iso = p.includes("aceh")?"ID-AC":p.includes("bali")?"ID-BA":p.includes("jakarta")?"ID-JK":p.includes("jawa barat")?"ID-JB":p.includes("jawa tengah")?"ID-JT":p.includes("jawa timur")?"ID-JI":p.includes("kalimantan timur")?"ID-KI":null; // Simplified for length, add more if needed
                if(iso) provData[iso] = (provData[iso] || 0) + 1;
                
                if (r.c[4] && r.c[4].v) {
                    let ind = r.c[4].v.toString().trim() || 'Other';
                    indData[ind] = (indData[ind] || 0) + 1;
                }
            }
        });
        document.getElementById('stat-total-companies').innerText = total;

        var mapTable = new google.visualization.DataTable(); mapTable.addColumn('string','Province'); mapTable.addColumn('number','Clients');
        for (let i in provData) mapTable.addRow([i, provData[i]]);
        new google.visualization.GeoChart(mapC).draw(mapTable, { region:'ID', resolution:'provinces', colorAxis:{colors:['#fca5a5','#E35336']}, backgroundColor:'transparent', legend:'none' });

        var treeTable = new google.visualization.DataTable(); treeTable.addColumn('string','Industry'); treeTable.addColumn('string','Parent'); treeTable.addColumn('number','Size'); treeTable.addColumn('number','Color');
        treeTable.addRow(['Industries', null, 0, 0]);
        for (let i in indData) treeTable.addRow([i, 'Industries', indData[i], indData[i]]);
        new google.visualization.TreeMap(treeC).draw(treeTable, { minColor:'#ffbaba', midColor:'#E35336', maxColor:'#991b1b', headerHeight:0, fontColor:'#fff', showScale:false });
    } catch(e) { console.error(e); }
}

// Form Handlers
document.addEventListener('input', e => { if(e.target.classList.contains('format-number')) e.target.value = e.target.value.replace(/\D/g,"") ? parseInt(e.target.value.replace(/\D/g,"")).toLocaleString('en-US') : ""; });

async function submitRFP(e) {
    e.preventDefault(); const btn = e.target.querySelector('button[type="submit"]'); const orig = btn.innerHTML; btn.innerHTML = 'Sending...'; btn.disabled = true;
    try {
        const d = Object.fromEntries(new FormData(e.target));
        ['revenue','transactions','bank_accounts','employees'].forEach(k => { if(d[k]) d[k] = d[k].replace(/,/g,'') });
        if(d.currency && d.revenue) d.revenue = d.currency + ' ' + d.revenue;
        await fetch("https://script.google.com/macros/s/AKfycbzjlPU4qSXTuRY3_NX5e31vl_wER6SPfVMSyEO1HhSECa3sFR3tgqpGnLOlbjdWgMqrBg/exec", {method:'POST', body:JSON.stringify(d)});
        Swal.fire({icon:'success', title:'Sent!', text:'Request received.', confirmButtonColor:'#E35336'}).then(()=> { e.target.reset(); showPage('home'); });
    } catch (err) { Swal.fire({icon:'error', title:'Error', text:'Failed to send.', confirmButtonColor:'#E35336'}); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
}

async function handleFormSubmit(e) {
    e.preventDefault(); const btn = e.target.querySelector('button[type="submit"]'); const orig = btn.innerHTML; btn.innerHTML = 'Sending...'; btn.disabled = true;
    try {
        const file = document.getElementById('fileUpload').files[0];
        const d = Object.fromEntries(new FormData(e.target));
        if(file) {
            const reader = new FileReader();
            reader.onload = async () => {
                d.file = { name: file.name, type: file.type, data: reader.result.split(',')[1] };
                await fetch("https://script.google.com/macros/s/AKfycbyiPKwx9kNIoIehO4SKzhsGu2MzSHBeaKasXCUb49EiQzgt4EYlXOuIyEEvHkfLOaed/exec", {method:'POST', body:JSON.stringify(d)});
                Swal.fire({icon:'success', title:'Sent!', confirmButtonColor:'#E35336'}).then(()=>{ e.target.reset(); showPage('home'); btn.innerHTML=orig; btn.disabled=false; });
            };
            reader.readAsDataURL(file);
        }
    } catch(err) { Swal.fire({icon:'error', title:'Error', confirmButtonColor:'#E35336'}); btn.innerHTML=orig; btn.disabled=false; }
}
