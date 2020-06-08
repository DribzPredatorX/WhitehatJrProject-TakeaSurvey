class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("A SURVEY TO BRING ABOUT CHANGE")
        title.position(130,0)

        var input1 = createInput("Name")
        var input2 = createInput("Email ID")

        input1.position(130,160)
        input2.position(250,200)

        var subtitle = createElement("h2")
        subtitle.html("DO YOU WANT TO CHANGE THE NATION BY DOING WHATEVER YOU CAN")
        subtitle.position(190,250)

        var yesButton = createButton("YES")
        yesButton.position(130,300)

        var noButton = createButton("NO")
        noButton.position(250,300)

        var submitButton = createButton("SUBMIT")
        submitButton.position(190,350)

        yesButton.mousePressed(function(){
            noButton.hide()

            YES+=1
        })

        noButton.mousePressed(function(){
            yesButton.hide()

            NO+=1
        })

    }
}
