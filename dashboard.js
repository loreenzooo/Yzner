
const productsData = [ 
    { name: 'Black Hoodie', price: 1447, releaseDate: '2024-05-01' },
    { name: 'Black Boxy', price: 950, releaseDate: '2024-06-15' },
    { name: 'Terry Polo', price: 500, releaseDate: '2024-05-01' },
    { name: 'Full button Polo', price: 450, releaseDate: '2024-06-15' },
    { name: 'Quarter Zip Terry', price: 850, releaseDate: '2024-05-01' },
    { name: 'Pullover Acid Gray', price: 1000, releaseDate: '2024-06-15' },
    { name: 'Paradise Fatigue', price: 1300, releaseDate: '2024-05-01' },
    { name: 'Rockstar Classic', price: 750, releaseDate: '2024-06-15' },
    { name: 'Terry Sleeves', price: 756, releaseDate: '2024-05-01' },
    { name: 'Adios G', price: 450, releaseDate: '2024-06-15' },
    { name: 'Global Unity', price: 100, releaseDate: '2024-05-01' },
    { name: 'Realdeal Shirt', price: 1250, releaseDate: '2024-06-15' },
];

const customerComments = [
    { name: 'John Real', comment: 'Great service!' },
    { name: 'Jane Smith', comment: 'Loved the product!' },
    { name: 'Mike Johnson', comment: 'Will buy again!' },
    { name: 'Ivy Jundis', comment: 'Thanks seller!' },
    { name: 'Keith Tyson', comment: 'Very nice products!' },
    { name: 'Manny Pacman', comment: 'Thanks!!' },
    { name: 'James Gosling', comment: 'Nice will buy again!' },
    { name: 'Alice Guo', comment: 'Lumaki po ako sa farm' },
];

const newCustomers = [
    { name: 'Alice Brown', registeredDate: '2024-01-15' },
    { name: 'David Wilson', registeredDate: '2024-02-10' },
    { name: 'Emma Davis', registeredDate: '2024-03-05' },
    { name: 'Alice Brown', registeredDate: '2024-01-15' },
    { name: 'Keith Martil', registeredDate: '2024-06-30' },
    { name: 'Manny Pacman', registeredDate: '2024-03-10' },
    { name: 'James Gosling', registeredDate: '2024-01-11' },
    { name: 'Alice Guo', registeredDate: '2024-02-30' },
];
const loginStats = [
    { date: '2024-03-01', logins: 50 },
    { date: '2024-03-02', logins: 45 },
    { date: '2024-03-03', logins: 60 },
    { date: '2024-03-01', logins: 52 },
    { date: '2024-03-02', logins: 46 },
    { date: '2024-03-03', logins: 62 },
    { date: '2024-03-01', logins: 51 },
    { date: '2024-03-02', logins: 40 },
    { date: '2024-03-03', logins: 63 },
    { date: '2024-03-01', logins: 53 },
    { date: '2024-03-02', logins: 41 },
    { date: '2024-03-03', logins: 64 },
];
function displayProductsData() {
    let productsContainer = document.getElementById('products-data');
    productsData.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('data-item');
        item.innerHTML = `<strong>${product.name}</strong>: Price: $${product.price}, Release Date: ${product.releaseDate}`;
        productsContainer.appendChild(item);
    });
}

function displayCustomerComments() {
    let commentsContainer = document.getElementById('comments-data');
    customerComments.forEach(comment => {
        let item = document.createElement('div');
        item.classList.add('data-item');
        item.innerText = `${comment.name}: "${comment.comment}"`;
        commentsContainer.appendChild(item);
    });
}

function displayNewCustomers() {
    let customersContainer = document.getElementById('customers-data');
    newCustomers.forEach(customer => {
        let item = document.createElement('div');
        item.classList.add('data-item');
        item.innerText = `${customer.name} (Registered: ${customer.registeredDate})`;
        customersContainer.appendChild(item);
    });
}


function displayLoginStats() {
    let loginContainer = document.getElementById('login-data');
    loginStats.forEach(stat => {
        let item = document.createElement('div');
        item.classList.add('data-item');
        item.innerText = `${stat.date}: ${stat.logins} logins`;
        loginContainer.appendChild(item);
    });
}


function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }); 
}

function initAdminPanel() {

    displayCustomerComments();
    displayNewCustomers();
    displayLoginStats();
    displayProductsData(); 
    
}


window.onload = initAdminPanel;