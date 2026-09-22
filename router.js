window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const partnerId = urlParams.get('id');
    
    // Deteksi jika ini adalah URL bawaan Blogger (bukan root url)
    const isBloggerPage = window.location.pathname !== '/' && window.location.pathname !== '/index.html';

    if (page) {
        if (page === 'partner-detail-view' && partnerId) {
            showPartnerProfile(partnerId);
        } else {
            showPage(page, false);
        }
    } else if (isBloggerPage) {
        // Jika berada di halaman post atau label Blogger, tampilkan wadah Blogger
        showBloggerNativeContent();
    } else {
        // Jika benar-benar di halaman depan tanpa parameter
        showPage('home', false);
    }
    
    if (typeof toggleAdminUI === 'function') {
        toggleAdminUI();
    }
});

// Gunakan reload untuk popstate (tombol back/forward) agar aman antara SPA dan native Blogger
window.addEventListener('popstate', function(event) {
    window.location.reload();
});

function showBloggerNativeContent() {
    // Sembunyikan semua section SPA
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    
    // Tampilkan section khusus postingan Blogger
    const bloggerContent = document.getElementById('main-blogger-content');
    if (bloggerContent) { 
        bloggerContent.classList.remove('hidden'); 
    }
    window.scrollTo(0,0);
}

function showPage(pageId, addToHistory = true, partnerId = null) {
    const allPages = [
        'home-view', 'company-profile', 'partner-detail-view', 'career-view', 'rfp-view',   
        'service-pembukuan', 'service-pajak', 'service-internal-control', 'service-manajemen-keuangan',
        'industry-fnb', 'industry-kecantikan', 'industry-textile', 'industry-garment', 'industry-konveksi',
        'industry-ngo', 'industry-financial', 'industry-education-ngo', 'industry-tech-ecommerce',
        'industry-manufacturing', 'industry-real-estate', 'industry-retail', 'industry-services',
        'industry-mining', 'industry-healthcare', 'industry-holding', 'industry-agriculture', 'industry-entertainment'
    ];

    let targetId = pageId;
    if (pageId === 'home') targetId = 'home-view';
    if (pageId === 'career') targetId = 'career-view';
    if (pageId === 'rfp') targetId = 'rfp-view'; 

    if (!allPages.includes(targetId) && targetId !== 'home-view') { targetId = 'home-view'; }

    // Sembunyikan semua section termasuk wadah Blogger
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));

    // Tampilkan target SPA
    const targetEl = document.getElementById(targetId);
    if (targetEl) { targetEl.classList.remove('hidden'); }
    
    // Render Map jika kembali ke home
    if(targetId === 'home-view') {
        if (typeof google !== 'undefined' && google.visualization) { setTimeout(fetchAndDrawMap, 100); }
    }
    
    window.scrollTo(0,0);

    // Update URL History
    if (addToHistory) {
        const url = new URL(window.location);
        if (targetId === 'home-view') {
            url.searchParams.delete('page');
            url.searchParams.delete('id');
        } else {
            url.searchParams.set('page', pageId);
            if (partnerId) { url.searchParams.set('id', partnerId); } else { url.searchParams.delete('id'); }
        }
        if (url.href !== window.location.href) { window.history.pushState({ page: pageId, id: partnerId }, '', url); }
    }
}
