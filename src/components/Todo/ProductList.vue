<template>
    <div>
        <h2>Product List</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - ${{ product.price }}
                <button @click="editProduct(product)">Edit</button>
                <button @click="deleteProduct(product.id)">
                    Delete
                </button>
            </li>
        </ul>
        <product-form
            v-if="editingProduct"
            :product="editingProduct"
            @updateProduct="updateProduct"
        ></product-form>
    </div>
</template>

<script>
export default {
    props: ["products"],
    data() {
        return {
            editingProduct: null,
        };
    },
    methods: {
        deleteProduct(productId) {
            this.$emit("deleteProduct", productId);
        },
        editProduct(product) {
            this.editingProduct = { ...product }; // Create a copy to avoid modifying the original data
        },
        updateProduct(updatedProduct) {
            const index = this.products.findIndex(
                (product) => product.id === updatedProduct.id
            );
            if (index !== -1) {
                this.$set(this.products, index, updatedProduct);
                this.editingProduct = null; // Clear the editing state
            }
        },
    },
};
</script>
