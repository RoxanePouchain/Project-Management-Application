<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from "../services/authService";

const router = useRouter();

let username = ref("");
let password = ref("");

function authUsernameInput(event) {
    username = event.target.value
};

function authPasswordInput(event) {
    password = event.target.value
};

const submitForm = async () => {
    try {
        authService.login(username, password);
        router.push('/Project');
    } catch (error) {
        alert(error.message);
    }
};
</script>


<template>
    <main>
        <h1 class="auth-title">Sign In</h1>


        <div class="card">
            <form class="auth-form" action="#" @submit.prevent="submitForm">

                <label for="auth_username">Username</label>
                <input type="text" name="auth_username" id="auth_username" placeholder="Enter your username"
                    @input="authUsernameInput">

                <label for="auth_password">Password</label>
                <input type="password" name="auth_password" id="auth_password" placeholder="Enter your password"
                    @input="authPasswordInput">

                <button type="submit" class="btn btn-dark" @click="authService.login(username, password)">Log In</button>
            </form>

            <span>
                <RouterLink to="/SignUp">Create account</RouterLink>
            </span> <!-- Attention, pas encore lié à une route -->
        </div>

    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-title {
    text-align: center;
    margin-top: 2rem;
    font-size: 36px;
}

.auth-form {
    text-align: center;
    margin-top: 2rem;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form input {
    width: 15rem;
    margin: 1rem;
    font-family: 'Helvetica Neue';
}

.card {
    width: fit-content;
    text-align: center;
}
</style>