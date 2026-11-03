const items=[
  {name:'Авокадо спелый',category:'Овощи',origin:'Кения · отборный',unit:'1 шт.',price:145,emoji:'🥑',bg:'#edf2df',tag:'Хит продаж'},
  {name:'Клубника сладкая',category:'Фрукты',origin:'Местная ферма',unit:'250 г',price:320,emoji:'🍓',bg:'#f8e9e3',tag:'Свежий сбор'},
  {name:'Молоко фермерское',category:'Молочное',origin:'Чуйская долина',unit:'1 л',price:110,emoji:'🥛',bg:'#e8eff1',tag:'Натуральное'},
  {name:'Хлеб на закваске',category:'Бакалея',origin:'Пекарня «Тёплый дом»',unit:'450 г',price:95,emoji:'🍞',bg:'#f5ecdc',tag:'Из печи'},
  {name:'Апельсины сладкие',category:'Фрукты',origin:'Турция · сочные',unit:'1 кг',price:210,emoji:'🍊',bg:'#fbefdf',tag:'Сезонное'},
  {name:'Томаты розовые',category:'Овощи',origin:'Теплица рядом',unit:'500 г',price:185,emoji:'🍅',bg:'#f6e9e4',tag:'Фермерское'},
  {name:'Йогурт натуральный',category:'Молочное',origin:'Без добавок',unit:'300 г',price:125,emoji:'🥣',bg:'#f1ecdf',tag:'Без сахара'},
  {name:'Сок яблочный',category:'Напитки',origin:'100% сок',unit:'1 л',price:175,emoji:'🧃',bg:'#edf1df',tag:'Натуральный'}
];
let cart=0,activeCategory='Все';
const grid=document.getElementById('productGrid');
function render(){const q=document.getElementById('search').value.trim().toLowerCase();const shown=items.filter(p=>(activeCategory==='Все'||p.category===activeCategory)&&p.name.toLowerCase().includes(q));grid.innerHTML=shown.length?shown.map(p=>`<article class="product"><div class="product-art" style="--bg:${p.bg}"><span class="tag">${p.tag}</span><button class="heart" aria-label="В избранное" onclick="this.classList.toggle('liked');this.textContent=this.classList.contains('liked')?'♥':'♡'">♡</button><span class="fruit">${p.emoji}</span></div><div class="product-info"><span class="origin">${p.origin}</span><h3>${p.name}</h3><span class="unit">${p.unit}</span><div class="product-bottom"><span class="price">${p.price} <small>сом</small></span><button class="add" aria-label="Добавить ${p.name}" onclick="addToCart('${p.name}')">+</button></div></div></article>`).join(''):'<p style="color:#778075;grid-column:1/-1">Ничего не найдено. Попробуйте изменить запрос.</p>'}
function filterCategory(category,button){activeCategory=category;document.querySelectorAll('.category').forEach(b=>b.classList.remove('active'));if(button)button.classList.add('active');else document.querySelector('.category').classList.add('active');render()}
function word(n){return n%10===1&&n%100!==11?'товар':n%10>=2&&n%10<=4&&!(n%100>=12&&n%100<=14)?'товара':'товаров'}
let toastTimer;function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2100)}
function addToCart(name){cart++;document.getElementById('cartCount').textContent=cart;showToast(name+' добавлен в корзину')}
document.getElementById('search').addEventListener('input',render);render();
