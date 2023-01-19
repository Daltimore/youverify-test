<template>
  <div class="">
    <div class="bg-primaryDark py-5 px-8">
      <h1 class="font-bold text-secondary">Cheta And Daughters Limited</h1>
      <span class="text-secondary">RC123456789</span>
    </div>

    <div>
      <nav class="mt-8">
        <ul class="text-secondary">
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/">
            <Office />
            <span class="ml-5">Dashboard</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/agents">
            <Agent />
            <span class="ml-5">Agents</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/tasks">
            <Task />
            <span class="ml-5">Task</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/teams">
            <Team />
            <span class="ml-5">Teams</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/users">
            <User />
            <span class="ml-5">Users</span>
          </NuxtLink>
          <NuxtLink class="py-3 px-8 mb-4 flex items-center" to="/settings">
            <Settings />
            <span class="ml-5">Settings</span>
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Agent from "@/assets/icons/AgentsIcon.vue";
import Office from "@/assets/icons/OfficeIcon.vue";
import Settings from "@/assets/icons/SettingsIcon.vue";
import Task from "@/assets/icons/TasksIcon.vue";
import Team from "@/assets/icons/TeamsIcon.vue";
import User from "@/assets/icons/UserIcon.vue";

export default Vue.extend({
  name: 'SidebarComponent',
  components: {
    Agent,
    Office,
    Settings,
    Task,
    Team,
    User,
  },
});
</script>

<style>

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: white;
  background: #46b2c8;
}
</style>