function showPage(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(pageElement) {
      pageElement.style.display = 'none';
    });
  
    // Show the selected page
    document.getElementById(page).style.display = 'block';
  }
  
  // Default page to show
  window.onload = function() {
    showPage('about'); // Show the About page by default
  }