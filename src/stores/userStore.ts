import { defineStore } from 'pinia'
import { ref } from 'vue'

type User = {
  address: string
  id: number
  email: string
  username: string
  name: string
  phone: string
}

export const useUserStore = defineStore('userStore', () => {
  const users = ref<User[]>([
    {
      address: 'new road Number 7682, kilcoole',
      id: 1,
      email: 'john@gmail.com',
      username: 'johnd',
      name: 'john doe',
      phone: '1-570-236-7033',
    },
    {
      address: 'Lovers Ln Number 7267, kilcoole',
      id: 2,
      email: 'morrison@gmail.com',
      username: 'mor_2314',
      name: 'david morrison',
      phone: '1-570-236-7033',
    },
    {
      address: 'Frances Ct Number 86, Cullman',
      id: 3,
      email: 'kevin@gmail.com',
      username: 'kevinryan',
      name: 'kevin ryan',
      phone: '1-567-094-1345',
    },
    {
      address: 'Hunters Creek Dr Number 6454, San Antonio',
      id: 4,
      email: 'don@gmail.com',
      username: 'donero',
      name: 'don romer',
      phone: '1-765-789-6734',
    },
    {
      address: 'adams St Number 245, san Antonio',
      id: 5,
      email: 'derek@gmail.com',
      username: 'derek',
      name: 'derek powell',
      phone: '1-956-001-1945',
    },
    {
      address: 'prospect st Number 124, el paso',
      id: 6,
      email: 'david_r@gmail.com',
      username: 'david_r',
      name: 'david russell',
      phone: '1-678-345-9856',
    },
    {
      address: 'saddle st Number 1342, fresno',
      id: 7,
      email: 'miriam@gmail.com',
      username: 'snyder',
      name: 'miriam snyder',
      phone: '1-123-943-0563',
    },
    {
      address: 'vally view ln Number 1342, mesa',
      id: 8,
      email: 'william@gmail.com',
      username: 'hopkins',
      name: 'william hopkins',
      phone: '1-478-001-0890',
    },
    {
      address: 'avondale ave Number 345, miami',
      id: 9,
      email: 'kate@gmail.com',
      username: 'kate_h',
      name: 'kate hale',
      phone: '1-678-456-1934',
    },
    {
      address: 'oak lawn ave Number 526, fort wayne',
      id: 10,
      email: 'jimmie@gmail.com',
      username: 'jimmie_k',
      name: 'jimmie klein',
      phone: '1-104-001-4567',
    },
  ])

  return {
    users,
  }
})
