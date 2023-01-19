<template>
  <div id="tasks" class="">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="24 Unassigned" name="first">
        <div v-for="i in 24" :key="i">
          <SingleTask />
        </div>
      </el-tab-pane>
      <el-tab-pane label="12 assigned" name="second">
        <div v-for="i in 12" :key="i">
          <SingleTask />
        </div>
      </el-tab-pane>
      <el-tab-pane label="30 Completed" name="third">
        <div v-for="i in 30" :key="i">
          <SingleTask />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SingleTask from "@/components/SingleTasks.vue";
export default Vue.extend({
  name: 'TaksPage',
  components: {
    SingleTask,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab: any, event: any) {
      console.log(tab, event);
    },
  },
});
</script>

<style>
#tasks .el-tabs__nav-scroll {
  padding: 0px 20px;
}

#tasks .el-tabs__item {
  padding: 0px 20px 0px 0px;
  color: #C4C4C4;
  outline: none;
}

#tasks .el-tabs__item.is-active {
  color: #023a59;
}

#tasks .el-tabs__active-bar {
  background-color: #023a59;
}
</style>