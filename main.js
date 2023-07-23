var listCart = document.querySelectorAll('.list .item')

listCart.forEach((item, key) => {
    item.addEventListener('click', function (event) {
        if (event.target.classList.contains('add')) {
            var itemCopy = item.cloneNode(true)
            var checkIssue = false
            var cart = document.querySelectorAll('.cart .item')
            cart.forEach(cart => {
                if (cart.getAttribute('data-key') == itemCopy.getAttribute('data-key')) {
                    checkIssue = true
                    cart.classList.add('danger')
                    setTimeout(function () {
                        cart.classList.remove('danger')
                    }, 1000)
                }
            })
            if (checkIssue == false) {
                document.querySelector('.listCart').appendChild(itemCopy)
            }
        }
    })
})

function Remove($key) {
    var listCart = document.querySelectorAll('.cart .item')
    listCart.forEach(cart => {
        if (cart.getAttribute('data-key') == $key) {
            cart.remove()
            return
        }
    })
}

function payClick(event) {
    var listCart = document.querySelectorAll('.cart .item')
    listCart.forEach(cart => {
        alert("Ban da thanh toan")
        cart.remove()
        return
    })
}


var limit = 4
var thisPage = 1
var listPage = document.querySelectorAll('.list .item')
console.log(listPage)
function loadPage() {
    listPage.forEach((item, key) => {
        var beginGet = limit * (thisPage - 1)
        var endGet = (limit * thisPage) - 1
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
    creatPage()
}

loadPage()

function creatPage() {
    let totalPage = Math.ceil(listPage.length / limit)
    document.querySelector('.listPage').innerHTML = ''

    if (thisPage != 1) {
        let prev = document.createElement('button')
        prev.innerText = "PREV"
        document.querySelector('.listPage').appendChild(prev)
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")")
    }

    for (i = 1; i <= totalPage; i++) {
        let newPage = document.createElement('button')
        newPage.innerText = i
        if (i == thisPage) {
            newPage.classList.add('active')
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")")
        document.querySelector('.listPage').appendChild(newPage)
    }

    if (thisPage != totalPage) {
        let next = document.createElement('button')
        next.innerText = "NEXT"
        document.querySelector('.listPage').appendChild(next)
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")")
    }
}

function changePage(i) {
    thisPage = i;
    loadPage();
}



