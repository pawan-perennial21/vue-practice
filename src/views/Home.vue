<template>
    <div>
        <button @click="gotToPost">Got To Post</button>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        gotToPost() {
            this.$router.replace("/posts");
        },
    },
};
</script>

<style></style>
