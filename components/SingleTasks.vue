<template>
  <div class="py-5 px-4 flex border-b">
    <div class="">
			<div class="bg-primary rounded-full w-8 h-8 flex justify-center items-center">
				<i class="text-white el-icon-plus font-black"></i>
			</div>
			<span class="text-[#828282] text-xs md:text-sm leading-3">Assign Agent</span>
		</div>
    <div class="flex items-center justify-between w-full">
      <div class="w-11/12 text-sm">
        <h1 class="">Abiodun Olawale Solomon</h1>
        <p class="text-lightgrey mt-1">12b Emmanuel Hign street, Sur...</p>
        <div class="flex mt-1">
					<Bank />
					<span class="ml-2 text-lightgrey" >Sterling Bank PLC</span>
				</div>
				<p class="mt-4 text-blue-500">A day ago</p>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bank from "@/assets/icons/BankIcon.vue";

export default Vue.extend({
	components: {
		Bank
	}
});
</script>

<style>
</style>