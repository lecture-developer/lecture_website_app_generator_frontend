
function trim(str, n, end='...') {
    return (str.length >= n) ? str.substring(0, n-1) + end : str;
}

export default trim;