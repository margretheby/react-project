
function CalculateDiscount(price, discountedPrice) {
    const percentageOfPrice = (discountedPrice / price) * 100;
    const discountPercentage = 100 - percentageOfPrice;
    const stringPercentage = discountPercentage.toString();
    const discountDisplayed = stringPercentage.slice(0, 2)
    return discountDisplayed;
}

export default CalculateDiscount;