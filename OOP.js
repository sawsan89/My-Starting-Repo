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

var start = function(){
    if (this.count === 0){
   if (this.toast !== "" && this.toast !== undefined && this.toast !== NaN){this.clear = setTimeout(function() {console.log('Ding!');}, 8000);
   this.count = this.count + 1;
   this.toast = this.toast + " is Toasted!"}
   else return "please add toast!"}
   else if (this.toast !== "" && this.toast !== undefined && this.toast !== NaN){this.clear = setTimeout(function() {console.log('Ding!');}, 8000);
   this.toast = this.toast.replace(" is Toasted!" ," is Burned!")}
   else return "please add toast!"
};