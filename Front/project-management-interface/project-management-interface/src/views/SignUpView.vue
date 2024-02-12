<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from '../services/authService';

let lastname = ref('');
let firstname = ref('');
let username = ref('');
let password = ref('');
const router = useRouter();

function createLastnameInput(event) {
    lastname = event.target.value
};

function createFirstnameInput(event) {
    firstname = event.target.value
};

function createUsernameInput(event) {
    username = event.target.value
};

function createPasswordInput(event) {
    password = event.target.value
};

const isValidUsername = (username) => {
    const regex = /^[a-zA-Z\-]+$/;
    return regex.test(username);
};

const isValidPassword = (password) => {
    const regex = /^[A-Za-z]\w{7,14}$/;
    return regex.test(password);
};

const submitForm = () => {
    if (!isValidUsername(username.value)) {
        alert('Invalid username');
        return;
    }
    if (!isValidPassword(password.value)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.');
        return;
    }

    try {
        authService.register(lastname, firstname, username, password);
        alert('Account created successfully!');
        router.push('/');
    } catch (error) {
        alert(error.message);
    }
}



</script>

<template>
    <main>
        <h1 class="signup-title">Create account</h1>


        <div class="card">
            <form class="signup-form" action="#">

                <label for="signup_lastname">Lastname</label>
                <input type="text" name="signup_lastname" id="signup_lastname" placeholder="Enter your lastname" @input="createLastnameInput">

                <label for="signup_firstname">Firstname</label>
                <input type="text" name="signup_firstname" id="signup_firstname" placeholder="Enter your firstname" @input="createFirstnameInput">

                <label for="signup_username">Username</label>
                <input type="text" name="signup_username" id="signup_username" placeholder="Enter your username" @input="createUsernameInput">

                <label for="signup_password">Password</label>
                <input type="password" name="signup_password" id="signup_password" placeholder="Enter your password" @input="createPasswordInput">

                <button type="submit" class="btn btn-dark" @click="submitForm()">Sign Up</button>
            </form>

            <span>
                <RouterLink to="/">Sign In</RouterLink>
            </span> 
        </div>

    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signup-title {
    text-align: center;
    margin-top: 2rem;
    font-size: 36px;
}

.signup-form {
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