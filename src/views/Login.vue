<template>
    <div>
        <h3>{{ confidentialData }}</h3>
        <button @click="sendConfimationToRow">Confirm</button>
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
                required
            />

            <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
            />

            <button
                class="w-100 btn btn-lg btn-primary"
                type="submit"
            >
                Sign in
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    props: ["confidentialData"],
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        sendConfimationToRow() {
            this.$emit("rowEvent", "I got File");
        },
    },
};
</script>

<style></style>
