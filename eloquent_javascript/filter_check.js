var ages = [32, 33, 16, 40];
select = ages.filter(p=> {
    if (p>30){
        return {selected:p}
    }
});
console.log(select)
