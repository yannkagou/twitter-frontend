<template>
    <div class="w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out">
            <div class="flex items-center">
                <span class="material-icons-outlined text-white">{{ icon }}</span>
                <span class="hidden lg:block text-white font-semibold text-[23px] pl-4 mt-0.5">{{ iconString }}</span>
            </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    iconString: String
})

let icon = ref('')

if (props.iconString === 'Home') icon.value = 'home'
if (props.iconString === 'Explore') icon.value = 'explore'
if (props.iconString === 'Notifications') icon.value = 'notifications'
if (props.iconString === 'Email') icon.value = 'email'
if (props.iconString === 'Account') icon.value = 'account_circle'

</script>

<style lang="scss" scoped>

.material-icons-outlined {
    font-size: 30px;
}

</style>

