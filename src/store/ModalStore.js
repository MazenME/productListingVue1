import { reactive, ref } from 'vue';

// export const ModalStore = {
//     modal: ref(false),


// };

// reactivity , statemangement , vuetify ,veevalidate , yup castle deeplearning

export class ModalStore {
    constructor () {
        this.isOpen = reactive(false);
    }
    openModal() {
        this.isOpen = true;
    }
    closeModal() {
        this.isOpen = false;
    }
} 

export const modalStore = reactive(new ModalStore());