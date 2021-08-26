function arrayEquals(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length)
        return false;
    for (var i = arrayA.length; i--;) {
        if (arrayA[i] !== arrayB[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=array.js.map