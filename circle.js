
function circleArea (myRadius){
    let area = Math.pow(myRadius, 2) * Math.PI;
    let areaSig = area.toFixed(2) ;
    console.log(`Total area = ${areaSig}`);
}

function circleCircumference (myRadius){
    let circumference = 2* myRadius * Math.PI;
    let circumferenceSig = circumference.toFixed(2) ;
    console.log(`Total Circumference = ${circumferenceSig}`);
}

module.exports = {
    circleArea,
    circleCircumference
}

