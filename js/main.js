const baseURL = 'https://jsonplaceholder.typicode.com/todos'

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to axios test',
            list: [],

        }
    },
    methods: {
        myMethod() {

        },
        getAll() {
            console.log('All data');
            axiox
                .get(baseURL)
                .then((response) => { this.list = response })
                .catch((error) => { console.log(error) })
        }
    },
    computed: {
        myComputed() {
            return ''
        },
    }
})