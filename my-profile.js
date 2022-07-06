
//phase 1

//use explicit methoid to add html header from js
document.body.innerHTML = `<h1 id = 'header1'> Ben Waldee </h1>`
//use non explicit method
//create ul
let ul = document.createElement("ul")



//create 4 list elements, add to ul programatically

let hobbyArr = ['Gaming', "Hiking", "Anime", "Songwriting"]

for (let i = 0; i < hobbyArr.length; i++) {
    let li = document.createElement("li")
    li.innerText = hobbyArr[i]
    ul.append(li)
}
document.body.append(ul)

//phase 2
//add class to h1
let h1 = document.getElementsByTagName("h1")[0]
h1.setAttribute("class", "name")

//add class to ul
ul.setAttribute("class", "my-details")

//add class to li's
let liList = document.querySelectorAll("li")
for (let li of liList) {
    li.setAttribute("class", "detail")
}

//phase3 clock
//create clock ele
let clock = document.createElement("div")
document.body.append(clock)
//use JS date obj to get time
function dateAssign() {
    let date = new Date()
    clock.innerText = `${date}`
    setTimeout(function () { dateAssign() }
        , 1000)
}

dateAssign()


// let month = date.getUTCMonth() + 1
// let day = date.getUTCDate()
// let year = date.getUTCFullYear()
// const newdate = `${month}/${day}/${year}`

// clock.innerText = newdate
