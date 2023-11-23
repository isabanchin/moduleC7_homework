function revertString(str) {
    let revertedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revertedStr += str[i];
    }
    return revertedStr;
}

module.export = revertString;
// let str = prompt('Input string to revert');
// alert(revertString(str));