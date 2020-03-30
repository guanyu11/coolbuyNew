import {
    fetch as fetchPro
} from "whatwg-fetch"
//简化qs.stringify
function myParams(obj) {
    return Object.keys(obj).map(function (item) {
        return item + '=' + obj[item];
    }).join('&');
}

const get = (url, data) => {
    var str = "";
    for (let key in data) {
        str += "&"+ key + "=" + data[key] 
    }
    url = url + "?" + str.slice(1);

    var result = fetchPro(url, {
        //credentials: 'include'允许将凭据发送到其他域：
        //默认值为credentials“ same-origin”
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*'
        },
    }).then(res=> res.json())
    return result
}


const put = (url, data) => {
    var result = fetchPro(url, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body:JSON.stringify(data) 
    })
    if(url!=="/api/v1.4/shopping_cart/656448/"){
        result=result.then(res=>res.json())
    }
    return result
}
const post = (url, data,options) => {
    console.log(data)
    var result = fetchPro(url, {
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':options?options['Content-Type'] :'application/json;charset=UTF-8'
        },
        body:JSON.stringify(data) 
       
    })
    if(url!=="/api/v1.4/shopping_cart/"){
        result=result.then(res=>res.json())
    }
    return result
}
export default {
    get,
    put,
    post
}