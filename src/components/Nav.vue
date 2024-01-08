<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand"
                >Home</router-link
            >
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/signup" class="nav-link"
                            >Sign up</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/posts" class="nav-link"
                            >Posts</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/create-post" class="nav-link"
                            >CratePost</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "Nav",
};
</script>
