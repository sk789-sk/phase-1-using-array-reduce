const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0

function sum(x,init){
    return init+x
}

totalBatteries = batteryBatches.reduce(sum,0)