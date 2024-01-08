<template>
    <div id="app">
        <router-view name="navigation"></router-view>
        <div class="auth-wrapper">
            <div class="auth-inner">
                <router-view></router-view>
                <!-- <Login
                    @rowEvent="handleRowFile"
                    :confidentialData="confidentialData"
                /> -->
                <!-- <h1>Vue.js 2 CRUD App</h1>
                <product-form @addProduct="addProduct"></product-form>
                <product-list
                    :products="products"
                    @deleteProduct="deleteProduct"
                ></product-list> -->
            </div>
        </div>
    </div>
</template>

<script>

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ProductList from "./components/Todo/ProductList.vue";
import ProductForm from "./components/Todo/ProductForm.vue";
export default {
    name: "App",
    components: { Home, Login, ProductList, ProductForm },
    data() {
        return {
            confidentialData: "Its Row file",
            products: [
                { id: 1, name: "Product 1", price: 20 },
                { id: 2, name: "Product 2", price: 30 },
                // Add more initial products as needed
            ],
        };
    },
    methods: {
        handleRowFile(confimationFromAgent) {
            console.log("confimationFromAgent", confimationFromAgent);
        },
        addProduct(product) {
            this.products.push(product);
        },
        deleteProduct(productId) {
            this.products = this.products.filter(
                (product) => product.id !== productId
            );
        },
    },
};
</script>

<style>
body,
html,
#app,
#root,
.auth-wrapper {
    width: 100%;
    height: 100%;
}
#app {
    text-align: center;
}
.auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
}
.auth-inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}
</style>
