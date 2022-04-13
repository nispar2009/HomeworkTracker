let hw, counter

hw = []
counter = 1

update = () => {
    total = 0
    for (const item of hw) {
        if (item.compl == true) {
            done ++
        }
        total ++
    }


    setValue("hw", "")

    if (total == 1) {
        setValue("motivate", "Just one to go!")
    }
    else if (total == 0) {
        setValue("motivate", "No work remaining!")
    }
    else {
        setValue("motivate", "Full speed ahead!")
    }

    for (const hwItem of hw) {
        let p = hwItem.cnt
        let btnDel = "<button class='btn btn-red-outline btn-sm' onclick='delHw(" + hwItem.id + ")'>Delete</button>"
        document.getElementById("hw").innerHTML += "<li>" + p + btnDel + "</li>"
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