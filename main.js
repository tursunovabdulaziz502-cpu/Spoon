document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.querySelector('.search-toggle');
  const searchModal = document.getElementById('searchModal');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = document.getElementById('searchInput');

  searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    searchModal.classList.add('active');
    searchInput.focus();
  });

  closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
  });

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
    }
  });

  const cartToggle = document.querySelector('.cart-toggle');
  const cartSidebar = document.getElementById('cartSidebar');
  const closeCart = document.getElementById('closeCart');

  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('active');
  });

  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });

  let cartCount = 0;
  const cartCountEl = document.querySelector('.cart-count');
  const cartBody = document.querySelector('.cart-body');
  const addCartButtons = document.querySelectorAll('.btn-add-cart');

  addCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productName = productCard.querySelector('h4').textContent;
      const productPrice = productCard.querySelector('.price').textContent;

      if (cartCount === 0) {
        cartBody.innerHTML = '';
      }

      cartCount++;
      cartCountEl.textContent = cartCount;

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <div>
          <strong>${productName}</strong>
          <div style="font-size: 12px; color: #777;">${productPrice}</div>
        </div>
        <button style="background:none; border:none; color:red; cursor:pointer;" onclick="this.parentElement.remove()">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      cartBody.appendChild(cartItem);

      cartSidebar.classList.add('active');
    });
  });
});