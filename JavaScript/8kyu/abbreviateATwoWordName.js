function abbrevName(name) {
    //     const nameArr = name.split(" ");
    //     return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`

    return name.split(" ").map(n => n[0].toUpperCase()).join(".");
}