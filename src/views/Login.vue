<template>
  <div style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background-color: darkgoldenrod;">
    <div style="text-align: center; background-color:darkcyan; width: 20vw; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <div style="font-size: 2vw; margin-bottom: 20px;">欢迎登录</div>
      <!-- <div style="margin-bottom: 20px;">
        <label for="phone" style="display: block; margin-bottom: 5px;">Phone:</label>
        <input type="text" id="phone" v-model="phone" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div> -->
      <div style="margin-bottom: 20px;">
        <label for="username" style="display: block; margin-bottom: 5px;">Username:</label>
        <input type="text" id="username" v-model="username" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 20px;">
        <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
        <input type="password" id="password" v-model="password" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 10px;">
        <button type="button" @click="GoToSignUp" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">注册</button>
        <button type="button" @click="login" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">登录</button>
      </div>
      <div v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const username = ref('');
const password = ref('');
const phone = ref('');
const login = async () => {
  try {
    const formData = {
      username: username.value,
      password: password.value,
      phone: phone.value
    };
    const response = await axios.post('https://test003-houduan-dqf0cwgsged2enfv.canadacentral-01.azurewebsites.net/api/Auth/login', formData);
    localStorage.setItem('token', response.data.Token);
    localStorage.setItem('roleName', response.data.roleName); // 存储角色名
    console.log('Login successful', response.data);
    // 登录成功后跳转到 Dashboard 页面
    router.push({ name: 'Dashboard' });
  } catch (error) {
    console.error('Login failed', error);
  }
};
const GoToSignUp = async () => {
  router.push({ name: 'SignUp' });
};
</script>

<style scoped>

</style>    