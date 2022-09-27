import { defineStore } from "pinia"

export const userStore =  defineStore({
  id: 'user',
  persist: {
    // 开启持久化
    enabled: true,
  },
  state: () => {
    return {
      name: '张三',
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
})
