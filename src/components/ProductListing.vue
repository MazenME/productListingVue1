<script setup>
import { ProductStore } from "../store/ProductStore.js";
import { ref } from "vue";
</script>

<template>
  <div class="container">
    <div
      class="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] p-0 rounded-md"
    >
      <div v-for="product in ProductStore.searchResults" class="w-fit mx-auto">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-[326px] h-[326px] object-cover rounded-md"
        />
        <div class="data flex justify-between items-center">
          <div>
            <p class="text-[13px] font-medium mt-2">{{ product.name }}</p>
            <p class="text-gray-500 mt-1">{{ product.description }}</p>
            <p class="text-gray-500 mt-1">{{ product.price }}</p>
          </div>
          <div
            class="fav p-2 border border-solid border-[#E5E5E5] rounded-md cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59835 5.26501C2.13388 6.72947 2.13388 9.10384 3.59835 10.5683L10 16.97L16.4017 10.5683C17.8661 9.10384 17.8661 6.72947 16.4016 5.26501C14.9372 3.80054 12.5628 3.80054 11.0983 5.26501L10 6.3634L8.90165 5.26501C7.43718 3.80054 5.06282 3.80054 3.59835 5.26501Z"
                stroke="#171717"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

