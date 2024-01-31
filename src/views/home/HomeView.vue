<template>
    <div class="flex w-full">
        <div class="w-full lg:w-8/12 text-white text-[22px] font-extrabold px-4">
            <div class="flex items-center justify-between w-full h-[60px] text-white text-[17px] font-extrabold border-gray-800 border-b">

                <div class="w-1/2 flex text-center h-[60px] pt-4 cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 transition duration-200 ease-in-out">
                    <RouterLink to="/" class="w-full"><div class="my-auto mt-2"><p class="text-[#5e5c5c]">For you</p></div></RouterLink>
                </div>

                <div class="w-1/2 flex text-center h-[60px] pt-4 cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 transition duration-200 ease-in-out">
                    <RouterLink to="/following" class="w-full"><div class="my-auto mt-2"><p class="text-[#5e5c5c]">Following</p></div></RouterLink>
                </div>
                
            </div>

            <RouterView class="mt-2" />

        </div>

        <div class="hidden lg:block lg:w-4/12 h-screen border-l border-gray-800 px-4 text-white">
            <div class="w-full p-2 mt-2 lg:flex items-center rounded-full hidden bg-[#212327]">
                <span class="material-icons-outlined text-[#5e5c5c]">search</span>
                <input type="text" class="w-full pl-2 appearance-none border-0 bg-[#212327] text-gray-100 placeholder-gray-500 leading-tight focus:ring-0 outline-none" placeholder="Search twitter">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.router-link-exact-active {
    border-bottom: 4px solid #1C9CEF;

    p {
        color: white;
    }
}

</style>