var inPageFilters = document.querySelectorAll('.catalog-filter');

inPageFilters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.filter-box-wrapper .filter-box:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.filter-box-wrapper [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.filter-box-wrapper [data-filter]');
    }

    itemsToHide.forEach(e => {
      e.classList.add('filter-hide');
      e.classList.remove('filter-show');
    });

    itemsToShow.forEach(e => {
      e.classList.remove('filter-hide');
      e.classList.add('filter-show'); 
    });

  });
});

var filterClearBtn = document.querySelector('.catalogClear');
filterClearBtn.addEventListener('click', function () {
    allLinks.forEach(function (link) {
        link.classList.remove('active', 'gray-color');
    });
});