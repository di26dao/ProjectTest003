<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="form.username" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="form.password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  username: '',
  password: ''
});

const login = async () => {
  try {
    const response = await axios.post('https://test0030317-dyg3fmaacveddgda.canadacentral-01.azurewebsites.net/api/Auth/login', form.value);
    
    localStorage.setItem('token', response.data.Token);
    localStorage.setItem('roleName', response.data.roleName); // 存储角色名
    console.log('Login successful', response.data);
    // 登录成功后跳转到 Dashboard 页面
    router.push({ name: 'Dashboard' });
  } catch (error) {
    console.error('Login failed', error);
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>