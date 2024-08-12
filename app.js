
// Mobile Sidebar Open Close
const openSideBar = document.getElementById('open-mobile-sidebar');
const closeSideBar = document.getElementById('mobile-side-close');
const sidebar = document.getElementById('mobile-side-nav')

openSideBar.addEventListener('click', function () {
    sidebar.classList.add('active')
})

closeSideBar.addEventListener('click', function () {
    sidebar.classList.remove('active')
})
