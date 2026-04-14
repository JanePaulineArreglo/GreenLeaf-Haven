 const ALL_PLANTS = [
    { id: "p1", name: "Monstera Deliciosa", price: 1240, category: "Foliage Favourites", image: "Monstera Deliciosa.webp", description: "The iconic Swiss Cheese Plant features large, fenestrated leaves that bring a tropical jungle vibe. Easy to care for and fast-growing.", care: "🌞 Bright indirect light | 💧 Water when top 2 inches dry | 🌡️ 18-27°C" },
    { id: "p2", name: "Snake Plant", price: 890, category: "Air Purifiers", image: "snake plant.webp", description: "Nearly indestructible, Snake Plant filters indoor air and thrives on neglect. Perfect for beginners.", care: "🌞 Low to bright indirect | 💧 Water every 2-3 weeks | 🌡️ 15-30°C" },
    { id: "p3", name: "Fiddle Leaf Fig", price: 1990, category: "Statement Trees", image: "Fiddle Leaf Fig.webp", description: "A favorite interior designer's choice with large violin-shaped leaves. Adds dramatic height.", care: "🌞 Bright indirect light | 💧 Consistent moisture | 🌡️ 18-26°C" },
    { id: "p4", name: "ZZ Plant", price: 990, category: "Low Light Heroes", image: "ZZ Plant.webp", description: "Glossy, dark green leaves on upright stems. Tolerates low light and irregular watering.", care: "🌞 Low to bright indirect | 💧 Water every 2-3 weeks | 🌡️ 15-28°C" },
    { id: "p5", name: "Peace Lily", price: 1150, category: "Air Purifiers", image: "Peace Lily.webp", description: "Elegant white blooms and dark foliage. Excellent air purifier and tells you when it needs water.", care: "🌞 Low to medium indirect | 💧 Keep soil slightly moist | 🌡️ 18-28°C" },
    { id: "p6", name: "Pilea Peperomioides", price: 750, category: "Foliage Favourites", image: "Pilea Peperomioides.webp", description: "Chinese Money Plant with round, pancake-like leaves. Produces many baby plants.", care: "🌞 Bright indirect light | 💧 Water when top dry | 🌡️ 16-24°C" },
    { id: "p7", name: "Calathea Orbifolia", price: 1350, category: "Patterned Leaves", image: "Calathea Orbifolia.webp", description: "Stunning round leaves with silver-green stripes. A true showstopper.", care: "🌞 Medium indirect | 💧 High humidity, moist soil | 🌡️ 18-26°C" },
    { id: "p8", name: "Aloe Vera", price: 520, category: "Succulents", image: "Aloe Vera.jpg", description: "Medicinal succulent with healing gel inside leaves. Easy and useful.", care: "🌞 Bright direct to indirect | 💧 Water deeply when dry | 🌡️ 13-27°C" },
    { id: "p9", name: "Bird of Paradise", price: 2450, category: "Statement Trees", image: "Bird of Paradise.jpg", description: "Giant leaves that split naturally. Brings instant tropical drama.", care: "🌞 Bright light | 💧 Regular watering | 🌡️ 18-28°C" },
    { id: "p10", name: "String of Pearls", price: 680, category: "Hanging Plants", image: "String of Pearls.jpg", description: "Unique trailing succulent with bead-like leaves. Looks amazing in hanging baskets.", care: "🌞 Bright indirect | 💧 Water when pearls shrink | 🌡️ 18-24°C" },
    { id: "p11", name: "Philodendron Brasil", price: 980, category: "Vining Plants", image: "Philodendron Brasil.jpg", description: "Heart-shaped leaves with lime-green variegation. Fast-growing vine.", care: "🌞 Medium to bright indirect | 💧 Water when top dry | 🌡️ 18-26°C" },
    { id: "p12", name: "Rubber Plant", price: 1480, category: "Foliage Favourites", image: "Rubber Plant.jpg", description: "Burgundy-reddish leaves that are thick and glossy. Very resilient.", care: "🌞 Bright indirect | 💧 Allow top to dry | 🌡️ 16-27°C" },
    { id: "p13", name: "Jade Plant", price: 620, category: "Succulents", image: "Jade Plant.jpg", description: "Symbol of good luck with thick, woody stems and plump leaves.", care: "🌞 Bright light | 💧 Let soil dry completely | 🌡️ 18-24°C" },
    { id: "p14", name: "Boston Fern", price: 890, category: "Hanging Plants", image: "Boston Fern.jpg", description: "Classic feathery fern that loves humidity. Perfect for bathrooms.", care: "🌞 Medium indirect | 💧 Keep soil moist | 🌡️ 18-24°C" },
    { id: "p15", name: "Pothos Golden", price: 450, category: "Vining Plants", image: "Pothos Golden.jpg", description: "Virtually unkillable trailing plant with golden variegation.", care: "🌞 Low to bright indirect | 💧 Water when dry | 🌡️ 15-29°C" },
    { id: "p16", name: "Anthurium", price: 1650, category: "Flowering Plants", image: "Anthurium.jpg", description: "Heart-shaped red flowers that bloom year-round. Adds vibrant color.", care: "🌞 Bright indirect | 💧 Keep soil lightly moist | 🌡️ 18-26°C" },
    { id: "p17", name: "Chinese Evergreen", price: 890, category: "Low Light Heroes", image: "Chinese Evergreen.jpg", description: "Silver-patterned leaves that thrive in almost any condition.", care: "🌞 Low to medium light | 💧 Water when dry | 🌡️ 18-26°C" },
    { id: "p18", name: "Dracaena Marginata", price: 1100, category: "Statement Trees", image: "Dracaena Marginata.jpg", description: "Slim, arching leaves with red edges. Adds architectural interest.", care: "🌞 Medium indirect | 💧 Allow top to dry | 🌡️ 18-26°C" },
    { id: "p19", name: "Spider Plant", price: 550, category: "Air Purifiers", image: "Spider Plant.jpg", description: "Produces baby 'spiders' and is excellent for beginners.", care: "🌞 Bright indirect | 💧 Water when dry | 🌡️ 15-27°C" },
    { id: "p20", name: "Hoya Kerrii", price: 780, category: "Succulents", image: "Hoya Kerrii.jpg", description: "Sweetheart plant with single heart-shaped leaves. Popular gift plant.", care: "🌞 Bright indirect | 💧 Let soil dry between watering | 🌡️ 18-27°C" }
  ];

  // REDUX STORE
  const initialState = {
    cart: [],
    products: ALL_PLANTS,
    searchQuery: ""
  };
  
  function rootReducer(state = initialState, action) {
    let newState = { ...state, cart: [...state.cart] };
    switch (action.type) {
      case 'ADD_TO_CART':
        if (!newState.cart.find(i => i.id === action.payload.id))
          newState.cart.push({ ...action.payload, quantity: 1 });
        return newState;
      case 'INCREASE_ITEM':
        const incIdx = newState.cart.findIndex(i => i.id === action.payload.id);
        if (incIdx !== -1) newState.cart[incIdx].quantity += 1;
        return newState;
      case 'DECREASE_ITEM':
        const decIdx = newState.cart.findIndex(i => i.id === action.payload.id);
        if (decIdx !== -1) {
          if (newState.cart[decIdx].quantity === 1) newState.cart.splice(decIdx, 1);
          else newState.cart[decIdx].quantity -= 1;
        }
        return newState;
      case 'REMOVE_ITEM':
        newState.cart = newState.cart.filter(i => i.id !== action.payload.id);
        return newState;
      case 'SET_SEARCH':
        newState.searchQuery = action.payload;
        return newState;
      default: return state;
    }
  }
  
  let currentState = rootReducer(initialState, { type: '@@INIT' });
  const listeners = [];
  function dispatch(action) { currentState = rootReducer(currentState, action); listeners.forEach(fn => fn(currentState)); }
  function subscribe(fn) { listeners.push(fn); fn(currentState); }
  function getState() { return currentState; }
  function totalItems(cart) { return cart.reduce((s, i) => s + i.quantity, 0); }
  function totalCostPHP(cart) { return cart.reduce((s, i) => s + (i.price * i.quantity), 0); }
  function formatPHP(amount) { return `₱${amount.toFixed(2)}`; }

  let currentView = 'landing';
  let selectedProductId = null;
  const viewContainer = document.getElementById('viewContainer');
  const cartHeaderSpan = document.getElementById('cartCountHeader');
  const searchInput = document.getElementById('searchInput');

  function updateHeader() { cartHeaderSpan.innerText = totalItems(getState().cart); }
  subscribe(() => { updateHeader(); if (currentView === 'shop') renderShop(); else if (currentView === 'cart') renderCart(); else if (currentView === 'detail' && selectedProductId) renderProductDetail(); else if (currentView === 'landing') renderLanding(); });

  window.addEventListener('scroll', () => {
    const stickyImg = document.getElementById('stickyPlantImg');
    if (window.scrollY > 300) stickyImg.classList.add('visible');
    else stickyImg.classList.remove('visible');
  });
  document.getElementById('stickyPlantImg')?.addEventListener('click', () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });

  function renderLanding() {
    viewContainer.innerHTML = `
      <div class="landing">
        <div class="hero-bg"></div>
        <div class="hero-text">
          <h1>GreenLeaf Haven</h1>
          <p><strong>🇵🇭 Premium Indoor Plants – PHP Prices</strong></p>
          <p>We bring the lush tropics of the Philippines to your home. Over 20 unique species, eco-friendly pots, and nationwide delivery. Transform your space into a living sanctuary 🌱</p>
          <button class="btn-get-started" id="getStartedBtn">🌿 Explore Plants →</button>
        </div>
      </div>
    `;
    document.getElementById('getStartedBtn')?.addEventListener('click', () => { currentView = 'shop'; renderShop(); });
  }

  function renderShop() {
    const { products, cart, searchQuery } = getState();
    const cartIds = new Set(cart.map(i => i.id));
    let filtered = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));
    const categories = new Map();
    filtered.forEach(p => { if (!categories.has(p.category)) categories.set(p.category, []); categories.get(p.category).push(p); });
    if (filtered.length === 0) {
      viewContainer.innerHTML = `<div class="cart-container"><p>No plants match "${searchQuery}"</p><button class="btn-secondary" id="resetSearchBtn">Clear Search</button></div>`;
      document.getElementById('resetSearchBtn')?.addEventListener('click', () => { dispatch({ type: 'SET_SEARCH', payload: '' }); searchInput.value = ''; renderShop(); });
      return;
    }
    let html = `<h2 style="font-weight:800;">🌱 Our Living Collection</h2><p>${filtered.length} unique houseplants — click any plant for details & care guide</p>`;
    for (let [cat, plants] of categories.entries()) {
      html += `<div><div class="category-title">🍃 ${cat}</div><div class="product-grid">`;
      plants.forEach(p => {
        html += `
          <div class="plant-card" data-product-id="${p.id}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" class="detail-trigger" data-id="${p.id}" onerror="this.src='https://placehold.co/400x400/e8f0e0/2b6e4c?text=Plant+Image'">
            <div class="plant-name detail-trigger" data-id="${p.id}"><strong>${p.name}</strong></div>
            <div class="plant-price">${formatPHP(p.price)}</div>
            <button class="add-to-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-image="${p.image}" ${cartIds.has(p.id) ? 'disabled' : ''}>
              <i class="fas fa-cart-plus"></i> ${cartIds.has(p.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        `;
      });
      html += `</div></div>`;
    }
    viewContainer.innerHTML = html;
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btn.disabled) return;
        const id = btn.dataset.id, name = btn.dataset.name, price = parseFloat(btn.dataset.price), image = btn.dataset.image;
        if (!getState().cart.some(i => i.id === id)) dispatch({ type: 'ADD_TO_CART', payload: { id, name, price, image } });
      });
    });
    document.querySelectorAll('.detail-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        if (id) { selectedProductId = id; currentView = 'detail'; renderProductDetail(); }
      });
    });
  }

  function renderProductDetail() {
    const product = getState().products.find(p => p.id === selectedProductId);
    if (!product) { currentView = 'shop'; renderShop(); return; }
    const cart = getState().cart;
    const isInCart = cart.some(i => i.id === product.id);
    viewContainer.innerHTML = `
      <button class="back-btn" id="backToShopBtn"><i class="fas fa-arrow-left"></i> Back to Shop</button>
      <div class="product-detail">
        <div class="detail-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/600x600/e8f0e0/2b6e4c?text=${product.name}'">
        </div>
        <div class="detail-info">
          <h1>${product.name}</h1>
          <div class="detail-price">${formatPHP(product.price)}</div>
          <div class="detail-description">
            <p><strong>📖 About this plant:</strong> ${product.description}</p>
          </div>
          <div class="care-instructions">
            <i class="fas fa-hand-holding-heart"></i> <strong>Care Guide:</strong><br>
            ${product.care}
          </div>
          <button class="add-to-cart detail-add-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" ${isInCart ? 'disabled' : ''} style="margin-top:1rem; padding:0.8rem;">
            <i class="fas fa-cart-plus"></i> ${isInCart ? 'Already in Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    `;
    document.getElementById('backToShopBtn')?.addEventListener('click', () => { currentView = 'shop'; renderShop(); });
    const detailAddBtn = document.querySelector('.detail-add-btn');
    if (detailAddBtn) {
      detailAddBtn.addEventListener('click', () => {
        if (detailAddBtn.disabled) return;
        const id = detailAddBtn.dataset.id, name = detailAddBtn.dataset.name, price = parseFloat(detailAddBtn.dataset.price), image = detailAddBtn.dataset.image;
        if (!getState().cart.some(i => i.id === id)) {
          dispatch({ type: 'ADD_TO_CART', payload: { id, name, price, image } });
          detailAddBtn.disabled = true;
          detailAddBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
        }
      });
    }
  }

  function renderCart() {
    const cart = getState().cart;
    const total = totalItems(cart);
    const totalCost = totalCostPHP(cart);
    if (cart.length === 0) {
      viewContainer.innerHTML = `<div class="cart-container"><h2>🛒 Cart</h2><p>Your cart is empty, add some green friends!</p><button class="btn-secondary" id="emptyContinueBtn">Continue Shopping</button></div>`;
      document.getElementById('emptyContinueBtn')?.addEventListener('click', () => { currentView = 'shop'; renderShop(); });
      return;
    }
    let itemsHtml = '';
    cart.forEach(item => {
      itemsHtml += `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" onerror="this.src='https://placehold.co/70x70/e8f0e0/2b6e4c?text=Plant'">
          <div style="flex:2;"><strong>${item.name}</strong><br>${formatPHP(item.price)} each</div>
          <div class="cart-item-controls">
            <button class="decr" data-id="${item.id}">−</button>
            <span>${item.quantity}</span>
            <button class="incr" data-id="${item.id}">+</button>
          </div>
          <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i> Delete</button>
        </div>
      `;
    });
    viewContainer.innerHTML = `
      <div class="cart-container">
        <h2>🪴 Your Cart</h2>
        <div style="display:flex; justify-content:space-between; margin:1rem 0;"><span>Total items: <strong>${total}</strong></span><span>Total: <strong>${formatPHP(totalCost)}</strong></span></div>
        ${itemsHtml}
        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;">
          <button class="btn-secondary" id="continueShopBtn"><i class="fas fa-arrow-left"></i> Continue Shopping</button>
          <button class="btn-checkout" id="proceedCheckoutBtn"><i class="fas fa-credit-card"></i> Buy Now</button>
        </div>
      </div>
    `;
    document.querySelectorAll('.incr').forEach(btn => btn.addEventListener('click', () => dispatch({ type: 'INCREASE_ITEM', payload: { id: btn.dataset.id } })));
    document.querySelectorAll('.decr').forEach(btn => btn.addEventListener('click', () => dispatch({ type: 'DECREASE_ITEM', payload: { id: btn.dataset.id } })));
    document.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', () => dispatch({ type: 'REMOVE_ITEM', payload: { id: btn.dataset.id } })));
    document.getElementById('continueShopBtn')?.addEventListener('click', () => { currentView = 'shop'; renderShop(); });
    document.getElementById('proceedCheckoutBtn')?.addEventListener('click', () => openCheckoutModal(totalCostPHP(getState().cart)));
  }

  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutTotalSpan = document.getElementById('checkoutTotalAmount');
  let selectedPaymentMethod = 'cod';
  function openCheckoutModal(total) {
    checkoutTotalSpan.innerText = formatPHP(total);
    checkoutModal.style.display = 'flex';
    document.getElementById('buyerName').value = '';
    document.getElementById('buyerEmail').value = '';
    document.getElementById('buyerAddress').value = '';
    document.getElementById('buyerPhone').value = '';
    selectedPaymentMethod = 'cod';
    document.querySelectorAll('.pay-method-btn').forEach(btn => btn.style.background = '#eef0e2');
    document.querySelector('.pay-method-btn[data-method="cod"]').style.background = '#c0ddb0';
  }
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPaymentMethod = btn.dataset.method;
      document.querySelectorAll('.pay-method-btn').forEach(b => b.style.background = '#eef0e2');
      btn.style.background = '#c0ddb0';
    });
  });
  document.getElementById('closeCheckoutBtn')?.addEventListener('click', () => { checkoutModal.style.display = 'none'; });
  document.getElementById('confirmOrderBtn')?.addEventListener('click', () => {
    const name = document.getElementById('buyerName').value.trim();
    const address = document.getElementById('buyerAddress').value.trim();
    if (!name || !address) { alert("Please provide your full name and delivery address."); return; }
    const paymentMap = { cod: "Cash on Delivery", credit: "Credit Card", gcash: "GCash", paymaya: "PayMaya" };
    const total = totalCostPHP(getState().cart);
    alert(`✅ Order Confirmed!\n\nName: ${name}\nAddress: ${address}\nPayment: ${paymentMap[selectedPaymentMethod]}\nTotal: ${formatPHP(total)}\n\nThank you for shopping at GreenLeaf Haven 🌿. Your plants will be delivered soon.`);
    while(getState().cart.length) { dispatch({ type: 'REMOVE_ITEM', payload: { id: getState().cart[0].id } }); }
    checkoutModal.style.display = 'none';
    currentView = 'shop';
    renderShop();
  });
  window.addEventListener('click', (e) => { if (e.target === checkoutModal) checkoutModal.style.display = 'none'; });

  document.getElementById('navLandingBtn')?.addEventListener('click', () => { currentView = 'landing'; renderLanding(); dispatch({ type: 'SET_SEARCH', payload: '' }); searchInput.value = ''; });
  document.getElementById('navShopBtn')?.addEventListener('click', () => { currentView = 'shop'; renderShop(); });
  document.getElementById('cartIconHeader')?.addEventListener('click', () => { currentView = 'cart'; renderCart(); });
  searchInput?.addEventListener('input', (e) => { dispatch({ type: 'SET_SEARCH', payload: e.target.value }); if (currentView === 'shop') renderShop(); });
  renderLanding();