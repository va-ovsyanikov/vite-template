import {createStore} from 'vuex'
import module from './modules/module.js'

const  store = createStore({
    modules:{
        module
    }
})
export default store
