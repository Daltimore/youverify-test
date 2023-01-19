<template>
  <el-container>
    <el-header height="72px" class="flex items-center px-8">
      <HeaderComponent @isToggleSidebar="toggleSidebar" />
    </el-header>
    <el-container>
      <transition name="slide">
        <el-aside :class="`${active} bg-secondary text-white`">
          <SidebarComponent />
        </el-aside>
      </transition>

      <el-main class="p-0" style="padding: 0px">
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '@/components/Header.vue'
import SidebarComponent from '@/components/Sidebar.vue'

export default Vue.extend({
  name: 'DefaulLayout',
  components: {
    HeaderComponent,
    SidebarComponent
  },
  data() {
    return {
      active: true as boolean,
    }
  },
  methods: {
    toggleSidebar() {
      this.active = !this.active;
    },
  }
})
</script>

<style>
.el-aside {
  /* display: none; */
  width: 0!important;
  transition: 0.5s;
}

.el-aside.true {
  /* display: block; */
  width: 250px !important;
  transition: 0.5s;
}
body {
  font-family: "BR Sonoma" !important;
}
.slide-enter-active {
	transition: all .7s ease;
}	

.slide-leave-active {
	transition: all .7s ease;
}		

.slide-enter, .slide-leave-active {
	transform: translateX(100%);
}		
</style>