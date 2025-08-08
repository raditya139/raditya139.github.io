const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('userID');
  window.location.href = '/login';
});

const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

bottomNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    bottomNavItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  });
});

const currentPage = window.location.pathname;
const activeItem = document.querySelector(`.bottom-nav-item[href="${currentPage}"]`);
if (activeItem) {
  activeItem.classList.add('active');
}