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

var stop = function(){
   clearTimeout(this.clear);
};

var toaste1 = Toaster()

//Q7-Q10

function makeStopwatch(watch){
  var watchName = watch;
  watch = Stopwatch (watchName);
  return watch;
};

function Stopwatch(watchName) {
     var name = {};
     name.watchID = watchName;
     name.stop;
     name.time = 0;
     name.start = start;
     name.stop = stop;
     name.stopID = 0;
     name.reset = reset;
    return name;
};

var  start = function() {
  var timer = this.time
  var min = 0;
  var hr = 0;
  var nameWatch = this.watchID
  this.stopID = setInterval(function() {
    timer = timer + 1;
    if(timer === 60){min+= 1; timer = 0;}
    if(min === 60){hr+= 1; min =0; timer = 0;}
  console.log('Elapsed time: ' + min + " m and " + timer + 's.' + nameWatch);}, 1000);
};

var stop = function() {
  clearInterval(this.stopID);
};

var reset = function() {
  clearInterval(this.stopID);
  this.time = 0;
    };
    
var watch1 = makeStopwatch("Stopwatch1");
var watch2 = makeStopwatch("Stopwatch2"); 