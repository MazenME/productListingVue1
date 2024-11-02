<script setup>
import Modal from "./Modal.vue";
import { modalStore } from "../store/ModalStore.js";
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import { convertToBase64 } from "../utils/file.js";

import { ProductStore } from '@/store/ProductStore';


const { errors, handleSubmit, defineField,setFieldValue,resetForm  } = useForm({
  validationSchema: Yup.object({
    image: Yup.mixed()
      .required("This field is Required")
      .test(
        "fileSize",
        "File size is too large",
        (value) => {
        if (typeof value === 'string') return true; 
        return value && value.size <= 2000000; 
      }
      )
      // .test(
      //   "fileType",
      //   "Unsupported file format",
      //   (value) => value && ["image/jpeg", "image/png"].includes(value.type)
      // )
      ,
    name: Yup.string()
      .required("This field is Required")
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be at most 15 characters"),
    price: Yup.number()
      .min(1, "Must be at least 1")
      .required("This field is Required"),
    description: Yup.string()
      .required("This field is Required")
      .min(10, "Must be at least 10 characters")
      .max(300, "Must be at most 300 characters"),
  }),
});

const [image, imageAttrs] = defineField('image');
const [name, nameAttrs] = defineField('name');
const [price, priceAttrs] = defineField('price');
const [description, descriptionAttrs] = defineField('description');


const onSubmit = handleSubmit(values => {
  ProductStore.products.push(values);
  localStorage.setItem('products', JSON.stringify(ProductStore.products));
  resetForm ();
  modalStore.closeModal();
});


const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (file) {
    try {
      const base64 = await convertToBase64(file);
     setFieldValue('image', base64);
      
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  }
};

const openImageUpload = () => document.getElementById("imageInput").click();

</script>



<template>
  <Modal
    :isOpen="modalStore.isOpen"
    title="Add New Product"
    :closeModal="modalStore.closeModal"
  >
    <svg
      @click="modalStore.closeModal"
      class="absolute top-3 right-3 cursor-pointer"
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 11.6667L10 10M10 10L11.6667 8.33333M10 10L8.33333 8.33333M10 10L11.6667 11.6667M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
        stroke="#171717"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <form @submit.prevent="onSubmit">
      <div class="grid grid-cols-1 gap-6">
        <label class="block w-full">
          <span class="text-gray-700 block mb-1">Image</span>
          <div
            class="rounded-md h-20 flex items-center justify-center border border-solid"
          >
            <button
              type="button"
              class="p-2 rounded-md border border-solid border-[#D9F99D] cursor-pointer"
              @click="openImageUpload"
            >
              Upload Image
            </button>
          </div>
          <input
            id="imageInput"
            name="image"
            type="file"
            v-bind="imageAttrs"
            accept="image/*"
            @change="handleImageChange"
            class="hidden"
          />

          <div class="text-red-700">
            {{ 
            image && typeof image === 'string' ? 
            "Image uploaded successfully" : 
            errors.image
            }}
            
          </div>
          
        </label>

        <label class="block">
          <span class="text-gray-700">Name</span>
          <input
            v-model="name"
            v-bind="nameAttrs"
            id="name"
            type="text"
            class="mt-1 p-2 block w-full rounded-md border border-solid"
          />
           <div class="text-red-700">
            {{ errors.name }}
          </div>
        </label>

        <label class="block">
          <span class="text-gray-700">Price</span>
          <input
            v-model="price"
            v-bind="priceAttrs"
            id="price"
            type="number"
            class="mt-1 p-2 block w-full rounded-md border border-solid"
          />
           <div class="text-red-700">
            {{ errors.price }}
          </div>
        </label>

        <label class="block">
          <span class="text-gray-700">Description</span>
          <textarea
            v-model="description"
            v-bind="descriptionAttrs"
            id="description"
            class="mt-1 p-2 block w-full rounded-md border border-solid"
          ></textarea>
            <div class="text-red-700">
            {{ errors.description }}
          </div>
        </label>

        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-solid shadow-sm text-sm font-medium rounded-md text-black bg-[#D9F99D]"
        >
          Add Product
        </button>
      </div>
    </form>
  </Modal>
</template>

