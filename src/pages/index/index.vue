<template>
  <view>
    <view>name: {{ name }}</view>
    <view>fullName: {{ fullName }}</view>
    <view @click="user.updateName('777')">updateName</view>
  </view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { userStore } from "@/store/user";

const user = userStore();
const { name, fullName } = storeToRefs(user);
</script>
