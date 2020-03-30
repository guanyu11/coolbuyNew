export const throttle=(()=>{
    let firstTime=0;
    let timer=0;
    return (callback,time=300)=>{
        clearTimeout(timer);
        let lastTime=new Date().getTime();
        if(lastTime-firstTime>=time){
            callback()
            firstTime=lastTime
        }else{
           timer= setTimeout(()=>{
                callback()
            },time)
        }
    }   
})()