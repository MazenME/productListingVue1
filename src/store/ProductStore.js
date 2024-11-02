import { computed, reactive } from 'vue';

export const ProductStore = reactive({
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    searchTerm: '',
    sortCase: 'Date',

    searchResults: computed(() => {
        let filteredProducts = ProductStore.products.filter((product) =>
            product.name.toLowerCase().includes(ProductStore.searchTerm.toLowerCase())
        );

        filteredProducts.sort((a, b) => {
            switch (ProductStore.sortCase) {
                case "A-Z":
                    return a.name.localeCompare(b.name);
                case "Z-A":
                    return b.name.localeCompare(a.name);
                case "Low-to-High":
                    return a.price - b.price;
                case "High-to-Low":
                    return b.price - a.price;
                case "Date":
                    return new Date(b.date) - new Date(a.date);
                default:
                    return 0;
            }
        });

        return filteredProducts;
    })
});
