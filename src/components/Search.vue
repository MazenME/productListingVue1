<template>
  <div class="container ">
    <div class="m-5 me-0 flex justify-between items-center flex-wrap">
      <div class="search-bar w-full lg:w-1/3 relative">
        <input
          v-model="ProductStore.searchTerm"
          placeholder="Search Products"
          class="w-full p-2 border border-solid border-[#E5E5E5] rounded-md focus:outline-none"
        />
        <svg
          class="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-[10px]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="sm:w-full mt-4 lg:mt-0 mx-auto justify-center lg:w-2/3 flex lg:justify-end items-center">
        <div class="me-1">
          <label class="text-[14px] me-2" for="sort"> Sort by </label>
          <select
            v-model="ProductStore.sortCase"
            name="sort"
            id="sort"
            class="px-3 py-2 border border-solid border-[#E5E5E5] rounded-sm"
          >
            <option class="mt-3" value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            <option value="Date">Date</option>
            <option value="Low-to-High">Price: Low to High</option>
            <option value="High-to-Low">Price: High to Low</option>
          </select>
        </div>
        <div>
          <button
            @click="modalStore.openModal"
            class="add-product text-[14px] py-2 px-1 md:py-[11px] md:px-[23px] bg-[#D9F99D] text-slate-900 rounded-md"
          >
            <svg
              class="inline-block me-[2px]"
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.33334V16.6667M16.6667 10L3.33334 10"
                stroke="#171717"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Sell item
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { ProductStore } from '@/store/ProductStore';
import { modalStore } from "../store/ModalStore.js";
</script>
