let hw, counter

hw = []
doing = 0
counter = 1

update = () => {
    done = 0
    total = 0
    for (const item of hw) {
        if (item.compl == true) {
            done ++
        }
        total ++
    }


    setValue("hw", "")

    if (done == total - 1) {
        setValue("motivate", "Just one to go!")
    }
    else if (done == total) {
        setValue("motivate", "No work remaining!")
    }
    else {
        setValue("motivate", "")
    }

    for (const hwItem of hw) {
        let btnCompl, p

        if (hwItem.compl) {
            btnCompl = "<button class='btn btn-green-outline btn-sm' onclick='markCompl(" + hwItem.id + ")'>Mark as unfinished</button>"
            p = "<p><del>" + hwItem.subject + ": " + hwItem.cnt + "</del><p>"
        }
        else {
            btnCompl = "<button class='btn btn-green-outline btn-sm' onclick='markCompl(" + hwItem.id + ")'>Mark as finished</button>"
            p = "<p>" + hwItem.subject + ": " + hwItem.cnt + "<p>"
        }

        if (doing == hwItem.id) {
            p = "<p>" + hwItem.subject + ": " + hwItem.cnt + " (doing)<p>"
        }

        let btnDel = "<button class='btn btn-red-outline btn-sm' onclick='delHw(" + hwItem.id + ")'>Delete</button>"
        let btnDo = "<button class='btn btn-blue-outline btn-sm' onclick='setDoing(" + hwItem.id + ")'>Mark as doing</button>"
        document.getElementById("hw").innerHTML += "<li>" + p + btnCompl + " " + btnDo + " " + btnDel + "</li>"
    }

    console.log(hw)
}

addHw = () => {
    hw.push({
        id: counter,
        subject: getInput("sub"),
        cnt: getInput("cnt"),
        compl: false
    })

    counter++

    update()

    document.getElementById("sub").value = ""
    document.getElementById("cnt").value = ""
}

delHw = id => {
    let updatedHw = []

    for (const item of hw) {
        if (item.id != id) {
            updatedHw.push(item)
        }
    }

    hw = updatedHw

    update()
}

markCompl = id2 => {
    hw = hw.map(item => {
        if (item.id == id2) {
            if (item.compl) {
                return ({
                    id: item.id,
                    subject: item.subject,
                    cnt: item.cnt,
                    compl: false
                })
            }
            else {
                return ({
                    id: item.id,
                    subject: item.subject,
                    cnt: item.cnt,
                    compl: true
                })
            }
        }
        else {
            return(item)
        }
    })

    doing = 0

    update()
}

setDoing = hwItem => {
    doing = hwItem
    update()
}