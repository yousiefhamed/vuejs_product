const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      if (this.cart.indexOf(id) !== -1) {
        this.cart.splice(this.cart.indexOf(id), 1);
      }
    },
  },
});
