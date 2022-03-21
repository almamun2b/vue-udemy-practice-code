const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: '',
      lastName: '',
      // fullname: ''
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;

        setTimeout(function () {
          that.counter = 0;
        }, 2000);

        // this.counter = 0;
      }
    },
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },

  computed: {
    fullname() {
      console.log('Running Again');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    setName(event) {
      this.name = event.target.value;
    },

    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm() {
      alert('submitted');
    },

    resetInput() {
      this.name = '';
    },

    outputFullName() {
      console.log('Running Again');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Ahammad';
    }
  }
});

app.mount('#events');
