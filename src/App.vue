<template>
    
  <!-- 
  
  <span class="material-icons">
      more_horiz
  </span>
  
  <span class="material-icons">
      expand_more
  </span> -->
  <div class="fixed w-full">
      <div class="max-w-[1400px] flex mx-auto">
          <div class="w-[60px] h-[100px] max-w-[350px] lg:w-3/12 lg:px-4 lg:mx-auto">
              <div class="p-2 px-3 mb-4">
                  <i class="fa-brands fa-twitter" style="color: #FFFFFF; font-size: 37px;"></i>
              </div>
              <RouterLink to="/"><MenuItem :iconString="'Home'" /></RouterLink>
              <RouterLink to="/"><MenuItem :iconString="'Explore'" /></RouterLink>
              <RouterLink to="/"><MenuItem :iconString="'Notifications'" /></RouterLink>
              <RouterLink to="/"><MenuItem :iconString="'Email'" /></RouterLink>
              <RouterLink to="/"><MenuItem :iconString="'Account'" /></RouterLink>

              <button class="lg:w-full mt-8 ml-2 text-white font-extrabold text-[20px] bg-[#1C9CEF] p-3 rounded-full cursor-pointer">
                  <span class="hidden lg:block">Tweet</span>
                  <div class="buttons block lg:hidden">
                      <span class="material-icons">history_edu</span>
                  </div>
              </button>
          </div>

          <div class="lg:7/12 w-11/12 border-l border-gray-800 relative">
            <div class="bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full">

              <RouterView />
                  
            </div>
          </div>

      </div>
  </div>

  <div id="OverlaySection" class="fixed top-0 left-0 w-full h-screen bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3">
    <div class="bg-black md:max-w-2xl md:mx-auto md:mt-10 md:rouded-xl">

        <div class="flex items-center justify-between p-2 m-2 rounded-full cursor-pointer">
            <div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">
                <div class="buttons block md:hidden">
                    <span class="material-icons text-white">close</span>
                </div>
                <div class="buttons hidden md:block">
                    <span class="material-icons text-white">expand_more</span>
                </div>
            </div> 
            <button :disabled="!tweet" :class="tweet ? 'bg-[#1C9CEF] text-white' : 'bg-[#124D77] text-gray-400'" class="md:hidden font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer">Tweet</button>
        </div>

        <div class="flex w-full">
            <div class="ml-3.5 mr-2">
                <img src="./assets/profile.png" alt="" class="rounded-full" width="55">
            </div>
            <div class="w-[calc(100%-100px)]">
                <div class="inline-block">
                    <div class="flex items-center border border-gray-700 rounded-full">
                        <span class="text-[#1C9CEF] p-0.5 pl-3.5 font-extrabold">Everyone</span>
                        <span class="material-icons text-[#1C9CEF] pr-2 everyone">expand_more</span>
                    </div>
                </div>
                <div>
                    <textarea :onInput="textareaInput" ref="textarea" v-model="tweet" placeholder="What's happening?" cols="30" rows="4" class="w-full bg-black mt-2 focus:ring-0 text-white text-[19px] min-h-[120px] outline-none"></textarea>
                </div>
            </div>
        </div>

    </div>
  </div>

</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';
import { ref } from 'vue';

let createTweet = ref(false)
let tweet = ref('')

let textarea = ref(null)

const textareaInput = (e) => {
    textarea.value.style.height = "auto";
    textarea.value.style.height = `${e.target.scrollHeight}px`;
}

</script>

<style lang="scss" scoped>

.material-icons {
  font-size: 20px;
}

.everyone {
    font-size: 25px;
}

.buttons{
  line-height: 0;
}

</style>
