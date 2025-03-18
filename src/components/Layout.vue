<template>
    <div class="common-layout">
      <el-container>
        <div style="width: 100vw; height: 100vh;">
          <div style="width: 100vw; height: 5vh; text-align: center; background-color: deepskyblue;">
            <el-header>
              <h1>登陆成功</h1>
            </el-header>
          </div>
          <el-container>
            <div style="width: 100vw; height: 95vh; display: flex;">
              <div style="width: 10vw; height: 95vh;">
                <el-aside width="200px">
                  <div style="width: 10vw; height: 95vh; background-color: coral;">
                    <el-menu :default-active="activeMenu" mode="vertical">
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw; position: relative;" v-if="canShowPage(1)">
                        <el-menu-item index="1" @click="handleMenuClick('Page1')">
                          页面 1
                        </el-menu-item>
                        <el-dropdown class="dropdown-below" trigger="hover">
                          <template #trigger>
                            <span style="display: none;"></span>
                          </template>
                          <template #dropdown>
                            <el-dropdown-menu>
                              <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                              <el-dropdown-item :icon="CirclePlusFilled">
                                Action 2
                              </el-dropdown-item>
                              <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                              <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                          </template>
                        </el-dropdown>
                      </div>
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw;" v-if="canShowPage(2)">
                        <el-menu-item index="2" @click="handleMenuClick('Page2')">页面 2</el-menu-item>
                      </div>
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw;" v-if="canShowPage(3)">
                        <el-menu-item index="3" @click="handleMenuClick('Page3')">页面 3</el-menu-item>
                      </div>
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw;" v-if="canShowPage(4)">
                        <el-menu-item index="4" @click="handleMenuClick('Page4')">页面 4</el-menu-item>
                      </div>
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw;" v-if="canShowPage(5)">
                        <el-menu-item index="5" @click="handleMenuClick('Page5')">页面 5</el-menu-item>
                      </div>
                      <div style="width: 5vw; height: 5vh; margin-left: 2.5vw;" v-if="canShowPage(6)">
                        <el-menu-item index="6" @click="handleMenuClick('Page6')">页面 6</el-menu-item>
                      </div>
                    </el-menu>
                  </div>
                </el-aside>
              </div>
              <div style="width: 90vw; height: 95vh; background-color: darkseagreen;">
                <el-main>
                  <router-view></router-view>
                </el-main>
              </div>
            </div>
          </el-container>
        </div>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck } from '@element-plus/icons-vue';
  
  const router = useRouter();
  const activeMenu = ref('1');
  
  const roleName = localStorage.getItem('roleName');
  
  const canShowPage = (pageNumber) => {
    switch (roleName) {
      case 'SuperAdministrator':
        return true;
      case 'Admin':
        return pageNumber <= 5;
      case 'Manager':
        return pageNumber <= 4;
      case 'User':
        return pageNumber <= 3;
      default:
        return false;
    }
  };
  
  const handleMenuClick = (pageName) => {
    router.push({ name: pageName });
  };
  </script>
  
  <style scoped>
  .el-header {
    background-color: #333;
    color: white;
    line-height: 60px;
    text-align: center;
  }
  
  .el-aside {
    background-color: #f4f4f4;
  }
  
  .el-main {
    padding: 20px;
  }
  
  .dropdown-below {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white; 
    z-index: 1; 
  }
  
  .el-menu-item {
    position: relative; 
  }
  </style>