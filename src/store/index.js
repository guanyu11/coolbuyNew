import {createStore,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {combineReducers}  from "redux-immutable"
import {composeWithDevTools} from "redux-devtools-extension"
import home from "./reducers/home"
import vendor from "./reducers/vendor"
import find from "./reducers/find"
import classify from "./reducers/classify"
import goodsList from "./reducers/goodsList"
import details from "./reducers/details"
import cart from "./reducers/cart"
import search from "./reducers/search"
const reducer =combineReducers({
    home,
    vendor,
    find,
    classify,
    goodsList,
    details,
    cart,
    search
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store