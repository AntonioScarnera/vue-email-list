const app = new Vue({
    el: '#app',
    data: {
        myemail: [],
    },
    methods:{
        getData(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{

                    let mail = res.data.response;
                    this.myemail.push(mail);
                    console.log(this.myemail)
                }).catch((error)=>{
                    console.log(error)
                })
            }
            this.myemail = [];
        }
    },
    created(){
            this.getData();
    }

})