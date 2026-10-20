const baseURL = 'https://jsonplaceholder.typicode.com/todos'

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to axios test',
            list: [],
            getId: null,

        }
    },
    methods: {
        myMethod() {

        },
        getAll() {
            console.log('All data');
            axios
                .get(baseURL)
                .then((response) => {
                    this.list = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getById() {
            console.log('Getting todo with id: ' + this.getId);
            axios
                .get(baseURL + '/' + this.getId)
                .then((response) => {
                    this.list = [response.data]
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        clearList() {
            console.log('Cleared list');
            this.list = [];
        },
    },
    computed: {
        myComputed() {
            return ''
        },
    }
})