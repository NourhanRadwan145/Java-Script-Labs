function convertTo12Hour(hour) {
    if (hour === 0) {
        return '12AM';
    } else if (hour === 12) {
        return '12PM';
    } else if (hour < 12) {
        return hour + 'AM';
    } else if (hour >12 && hour <=24) {
        return (hour - 12) + 'PM';
    } else {
        return 'Not Valid'
    }
    
    
    }


// Test cases
console.log(convertTo12Hour(0));  // Output: 12AM
console.log(convertTo12Hour(11)); // Output: 11AM
console.log(convertTo12Hour(13)); // Output: 1PM
console.log(convertTo12Hour(22)); // Output: 10 PM
console.log(convertTo12Hour(26)); // Output: Not Valid




