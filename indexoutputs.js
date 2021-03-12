var nums =  [24,8,23,32,5,62],
    sum = [5, 8, 23, 24, 32, 62]
    


for (var i = 0; i < nums.length; i++) {
    if (i < nums.length - 1) {
        
        sum += nums[i];
    } else {
        
        product = sum * nums[i];  
    }