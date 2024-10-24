<template>
<div class="product-card">
    <article>
    <!-- Header: Logo and Support Text -->
    <div class="card-header">
        <img src="https://via.placeholder.com/50" alt="Brand Logo" class="brand-logo">
        <span class="support-text">Podporiť</span>
    </div>

    <!-- Main Product Image -->
    <img src="https://via.placeholder.com/400x300" alt="Product" class="product-image">

    <!-- Product Info: Name and Price -->
    <div class="product-info">
        <h3 class="product-name">Produkt Meno</h3>
        <span class="product-price">€99.99</span>
    </div>

    <!-- Buy Button -->
    <button class="buy-button">Kúpiť</button>

    <!-- Rating Section: Stars -->
    <div class="rating">
        <ul class="rating-stars">
        <li><img src="https://via.placeholder.com/20" alt="Star"></li>
        <li><img src="https://via.placeholder.com/20" alt="Star"></li>
        <li><img src="https://via.placeholder.com/20" alt="Star"></li>
        <li><img src="https://via.placeholder.com/20" alt="Star"></li>
        <li><img src="https://via.placeholder.com/20" alt="Star"></li>
        </ul>
    </div>
    </article>
</div>
</template>

<script>
export default {
setup() {
    return {};
}
};
</script>

<style scoped>
.product-card {
width: 300px;
padding: 20px;
background-color: white;
border-radius: 20px;
border: 5px solid #e6e6e6;
box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
transition: transform 0.4s ease-in-out;
transform:
    perspective(750px)
    translate3d(0px, 0px, -250px)
    rotateX(27deg)
    scale(0.9, 0.9);
}

.product-card:hover {
transform: translate3d(0px, 0px, -250px);
}

/* Other existing styles */
.card-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}

.brand-logo {
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
}

.support-text {
color: #3498db;
font-weight: bold;
}

.product-image {
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
margin-bottom: 20px;
}

.product-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}

.product-name {
font-size: 18px;
font-weight: bold;
color: #333;
}

.product-price {
font-size: 18px;
font-weight: bold;
color: #27ae60;
}

.buy-button {
width: 100%;
padding: 10px;
background-color: #3498db;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.buy-button:hover {
background-color: #2980b9;
}

.rating {
display: flex;
justify-content: center;
margin-top: 20px;
}

.rating-stars {
display: flex;
gap: 5px;
}

.rating-stars img {
width: 20px;
height: 20px;
}
</style>
