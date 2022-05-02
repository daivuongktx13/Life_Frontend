<template>
<div>
    <h1>{{message}} |</h1>
    <button @click="logout">Logout</button>
</div>
    
</template>

<script>
import axios from 'axios'
export default{
    name: "TempView",
    data() {
        return {
            message: '',
        }
    },
    async created() {
        await axios.get("http://localhost:8080/", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        }).then((response) => {
            this.message = response.data;
        }).catch((error) => {
            console.log(error);
            this.$router.push('login');
        });
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>

<style>
</style>