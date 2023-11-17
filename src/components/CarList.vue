<template>
    <div class="car-container">
        <a v-for="car in carListData" :key="car.id" :href="car.link" class="items">
            <div class="image"><img :src="car.image" /></div>
            <div class="body">
                <div class="name">{{ car.name }}{{ car.year }}</div>
                <div class="price">Ціна - {{ car.price }}</div>
                <div class="column">
                    <div>Пробіг: {{ car.mileage }}</div>
                    <div>Локація: {{ car.location }}</div>
                    <div>Пальне / об'єм: {{ car.petrol }}</div>
                    <div>Трансмісія: {{ car.transmission }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'CarList',

    props: {
        carListData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: none;
}

.items {
    max-width: 700px;
    background-color: rgba(128, 128, 128, 0.19);
    display: flex;

    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
}
.image {
    img {
        max-width: 200px;
    }
}
.body {
    padding: 20px;
}
.name {
    font-size: 24px;
    margin-bottom: 10px;
}
.price {
    color: red;
    font-size: 24px;
    margin-bottom: 10px;
}
.column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
</style>
