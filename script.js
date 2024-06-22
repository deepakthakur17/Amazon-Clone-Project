var index = 1
slideFun(index)

function addSlide(num) {
    index = index + num
    console.log(index)
    slideFun(index)
}

function slideFun(idx) {
    var allDivs = document.querySelectorAll(".slides")

    var dotsDiv = document.querySelectorAll("#dots>div")

    if (idx <= 0) {
        index = allDivs.length
    }

    if (idx > allDivs.length) {
        index = 1
    }

    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "none"
    }

    for (var j = 0; j < dotsDiv.length; j++) {
        dotsDiv[j].style.backgroundColor = "black"
    }

    allDivs[index - 1].style.display = "block"
        // dotsDiv[index - 1].style.backgroundColor = "blue"

}


//how to automate above slider

function automateSlide() {
    addSlide(1)

    //call above function after each 4 seconds
    setTimeout(automateSlide, 4000)
}
automateSlide()