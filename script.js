document.addEventListener('DOMContentLoaded', function() {
    const githubUsername = 'math-with-shani'; // <-- IMPORTANT: Replace with your GitHub username
    const projectList = document.getElementById('project-list');

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            projectList.innerHTML = ''; // Clear any loading text
            data.forEach(repo => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                const title = document.createElement('h3');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                link.target = '_blank';
                title.appendChild(link);

                const description = document.createElement('p');
                description.textContent = repo.description || 'No description provided.';

                projectElement.appendChild(title);
                projectElement.appendChild(description);
                projectList.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            projectList.innerHTML = '<p>Could not fetch projects. Please try again later.</p>';
        });
});
