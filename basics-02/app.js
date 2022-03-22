const app = Vue.createApp({
    data() {
        return {
            welcomeMessage: "Welcome to my World",
            courseGoalA: "Learning VueJS is Begining",
            courseGoalB: "Learning VueJS is Complete",
            courseGoalC: "<h3>Learning VueJS is Complete</h3>",
            vueLink: "https://github.com/mycodinglab",
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    },
});



app.mount('#user-goal');