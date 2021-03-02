<template>
    <div id="product-list-two">
        <h2>Car List Two [without Offer on cars]</h2>
        <ul>
            <li v-for="car in cars">
                <span class="name">{{ car.name }}</span><br>
                <span class="price">£{{ car.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   computed:{
        cars(){
            return this.$store.state.cars;
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
  background-color: #f5e44e;
  box-shadow: 6px 9px 4px #568281;
}
li{
  color:#06044d;
  margin-button: 40px;
  padding:20px 30px;
}

</style>
