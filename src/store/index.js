import { createStore } from 'vuex'
import carList from '@/data/data.json'
import { getValue } from './helper.js'
export default createStore({
    state: {
        carList: [],

        carSelecedType: null,
        bodySelecedType: [],
        brandSelecedType: null,
        modelSelecedType: null,
        minYearsSelecedType: null,
        maxYearSelecedType: null,
        messageError: null,
    },
    getters: {
        getCarList: (state) => state.carList,

        carTypeList: (state) => getValue(state.carList, 'autoType'),
        bodyTypeList: (state) => getValue(state.carList, 'bodyType'),
        listBrand: (state) => getValue(state.carList, 'brand'),
        listModel: (state) => getValue(state.carList, 'model'),
        listYears: (state) => getValue(state.carList, 'year'),

        getCarSelecedType: ({ carSelecedType }) => carSelecedType,
        getBodySelecedType: ({ bodySelecedType }) => bodySelecedType,
        getBrandSelecedType: ({ brandSelecedType }) => brandSelecedType,
        getModelSelecedType: ({ modelSelecedType }) => modelSelecedType,
        getMinYearsSelecedType: ({ minYearsSelecedType }) => minYearsSelecedType,
        getMaxYearSelecedType: ({ maxYearSelecedType }) => maxYearSelecedType,
        getMessageError: ({ messageError }) => messageError,

        filterCarsList: (state) => {
            let autoListFilter = state.carList.filter((auto) => {
                const autoType = !state.carSelecedType || auto.autoType === state.carSelecedType
                const bodyType = !state.bodySelecedType.length || state.bodySelecedType.includes(auto.bodyType)
                const autoBrand = !state.brandSelecedType || auto.brand === state.brandSelecedType
                const autoModel = !state.modelSelecedType || auto.model === state.modelSelecedType
                const minYearAuto = !state.minYearsSelecedType || auto.year >= state.minYearsSelecedType
                const maxYearAuto = !state.maxYearSelecedType || auto.year <= state.maxYearSelecedType

                return autoType && bodyType && autoBrand && autoModel && minYearAuto && maxYearAuto
            })

            if (autoListFilter.length === 0) {
                return (state.messageError = 'Такого авто не має')
            } else state.messageError = null

            return autoListFilter
        },
    },
    mutations: {
        setCarList(state, list) {
            state.carList = list
        },
        setCarSelecedType(state, type) {
            state.carSelecedType = type
        },
        setBrandSelecedType(state, brand) {
            state.brandSelecedType = brand
        },
        setModelSelecedType(state, model) {
            state.modelSelecedType = model
        },
        setMinYearsSelecedType(state, year) {
            state.minYearsSelecedType = year
        },
        setMaxYearSelecedType(state, year) {
            state.maxYearSelecedType = year
        },
        setBodyList(state, bodyType) {
            if (state.bodySelecedType.includes(bodyType))
                state.bodySelecedType = state.bodySelecedType.filter((car) => car !== bodyType)
            else state.bodySelecedType.push(bodyType)
        },
    },
    actions: {
        loadCarList({ commit }) {
            commit('setCarList', carList)
        },
        loadCarSelecedType({ commit }, type) {
            commit('setCarSelecedType', type)
        },
        loadBrandSelecedType({ commit }, brand) {
            commit('setBrandSelecedType', brand)
        },
        loadModelSelecedType({ commit }, model) {
            commit('setModelSelecedType', model)
        },
        loadMinYearsSelecedType({ commit }, year) {
            commit('setMinYearsSelecedType', year)
        },
        loadMaxYearSelecedType({ commit }, year) {
            commit('setMaxYearSelecedType', year)
        },
        loadBodyList({ commit }, type) {
            commit('setBodyList', type)
        },
    },
    modules: {},
})
