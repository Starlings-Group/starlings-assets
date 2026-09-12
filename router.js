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
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const partnerId = urlParams.get('id');
    const isBloggerPage = window.location.pathname !== '/' && window.location.pathname !== '/index.html';

    if (page === 'partner-detail-view' && partnerId) {
        showPartnerProfile(partnerId);
    } else if (page) {
        showPage(page, false);
    } else if (isBloggerPage) {
        showBloggerNativeContent();
    } else {
        showPage('home', false);
    }
});

function showBloggerNativeContent() {
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    const bloggerContent = document.getElementById('main-blogger-content');
    if (bloggerContent) bloggerContent.classList.remove('hidden');
}

function showPage(pageId, addToHistory = true, partnerId = null) {
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
    if (pageId === 'career') targetId = 'career-view';
    if (pageId === 'rfp') targetId = 'rfp-view'; 

    if (!allPages.includes(targetId) && targetId !== 'home-view') {
        targetId = 'home-view';
    }

    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    const bloggerContent = document.getElementById('main-blogger-content');
    if (bloggerContent) bloggerContent.classList.add('hidden');

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
            if (partnerId) { url.searchParams.set('id', partnerId); } 
            else { url.searchParams.delete('id'); }
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
