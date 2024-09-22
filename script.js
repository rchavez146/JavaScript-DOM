// Handle expanding/collapsing topics
const topics = document.querySelectorAll('.topic');

topics.forEach(topic => {
    topic.addEventListener('click', () => {
        topic.classList.toggle('active');
    });
});

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    topics.forEach(topic => {
        const topicTitle = topic.querySelector('h2').textContent.toLowerCase();
        if (topicTitle.includes(searchValue)) {
            topic.style.display = '';
        } else {
            topic.style.display = 'none';
        }
    });
});
