<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-control">
                <label>Title</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="title"
                />
            </div>
            <div class="form-control">
                <label>Body</label>
                <textarea
                    type="textarea"
                    class="form-control"
                    v-model="body"
                />
            </div>
            <button>Create Post</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import uuid from "uuid";
export default {
    name: "createPost",
    data() {
        return {
            title: "",
            body: "",
        };
    },
    methods: {
        async handleSubmit() {
            const postData = {
                title: this.title,
                body: this.body,
                userId: uuid,
            };
            const res = await axios.post(
                "/posts",
                postData
            );
            if (res.status === 201) {
                this.$router.push("/posts");
            }
        },
    },
};
</script>

<style></style>
