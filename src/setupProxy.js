
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",createProxyMiddleware({
        target:"https://coolbuy.com",
        changeOrigin:true
    }))
    app.use("/1",createProxyMiddleware({
        target:"https://7tn0u2fl3q-3.algolianet.com",
        changeOrigin:true
    }))
}