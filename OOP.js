//Q1-Q6
function Toaster() {
     var instance = {};
     instance.on = on;
     instance.off = off;
     instance.addToast = addToast;
     instance.eject = eject;
     instance.start = start;
     instance.stop = stop;
     instance.clear = 0;
     instance.count = 0;
    return instance;
};

var on = function(){
  return true;
};
var off = function(){
  return false;
};
var addToast = function(type){
   this.toast = type;
};
var eject = function(){
  if (this.toast != ""){
    var type = this.toast;
    this.toast = undefined;
    return type;
  } return "no taost";
};