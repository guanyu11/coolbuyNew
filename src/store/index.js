import {createStore,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {combineReducers}  from "redux-immutable"
import {composeWithDevTools} from "redux-devtools-extension"
import home from "./reducers/home"
import vendor from "./reducers/vendor"
import find from "./reducers/find"
import article from "./reducers/article"

const reducer =combineReducers({
    home,
    vendor,
    find,
    article
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store