import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cars: [
            {name: 'Benz', price: 500},
            {name: 'BMW', price: 600},
            {name: 'Tesla', price: 700},
            {name: 'Audi', price: 800}
        ]
    },
    getters: {// In order to change the price //
        saleCars: state => {
            var saleCars = state.cars.map( car => {
                return {
                    name:  car.name +'----',
                    price: car.price / 2,
                };
            });
            return saleCars;
        }
    }
});
