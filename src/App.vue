<script setup>

import { ref } from 'vue'
import {ModalStore} from './store/ModalStore.js'
import Search from './components/Search.vue'
import Modal from './components/Modal.vue'
import ProductListing from './components/ProductListing.vue'
import AddProduct from './components/AddProduct.vue'

</script>

<template>
   <Search />
   <ProductListing />
   <AddProduct />

  
  </template>