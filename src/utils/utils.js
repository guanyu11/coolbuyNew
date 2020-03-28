
//节流

// export const throttle=(function(){
//  var fristTime=0;
//  return function(callback,time=300){
//      var lastTime=new Date().getTime();
//      console.log(lastTime,fristTime,"throttle")
//      if(lastTime-fristTime>time){
//          console.log(callback,"callback")
//          callback();
//          fristTime=lastTime;
//      }
//  }
// })

export const throttle=(function(){
    var firstTime=0;
    return function(callback,time=300){
        var  lastTime=new Date().getTime();
        if(lastTime-firstTime>time){
            callback();
            firstTime=lastTime;
        }
    }
})