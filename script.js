/* General Body Styles */
body {
    font-family: 'Heebo', sans-serif;
    line-height: 1.8;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
    direction: rtl;
}

.container {
    max-width: 960px;
    margin: auto;
    overflow: hidden;
    padding: 0 20px;
}

/* Header and Navigation */
header {
    background: #fff;
    color: #333;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo a {
    font-weight: 700;
    font-size: 1.5rem;
    color: #005A9C; /* Professional Blue */
    text-decoration: none;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

header nav ul li {
    margin-right: 25px;
}

header nav ul li a {
    color: #555;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

header nav ul li a:hover {
    color: #007BFF;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 80px 20px;
    background: url('https://www.transparenttextures.com/patterns/cubes.png'), linear-gradient(to right, #eef5ff, #f8faff);
    border-radius: 8px;
    margin-top: 20px;
}

.hero h1 {
    margin: 0 0 15px 0;
    font-size: 2.8rem;
    color: #003366; /* Darker Blue */
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 30px;
}

.cta-button {
    background: #007BFF;
    color: #fff;
    padding: 12px 25px;
    font-size: 1.1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background: #0056b3;
}

/* Main Content Sections */
main section {
    background: #fff;
    margin: 40px 0;
    padding: 35px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

h2 {
    color: #005A9C;
    border-bottom: 3px solid #f0f0f0;
    padding-bottom: 15px;
    margin-top: 0;
    text-align: center;
    margin-bottom: 30px;
}

/* About Section */
#about .about-content {
    display: flex;
    align-items: center;
    gap: 40px;
}

#about .about-text {
    flex: 2;
}

#about .about-image {
    flex: 1;
    text-align: center;
}

#about img {
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* Services Section */
.service-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.card {
    background: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    flex: 1;
    border: 1px solid #eee;
}

.card h3 {
    margin-top: 0;
    color: #007BFF;
}

/* Why Me Section */
#why-me ul {
    list-style: none;
    padding: 0;
}

#why-me li {
    padding: 10px 0;
    font-size: 1.1rem;
    border-bottom: 1px solid #f0f0f0;
}

#why-me li:before {
    content: '✔';
    color: #28a745;
    margin-left: 10px;
    font-weight: bold;
}

/* Testimonials Section */
#testimonials .testimonial {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-right: 5px solid #007BFF;
}

#testimonials cite {
    display: block;
    margin-top: 10px;
    font-style: normal;
    font-weight: bold;
    color: #555;
}

/* Contact Section */
#contact .contact-details {
    text-align: center;
    font-size: 1.2rem;
}

#contact a {
    color: #007BFF;
    text-decoration: none;
    font-weight: bold;
}

#contact a:hover {
    text-decoration: underline;
}


/* Footer Styles */
footer {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    background: #333;
    color: #fff;
}
