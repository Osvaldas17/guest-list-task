
const guestInput = document.querySelector('#enter-guest')

let guestList = []

function topEntry() {
    document.querySelector('#warning').innerHTML = null
    if (warningCondition()) {
        guestList.unshift(guestInput.value);
        return guestList
    }
}

function bottomEntry() {
    document.querySelector('#warning').innerHTML = null
    if (warningCondition()) {
        guestList.push(guestInput.value);
        return guestList
    }
}

function addAt() {
    document.querySelector('#warning').innerHTML = null
    if (warningCondition()) {
        let fromInput = Number(document.querySelector('#add-at-input').value);
        guestList.splice(fromInput, 0, guestInput.value)
        printArr()
    }
}

function createWarning(reason) {
    const warning = document.createElement('p')
    warning.className = 'red'
    warning.textContent = reason
    document.querySelector('#warning').append(warning)
}

function warningCondition() {
    if (guestList.find(item => item === guestInput.value)) {
        createWarning('Name is already on the list')
    } else if (guestInput.value === '') {
        createWarning('Please enter the name')
    } else {
        return true
    }
}
function printArr() {
    document.querySelector('#app').innerHTML = null
    const ol = document.createElement('ol');
    guestList.forEach(item => {
        const newItem = document.createElement('li');
        newItem.textContent = item;
        document.querySelector('#app').appendChild(ol)
        document.querySelector('ol').appendChild(newItem);
    })
}
function removeFromTo() {
    let fromInput = Number(document.querySelector('#remove-from').value) - 1;
    let toInput = Number(document.querySelector('#remove-to').value);
    if ((fromInput >= 0 && toInput > 0)) {
        const elToDelete = toInput - fromInput
        guestList.splice(fromInput, elToDelete)
        printArr()
    } else {
        removeFirst()
        printArr()
    }
}

function removeFirst() {
    guestList.shift();
    return guestList
}
function removeLast() {
    guestList.pop();
    return guestList
}
function reverse() {
    guestList.reverse();
    return guestList
}
function moveFirstToLast() {
    if (guestList.length > 0) {
        const move = guestList.shift()
        guestList.push(move)
    }
}
function moveLastToFirst() {
    if (guestList.length > 0) {
        const move = guestList.pop()
        guestList.unshift(move)
    }
}

document.querySelector('#move-first-to-last').addEventListener('click',() => {
    moveFirstToLast()
    printArr()
})
document.querySelector('#move-last-to-first').addEventListener('click',() => {
    moveLastToFirst()
    printArr()
})
document.querySelector('#add-top').addEventListener('click',() => {
    topEntry()
    printArr()
})
document.querySelector('#add-bottom').addEventListener('click',() => {
    bottomEntry()
    printArr()
})
document.querySelector('#remove-first').addEventListener('click',() => {
    removeFirst()
    printArr()
})
document.querySelector('#remove-last').addEventListener('click',() => {
    removeLast()
    printArr()
})
document.querySelector('#reverse').addEventListener('click',() => {
    reverse()
    printArr()
})
document.querySelector('#add-at').addEventListener('click', () => {
    addAt()
    printArr()
})
document.querySelector('#remove-from-to-btn').addEventListener('click',() => {
    removeFromTo()
})