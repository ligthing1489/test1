document.getElementById('search-btn').addEventListener('click', function () {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    // Filter products that match the search query (by title or category)
    const matchingProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );

    if (matchingProducts.length > 0) {
        // Store results in localStorage to pass data to the results page
        localStorage.setItem('searchResults', JSON.stringify(matchingProducts));
        // Redirect to the search results page
        window.location.href = 'search-results.html';
    } else {
        alert('No products found for your search.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));

    if (searchResults && searchResults.length > 0) {
        const resultsContainer = document.getElementById('search-results');
        searchResults.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" class="product-image" />
        <h4 class="product-name">${product.title}</h4>
        <p class="product-category">${product.category}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <a href="Product-Detail-Page.html?productId=${product.id}" class="view-product-link">View Product</a>
      `;
            resultsContainer.appendChild(productElement);
        });
    } else {
        document.getElementById('search-results-container').innerHTML = '<p>No results found.</p>';
    }
});
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});