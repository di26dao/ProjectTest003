<template>
  <div style="display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background-color: darkgoldenrod;">
    <div style="text-align: center; background-color:darkcyan; width: 20vw; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <div style="font-size: 2vw; margin-bottom: 20px;">欢迎注册</div>
      <div style="margin-bottom: 20px;">
        <label for="username" style="display: block; margin-bottom: 5px;">Username:</label>
        <input type="text" id="username" v-model="username" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 20px;">
        <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
        <input type="password" id="password" v-model="password" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div>
     
      <div style="margin-bottom: 20px;">
        <label for="phone" style="display: block; margin-bottom: 5px;">Phone:</label>
        <input type="text" id="phone" v-model="phone" required style="width: 100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 10px;">
        <button type="button" @click="SignUp" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">注册</button>
        <button type="button" @click="GoToSignIn" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">去登录</button>
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
const errorMessage = ref('');

const SignUp = async () => {
  try {
    const formData = {
      phone: phone.value,
      username: username.value,
      password: password.value,
    };
    const response = await axios.post('https://test003-houduan-dqf0cwgsged2enfv.canadacentral-01.azurewebsites.net/api/Auth/SignUp', formData);
    //const response = await axios.post('http://localhost:5117/api/Auth/SignUp', formData);
    const apiResponse = response.data;
    if (apiResponse.statusCode === 200) {
      window.alert(apiResponse.message);
      // 注册成功后可以进行其他操作，比如跳转到登录页
      router.push({ name: 'Login' });
    } else {
      errorMessage.value = apiResponse.message;
    }
  } catch (error) {
    console.error('SignUp failed', error);
    if (error.response) {
      const apiResponse = error.response.data;
      errorMessage.value = apiResponse.message || '注册失败，请稍后重试';
    } else {
      errorMessage.value = '网络错误，请检查网络连接';
    }
  }
};

const GoToSignIn = async () => {
  router.push({ name: 'Login' });
};
</script>

<style scoped>

</style>    