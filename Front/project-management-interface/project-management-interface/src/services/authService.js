import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + 'login', {
                username: username,
                password: password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    // router.push()
                }

                return response.data;
            });
        
    }

    logout() {
        localStorage.removeItem('user');
        router.push('/')
    }

    register(lastname, firstname, username, password) {
        return axios.post(API_URL + 'signup', {
            lastname: lastname,
            firstname: firstname,
            username: username,
            password: password
        });
    }
}

export default new AuthService();
