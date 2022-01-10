<template>
<header>
    <ul>
        <router-link to="/" >
        <li>
            Home
        </li>
        </router-link>
       <router-link to="/generation2" >
        <li>
            Generation 2
        </li>
        </router-link>
       <router-link to="/generation3" >
        <li>
            Generation 3
        </li>
        </router-link>
       <router-link to="/generation4" >
        <li>
            Generation 4
        </li>
        </router-link>
       <router-link to="/generation5" >
        <li>
            Generation 5
        </li>
        </router-link>
    </ul>
</header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding-top: 10px;
    padding-inline-start: 0;
}
li{
    margin: 0px 10px;
    cursor: pointer;
    width: 150px;
    border: 1px solid rgb(3, 76, 136);;
    padding: 5px 0px;
    border-radius: 6px;
    background-color: rgb(3, 51, 90);
    color:#fff;
}
li:hover{
        background-color: rgba(3, 51, 90, 0.555);
        color: #000;
}
a{
    text-decoration: none;
}
</style>
