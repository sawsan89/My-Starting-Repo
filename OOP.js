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
}