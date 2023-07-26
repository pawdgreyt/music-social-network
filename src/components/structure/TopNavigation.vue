<template>
    <nav class="w-full px-4 bg-gray-100 relative z-20 text-black-200">
        <div
            class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm"
        >
            <div class="h-full flex items-center">
                <router-link to="/" class="flex justify-center items-center">
                    <div class="text-black text-2xl"><b>MSN</b></div>
                </router-link>
            </div>
            <div class="h-full flex items-center">
                <FullScreenModal />
            </div>
        </div>
    </nav>
</template>

<script setup>
import FullScreenModal from "./FullScreenModal.vue";
</script>
