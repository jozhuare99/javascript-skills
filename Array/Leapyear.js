//find the leap year in a year
function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    var new_array = [];

    year_range.forEach(
        function (year) {
            if (test_LeapYear(year))
                new_array.push(year);
        });

    return new_array;
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

// console.log(leap_year_range(2000, 2012));
// solution 1
function checkAllLeapYear(start, end) {
    let sta = parseInt(start);
    let en = parseInt(end);
    let leapYear = [];
    for (let i = sta; i <= en; i++) {
        if (i % 4 === 0) {
            leapYear.push(i);
        }
    }
    console.log(leapYear);
}
// checkAllLeapYear(2000, 2012);
//solution 2
function leapYear2(min, max) {
    const years = [];
    for (let i = min; i <= max; i++) {
        if ((!(i % 4) && i % 100) || !(i % 400)) {
            years.push(i);
        }
    }
    console.log(years);
}

//solution 3
function leap_year(start, end){
    var arr_of_years = [];
    
    for(var i = start; i <= end; i++){
    if(!(i%4 && i%100 && i%400)){
    arr_of_years.push(i);
    }
    }
    
    return arr_of_years;
    }
    
    console.log(leap_year(2000, 2012));
    console.log(0==false);