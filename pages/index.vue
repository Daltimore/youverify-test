<template>
  <main class="min-h-screen">
    <div class="top-0 w-full h-10 bg-white"></div>
    <div class="w-full h-full relative hidden md:block">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31716.944670037148!2d3.4347603500000004!3d6.44306085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1674115222850!5m2!1sen!2sng"
        width="100%"
        height="900"
        style="border: 0"
        loading="lazy"
      ></iframe>
      <div class="z-50 container-card absolute h-full top-0 left-0 flex">
        <div :class="`${active_left} overflow-scroll left-card bg-white`">
          <div class="bg-primary text-white px-4 py-2">Task</div>
          <Tasks />
        </div>
        <div
          class="
            bg-black
            flex
            justify-center
            items-center
            h-10
            w-10
            cursor-pointer
          "
          @click="toggleLeft"
        >
          <i :class="`${rotate_left} sidebarIcon text-white el-icon-arrow-left`"></i>
        </div>
      </div>
      <div class="z-50 absolute h-full top-0 right-0 flex">
        <div class="bg-black flex justify-center items-center h-10 w-10 cursor-pointer" @click="toggleRight">
          <i :class="`${rotate_right} sidebarIcon text-white el-icon-arrow-right`"></i>
        </div>
        <div :class="`${active_right} overflow-scroll right-card bg-white`">
          <div
            class="
              bg-primary
              text-white
              px-4
              py-2
              flex
              justify-between
              items-center
            "
          >
            <span> Agents </span>
            <i class="el-icon-search cursor-pointer"></i>
          </div>
          <Agents />
        </div>
      </div>
    </div>
    <div class="block md:hidden">
      <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="Tasks" name="first">
            <div v-for="i in 12" :key="i">
              <SingleTask />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Agents" name="second">
            <Agents />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31716.944670037148!2d3.4347603500000004!3d6.44306085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1674115222850!5m2!1sen!2sng"
        width="100%"
        height="500"
        style="border: 0"
        loading="lazy"
      ></iframe>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Tasks from '@/components/Tasks.vue'
import Agents from '@/components/Agents/Agent.vue'
import SingleTask from "@/components/SingleTasks.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Tasks,
    Agents,
    SingleTask,
  },
  layout: 'dashboard',
  data() {
    return {
      activeName: "first",
      active_left: true,
      active_right: true,
      rotate_left: false,
      rotate_right: false
    }
  },
  methods: {
    toggleLeft() {
      this.active_left = !this.active_left;
      this.rotate_left = !this.rotate_left;
    },
    toggleRight() {
      this.active_right = !this.active_right;
      this.rotate_right = !this.rotate_right;
    },
    handleClick(tab: any, event: any) {
      console.log(tab, event);
    },
  },
})
</script>

<style scoped>
.container-card {
  width: 391px;
}

.sidebarIcon.true {
  transition: all 0.45s;
  transform: rotate(180deg);
}

.sidebarIcon.false {
  transition: all 0.45s;
  transform: rotate(0deg);
}

.left-card {
  /* display: none; */
  width: 0!important;
  transition: 0.5s;
}

.left-card.true {
  /* display: block; */
  width: 351px !important;
  transition: 0.5s;
}

.right-card {
  /* display: none; */
  width: 0!important;
  transition: 0.5s;
}

.right-card.true {
  /* display: block; */
  width: 351px !important;
  transition: 0.5s;
  overflow: scroll;
}

* >>> .el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: 0px;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}
* >>> .el-tabs--card>.el-tabs__header .el-tabs__item {
  border-left: 0px;
}

* >>> .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: transparent !important;
  background: #ffffff;
}


* >>> .el-tabs--card>.el-tabs__header .el-tabs__item {
  text-align: center;
  width: 50% !important;
}

* >>> .el-tabs--card>.el-tabs__header .el-tabs__nav {
  padding: 0.6rem;
  width: 100%;
}

@media (max-width: 990px) {
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    text-align: center;
    width: 50% !important;
    border-radius: 5px;
  }
}

</style>
