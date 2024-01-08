<template>
    <div class="container">
        <h3>Post Details</h3>
        <div>
            <p>Id: {{ postDetails?.id }}</p>
            <p>Title: {{ postDetails?.title }}</p>
            <p>Description: {{ postDetails?.body }}</p>
        </div>
        <div>
            <router-link class="btn btn-primary" to="/posts">
                Back to post
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "postDetails",
    data() {
        return { postDetails: {}, id: "" };
    },
    async created() {
        console.log("window", this.$route.params.id);
        this.id = this.$route.params.id;
        const res = await axios.get(`/posts/${this?.id}`);

        this.postDetails = res.data;
    },
};
</script>

<style></style>
