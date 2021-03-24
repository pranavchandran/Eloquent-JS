const weekday = function(){
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
    return{
        name(number) {return names[number];},
        number(name) {return names.indexOf(name);}
    };
}();

console.log(weekday.name(weekday.number("Sunday")))

let x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"))
console.log(x)

let plusone = Function("n", "return n + 1");
console.log(plusone(4))

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13), "dddd the do"))

// we can define require, in its minimal form, like this
require.cache = Object.create(null);
function require(name){
    if (!(name in require.cache)){
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name]=module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require.cache[name].exports);
    }
    return require.cache[name].exports;
}
