<template>
  <div id="header" class="items-center flex justify-between w-full">
    <div>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <div
        class="
          w-8
          h-8
          flex
          items-center
          justify-center
          mr-4
          rounded-full
          shadow-md
        "
      >
        <i
          :class="`${rotate} sidebarIcon text-primary el-icon-back cursor-pointer`"
          @click="toggleSidebar"
        ></i>
      </div>
      <div class="header-action hidden md:block">
        <el-input
          v-model="searchValue"
          placeholder="Search for anything here"
          class="input-with-select"
          suffix-icon="el-icon-search"
        >
          <el-select slot="prepend" v-model="select" placeholder="All">
            <el-option label="Restaurant" value="1"></el-option>
            <el-option label="Order No." value="2"></el-option>
            <el-option label="Tel" value="3"></el-option>
          </el-select>
        </el-input>
      </div>
    </div>

    <div>
      <div class="flex items-center">
        <div class="hidden md:block relative p-2 rounded-lg bg-light">
          <Notify />
          <span
            class="
              h-4
              w-4
              flex
              justify-center
              items-center
              rounded-full
              bg-red
              absolute
              top-0
              right-0
              text-white text-center
            "
          >
            <span class="text-white text-xs">2</span>
          </span>
        </div>
        <img
          class="hidden md:block ml-5 rounded-full"
          src="/user-1.png"
          alt=""
        />
        <el-dropdown class="ml-5">
          <span class="el-dropdown-link">
            Solomon<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from "@/assets/icons/Logo.vue";
import Notify from "@/assets/icons/NotifyIcon.vue";

export default Vue.extend({
  name: 'HeaderComponent',
  components: {
    Logo,
    Notify,
  },
  data() {
    return {
      rotate: false,
      searchValue: '',
      select: '',
    };
  },
  methods: {
    toggleSidebar() {
      this.rotate = !this.rotate;
      this.$emit("isToggleSidebar");
    },
  },
})
</script>

<style>
#header .header-action .el-input-group__prepend {
  border: 1px solid white;
  border-right-width: 0px;
}
#header .el-select {
  width: 94px;
}

.sidebarIcon.true {
  transition: all 0.45s;
  transform: rotate(180deg);
}

.sidebarIcon.false {
  transition: all 0.45s;
  transform: rotate(0deg);
}

#header .el-input-group {
  height: 58px;
  width: 890px;
  background: #f1f1f1;
}

#header .el-input__inner {
  height: 58px;
  background: #f1f1f1;
  padding: 0 24px 0 14px;
  border: none;
  border-left: 1px solid #E6E6E6;
}
#header .el-select .el-input__inner {
  border-left: 1px solid white;
}

#header .el-input__suffix {
  right: 17px;
}

#header .el-dropdown {
  color: #023a59;
}
@media (max-width: 990px) {
  #header .el-input-group {
    height: 58px;
    width: 300px;
    background: #f1f1f1;
  }
}
</style>