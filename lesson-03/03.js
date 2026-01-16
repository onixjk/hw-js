// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let theBigestNumber

    if (a > b && a > c) {
        theBigestNumber = a
    } else if (b > a && b > c) {
        theBigestNumber = b
    } else {
        theBigestNumber = c
    }
    return theBigestNumber
}
