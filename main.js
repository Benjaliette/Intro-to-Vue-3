const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            onSale: false,
            variantIndex: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateIndex(variantIndex) {
            this.variantIndex = variantIndex
        }
    },

    computed: {
      title() {
        return `${this.brand} ${this.product}`
      },

      image() {
        return this.variants[this.variantIndex].image
      },

      inStock() {
        return this.variants[this.variantIndex].quantity
      },

      isOnSale() {
        return this.onSale ? `${this.title} is on sale` : this.title
      }
    }
})
