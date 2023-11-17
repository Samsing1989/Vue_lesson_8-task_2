<template>
    <lable class="leble">
        Тип транспорта
        <select v-model="carTypeSeleced">
            <option v-for="autoType in carTypeList" :key="autoType" :value="autoType">
                {{ autoType }}
            </option>
        </select>
    </lable>
    <lable class="lable">
        Тип кузова
        <div v-for="bodyType in bodyTypeList" :key="bodyType" class="checkbox">
            {{ bodyType }}
            <input type="checkbox" :value="bodyType" class="checkbox-input" @click="clickCheckbox(bodyType)" />
        </div>
    </lable>
    <lable class="leble">
        Марка
        <select v-model="brandTypeSelection">
            <option v-for="brand in listBrand" :key="brand" :value="brand">
                {{ brand }}
            </option>
        </select>
    </lable>
    <lable class="leble">
        Модель
        <select v-model="modelTypeSelection">
            <option v-for="model in listModel" :key="model" :value="model">
                {{ model }}
            </option>
        </select>
    </lable>
    <lable class="leble">
        Рік
        <select v-model="minYearsSelection">
            <option v-for="year in listYears" :key="year" :value="year">
                {{ year }}
            </option>
        </select>
        <select v-model="maxYearsSelection">
            <option v-for="year in listYears" :key="year" :value="year">
                {{ year }}
            </option>
        </select>
    </lable>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CarSelected',

    computed: {
        ...mapGetters([
            'carTypeList',
            'bodyTypeList',
            'listBrand',
            'listModel',
            'listYears',
            'getCarSelecedType',
            'getBodySelecedType',
            'getBrandSelecedType',
            'getModelSelecedType',
            'getMinYearsSelecedType',
            'getMaxYearSelecedType',
        ]),

        carTypeSeleced: {
            get() {
                return this.getCarSelecedType
            },
            set(value) {
                this.loadCarSelecedType(value)
            },
        },
        brandTypeSelection: {
            get() {
                return this.getBrandSelecedType
            },
            set(value) {
                this.loadBrandSelecedType(value)
            },
        },

        modelTypeSelection: {
            get() {
                return this.getModelSelecedType
            },
            set(value) {
                this.loadModelSelecedType(value)
            },
        },
        minYearsSelection: {
            get() {
                return this.getMinYearsSelecedType
            },
            set(value) {
                this.loadMinYearsSelecedType(value)
            },
        },
        maxYearsSelection: {
            get() {
                return this.getMaxYearSelecedType
            },
            set(value) {
                this.loadMaxYearSelecedType(value)
            },
        },
    },

    methods: {
        ...mapActions([
            'loadCarSelecedType',
            'loadBrandSelecedType',
            'loadModelSelecedType',
            'loadMinYearsSelecedType',
            'loadMaxYearSelecedType',
            'loadBodyList',
        ]),

        clickCheckbox(bodyType) {
            this.loadBodyList(bodyType)
        },
    },
}
</script>

<style lang="scss" scoped></style>
