<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import { auth } from "../firebaseConfig"
  import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

  const router = useRouter()
  const provider = new GoogleAuthProvider()

  const googleLogin = () => {
  signInWithPopup(getAuth(), provider)
  .then(() => {
    router.push({
      path: '/body'
    })
  })
  .catch(err => {
    alert (err.message)
  })
}
</script>
<template>
  <section class="mx-auto max-w-md rounded-2xl place-items-center justify-center grid my-12 bg-orange-700 pb-14 shadow-lg md:max-w-lg">


    <div class="pt-14">
      <img class="w-48" src="../assets/restaurant.svg">
    </div>
    <div class="pb-4 text-center">
      <p class="text-white">Welcome to my</p>
      <h2 class="font-semibold text-2xl text-white">Restaurant website</h2>
    </div>
  
    <div class="flex border border-1 border-gray-300 rounded-full p-2 gap-6 w-72 cursor-pointer" @click="googleLogin">
      <img class="w-6" src="../assets/google.svg">
      <p class="font-semibold text-white">Continue with google</p>
    </div>

    <div class="flex gap-4 pt-4">
    <div class="cursor-pointer">
      <a href="https://github.com/Paulhakeem" target="_blank">
      <img class="w-12" src="../assets/github.svg">
      </a>
    </div>
      <div class="cursor-pointer">
        <a href="https://www.linkedin.com/in/paul-nyamawi-9244b924b/" target="_blank">
      <img class="w-12" src="../assets/linkedin.svg">
        </a>
    </div>
      <div class="cursor-pointer">
        <a href="https://twitter.com/Hakeemi20" target="_blank">
      <img class="w-12" src="../assets/twitter.svg">
        </a>
    </div>
      <div class="cursor-pointer">
        <a href="https://www.instagram.com/coderpaul18/" target="_blank">
      <img class="w-12" src="../assets/instagram.svg">
        </a>
    </div>
    </div>
      <div class="pt-2">
        <p class="text-gray-500 font-semibold text-white">Made with love❤and care🥰</p>
      </div>
  </section>
</template>
  
  