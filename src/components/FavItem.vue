<template>
    <div class="row cart-item-row">
        <div class="col-md-4">
            <div class="row"> MEAL HERE
            </div>
            <div class="row cart-remove-button">
                <div class="col-md-12">
                    <button @click="removeItem()" class="btn btn-danger btn-block">Remove Item</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name : "CartItem",
    props : ['meal'],
    components : {
        Card
    },
    setup(props){
        const store = useStore();
        let favourites = computed(function () {
            return store.state.favourites
        });

        function removeItem(){
            store.commit("REMOVE_FAVOURITE", props.meal)
        };

        return {
            favourites,
            removeItem
        }
    }
    
}
</script>
<style scoped>
.cart-item-row{
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
}
.cart-remove-button{
    margin-top: 10px;
}
</style>