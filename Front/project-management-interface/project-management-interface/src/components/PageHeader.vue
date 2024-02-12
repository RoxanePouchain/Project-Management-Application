<script setup>
import authService from '@/services/authService';
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

let isLoggedIn = ref(false);

</script>

<template>
    <header>
        <nav class="navbar">
            <div class="entire-logo">
                <img class="logo" src="../assets/images/20231219_101802_0000.webp" alt="Logo" width="60">
                <span class="site-name">PROJECT MANAGEMENT INTERFACE</span>
            </div>
            <ul>
                <li>
                    <span v-if="isLoggedIn" class="is-logged-in-btn-true">
                        <RouterLink to="/Project">Projects</RouterLink>
                    </span>
                </li>
                <li>
                    <div class="is-logged-in-btn">
                        <span v-if="!isLoggedIn" @click="isLoggedIn = !isLoggedIn" class="is-logged-in-btn-true">
                            <RouterLink to="/">Log In</RouterLink>
                        </span>

                        <span v-else @click="isLoggedIn = !isLoggedIn" class="is-logged-in-btn-false">
                            <RouterLink to="/">Log Out</RouterLink>
                        </span>

                    </div>
                    <!-- <RouterLink to="/">Log In</RouterLink> -->
                </li>
                <!-- <li>
                    <RouterLink to="/">Log Out</RouterLink>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.navbar {
    background-color: rgb(14, 14, 14);
    margin: 0;
    padding: 0;
    height: 5em;
    font-size: 16px;
}

nav ul {
    display: flex;
    margin-right: 3rem;
    margin-bottom: 0%;
}

nav ul li {
    flex-direction: row;
    list-style-type: none;
    font-size: 18px;
}

nav ul li a {
    color: var(--vt-c-white-mute);
    text-decoration: none;
    padding-left: 2rem;
    padding-right: 2rem;
}

.footer {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 4vh;
    color: var(--background-black-soft);
    background-color: var(--vt-c-white-soft);
    align-items: center;
    justify-content: center;
}

.entire-logo {
    margin-left: 1rem;
}

.logo {
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 50%;
}

.site-name {
    color: var(--vt-c-white-soft);
    font-size: 30px;
    font-weight: 500;
    margin-top: 2rem;
}
</style>