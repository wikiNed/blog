let arr1 = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'a'
    },
    {
        id: 3,
        name: 'b'
    },
    {
        id: 4,
        name: 'c'
    }
];
Array.prototype.uniqe = function () {
    let res = [];
    let result = [];
    this.forEach((item, index) => {
        res.push(item.name);
    });
    res = Array.from(new Set(res));
    res.forEach((item) => {
        for (let key in this) {
            if (this[key].name == item) {
                result.push(this[key]);
                break;
            }
        }
    });
    return result;
}
console.log(arr1.uniqe());















