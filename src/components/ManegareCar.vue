<template>
    <car-selected />
    <div v-if="getMessageError">{{ getMessageError }}</div>
    <car-list :car-list-data="filterCarsList" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CarSelected from './CarSelected'
import CarList from './CarList.vue'

export default {
    name: 'ManegareCar',
    components: {
        CarSelected,
        CarList,
    },
    computed: {
        ...mapGetters(['getCarList', 'filterCarsList', 'getMessageError']),
    },
    created() {
        this.loadCarList()
    },
    methods: {
        ...mapActions(['loadCarList']),
    },
}
</script>

<style lang="scss" scoped></style>
