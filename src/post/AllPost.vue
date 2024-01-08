<template>
    <div>
        <div>
            <h3>Posts</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in postLists" :key="post.id">
                        <td>
                            {{ post.id }}
                        </td>
                        <td>
                            {{ post.title }}
                        </td>
                        <td>{{ post.body.slice(0, 50) }}...</td>
                        <td>
                            <router-link
                                class="btn btn-primary"
                                :to="`/posts/${post.id}`"
                                >Show Details</router-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p></p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AllPost",
    data() {
        return {
            postLists: [],
        };
    },
    async mounted() {
        const res = await axios.get(
            "/posts"
        );
        this.postLists = res.data.slice(0, 5);
    },
};
</script>

<style></style>
