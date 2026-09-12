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
                if(isoCode) { provData[isoCode] = (provData[isoCode] || 0) + 1; }
                
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
        mapTable.addColumn('string', 'Province');
        mapTable.addColumn('number', 'Clients');

        for (let iso in provData) { mapTable.addRow([iso, provData[iso]]); }

        var mapOptions = { region: 'ID', resolution: 'provinces', colorAxis: {colors: ['#fca5a5', '#E35336']}, backgroundColor: 'transparent', datalessRegionColor: '#e5e7eb', defaultColor: '#e5e7eb', tooltip: { trigger: 'focus' }, legend: 'none' };
        var mapChart = new google.visualization.GeoChart(mapContainer);
        mapChart.draw(mapTable, mapOptions);
        
        var treeTable = new google.visualization.DataTable();
        treeTable.addColumn('string', 'Industry'); treeTable.addColumn('string', 'Parent'); treeTable.addColumn('number', 'Size'); treeTable.addColumn('number', 'Color');
        treeTable.addRow(['Industries', null, 0, 0]);

        for (let ind in industryData) { treeTable.addRow([ind, 'Industries', industryData[ind], industryData[ind]]); }

        var treeOptions = { minColor: '#ffbaba', midColor: '#E35336', maxColor: '#991b1b', headerHeight: 0, fontColor: '#ffffff', showScale: false, generateTooltip: showFullTooltip };
        var treeChart = new google.visualization.TreeMap(treeContainer);
        treeChart.draw(treeTable, treeOptions);
        
        function showFullTooltip(row, size, value) {
            return '<div style="background:#fff;padding:10px;border:1px solid #e5e7eb;border-radius:4px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);"><span style="font-family:Roboto;font-weight:bold;color:#000;">' + treeTable.getValue(row, 0) + '</span><br><span style="font-family:Roboto;color:#6b7280;font-size:12px;">Total Clients: ' + size + '</span></div>';
        }

    } catch(e) {
        console.error('Error fetching map data:', e);
        mapContainer.innerHTML = '<div class="flex h-full items-center justify-center p-4 text-center text-red-500 font-medium border border-red-200 rounded bg-red-50">Data Failed to Load.</div>';
        treeContainer.innerHTML = '<div class="flex h-full items-center justify-center p-4 text-center text-red-500 font-medium">Failed to load industry data.</div>';
    }
}
