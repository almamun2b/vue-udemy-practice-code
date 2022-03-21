const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: ''
    };
  }
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
    // setName(event, lastName) {
    //   this.name = event.target.value + ' ' + lastName;
    // },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('submitted');
    },
    // submitForm(event){
    //   alert('submitted');
    //   event.preventDefault();
    // }
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
