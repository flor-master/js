var date = new Date();
var month = date.getMonth();
//console.log(date.getFullYear(), date.getMonth() );
var firstDayDate = new Date( date.getFullYear() + ' ' + date.getMonth() + ' 1');
//console.log(firstDayDate.getDay());


Date.prototype.daysInMonth = function( year, month) {

    console.log(year, month);
    year = (year ? year : this.getFullYear());
    month = (month ? month : this.getMonth() );
    return 33 - new Date(year, month, 33).getDate();
};
var d = new Date();
console.log( new Date().daysInMonth(2016, 4) );

