document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('detail-view');
    const sectionsGrid = document.getElementById('sections-grid');
    const detailContent = document.getElementById('detail-content');
    const backButton = document.getElementById('back-button');

    let allData = [];

    // Fetch data from the JSON file
    const fetchData = async () => {
        try {
            const response = await fetch('assets/dummy-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allData = await response.json();
            renderMainView(allData);
        } catch (error) {
            console.error('Could not fetch data:', error);
            sectionsGrid.innerHTML = '<p>Error loading content. Please try again later.</p>';
        }
    };

    // Render the main grid of section cards
    const renderMainView = (data) => {
        sectionsGrid.innerHTML = '';
        data.forEach(section => {
            const card = document.createElement('div');
            card.className = 'section-card';
            card.dataset.id = section.id;
            card.innerHTML = `
                <h2>${section.title}</h2>
                <p>${section.summary}</p>
            `;
            sectionsGrid.appendChild(card);
        });
    };

    // Render the detail view for a specific section
    const renderDetailView = (sectionId) => {
        const section = allData.find(s => s.id === sectionId);
        if (!section) return;

        let contentHtml = `<h2 class="detail-title">${section.title}</h2>`;
        if (section.summary) {
            contentHtml += `<p class="detail-summary">${section.summary}</p>`;
        }

        section.content.forEach(item => {
            contentHtml += `
                <div class="detail-subsection">
                    ${item.subtitle ? `<h3>${item.subtitle}</h3>` : ''}
                    <p>${item.text.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        });

        detailContent.innerHTML = contentHtml;
        mainView.classList.add('hidden');
        detailView.classList.remove('hidden');
        window.scrollTo(0, 0);
    };

    // Event listener for clicking on a section card
    sectionsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.section-card');
        if (card) {
            const sectionId = card.dataset.id;
            renderDetailView(sectionId);
        }
    });

    // Event listener for the back button
    backButton.addEventListener('click', () => {
        detailView.classList.add('hidden');
        mainView.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Initialize the app
    fetchData();
});