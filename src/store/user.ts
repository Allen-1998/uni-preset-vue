import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  persist: {
    enabled: true,
  },
  state: () => {
    return {
      name: "allen",
    };
  },
  getters: {
    fullName: (state) => {
      return state.name + "_1998";
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
