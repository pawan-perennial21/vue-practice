<template>
  <div>
    <h2>{{ editing ? 'Edit' : 'Add' }} Product</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Product Name:</label>
      <input v-model="productName" type="text" id="name" required>

      <label for="price">Product Price:</label>
      <input v-model.number="productPrice" type="number" id="price" required>

      <button type="submit">{{ editing ? 'Update' : 'Add' }} Product</button>
      <button v-if="editing" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      editing: false,
      productName: '',
      productPrice: 0,
    };
  },
  watch: {
    product: {
      immediate: true,
      handler(newProduct) {
        if (newProduct) {
          this.editing = true;
          this.productName = newProduct.name;
          this.productPrice = newProduct.price;
        } else {
          this.editing = false;
          this.productName = '';
          this.productPrice = 0;
        }
      },
    },
  },
  methods: {
    submitForm() {
      const updatedProduct = {
        ...this.product,
        name: this.productName,
        price: this.productPrice,
      };

      if (this.editing) {
        this.$emit('updateProduct', updatedProduct);
      } else {
        this.$emit('addProduct', updatedProduct);
      }

      this.resetForm();
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.editing = false;
      this.productName = '';
      this.productPrice = 0;
      this.$emit('updateProduct', null); // Clear the product being edited
    },
  },
};
</script>