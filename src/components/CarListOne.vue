<template>
    <div id="car-list-one">
        <h2>Car List One [with offer]</h2>
        <ul>
            <li v-for="car in saleCars">
                <span class="name">{{ car.name }}</span><br>
                <span class="price">£{{ car.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        cars(){
            return this.$store.state.cars
        },
        saleCars(){
            return this.$store.getters.saleCars
        }
    }
}
</script>

<style scoped>
h2{
  color:red;
}
ul{
  background-color: #67f05b;
  box-shadow: 8px 15px 5px #568281;
}
li{
  color:#06044d;
  margin-button: 40px;
  padding:10px 15px;
}

</style>
