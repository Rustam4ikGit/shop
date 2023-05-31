let arr = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 12
    }
}, {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}, {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}, {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
}, {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}, {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},]
let cart = []

let products = document.querySelector('.products')
let show_first_five = document.querySelector('.show_first_five')
let show_all = document.querySelector('.show_all')
let only_womans = document.querySelector('.only_womans')
let total = document.querySelector('#total')
let cart_place = document.querySelector('.wrapper')
let totalView = document.querySelector('.total')



function reload(data, place) {
    place.innerHTML = ""
    total.innerHTML = cart.length

    for (let item of data) {
        let product = document.createElement('div'),
            image = document.createElement('div'),
            img = document.createElement('img'),
            product_descr = document.createElement('div'),
            product_descr_title = document.createElement('div'),
            txt = document.createElement('p'),
            rating = document.createElement('div'),
            price = document.createElement('div'),
            price_span_$ = document.createElement('span'),
            price_span = document.createElement('span'),
            rate = document.createElement('div'),
            rate_span_star = document.createElement('span'),
            rate_span = document.createElement('span'),
            count = document.createElement('div'),
            count_span_box = document.createElement('span'),
            count_span = document.createElement('span'),
            btn_favorite = document.createElement('div')

        product.classList.add('product', 'grid-box')
        image.classList.add('image')
        product_descr.classList.add('product-descr')
        product_descr_title.classList.add('product-descr-title')
        txt.classList.add('txt')
        rating.classList.add('rating')
        price.classList.add('price')
        price_span_$.classList.add('material-symbols-outlined')
        rate_span_star.classList.add('material-symbols-outlined')
        count_span_box.classList.add('material-symbols-outlined')
        btn_favorite.classList.add('favorite')

        if (cart.includes(item.id)) {
            btn_favorite.classList.add('fav_act')
        }

        img.src = item.image
        img.alt = 'image'

        product_descr_title.innerHTML = item.title.length >= 20 ? item.title.slice(0, 20) : item.title
        txt.innerHTML = item.description.length >= 100 ? item.description.slice(0, 150) : item.description
        price_span_$.innerHTML = 'attach_money'
        rate_span_star.innerHTML = 'star'
        count_span_box.innerHTML = 'inventory_2'
        price_span.innerHTML = item.price
        rate_span.innerHTML = item.rating.rate
        count_span.innerHTML = item.rating.count
        btn_favorite.innerHTML = 'В избранное'


        product.append(image)
        product.append(product_descr)
        image.append(img)
        product_descr.append(product_descr_title)
        product_descr.append(txt)
        product_descr.append(rating)
        rating.append(price)
        price.append(price_span_$)
        price.append(price_span)
        rating.append(rate)
        rate.append(rate_span_star)
        rate.append(rate_span)
        rating.append(count)
        count.append(count_span_box)
        count.append(count_span)
        product_descr.append(btn_favorite)
        place.append(product)



        btn_favorite.onclick = () => {
            if (cart.includes(item.id)) {
                btn_favorite.classList.remove('fav_act')
                cart = cart.filter(el => el !== item.id)
            } else {
                btn_favorite.classList.add('fav_act')
                item.quantity = 1
                cart.push(item.id)
            }

            cart_reaload(cart, cart_place)
            total.innerHTML = cart.length
        }

    }
}

function cart_reaload(data, place) {
    place.innerHTML = ""
    let totalPrice = 0
    totalView.innerHTML = `${totalPrice.toFixed(2)} $`
    function reduceTotal(item) {
        totalPrice += item.price * item.quantity
        totalView.innerHTML = `${totalPrice.toFixed(2)} $`
    }

    for (let id of data) {
        for (let item of arr) {
            if (item.id === id) {
                let cart_item = document.createElement('div')
                let left = document.createElement('div')
                let right = document.createElement('div')
                let img = document.createElement('img')
                let descr = document.createElement('div')
                let h3 = document.createElement('h3')
                let title = document.createElement('span')
                let counter = document.createElement('div')
                let btnPlus = document.createElement('button')
                let btnMinus = document.createElement('button')
                let count_span = document.createElement('span')
                let p = document.createElement('p')
                let span_price = document.createElement('span')

                cart_item.classList.add('cart-item')
                left.classList.add('left')
                right.classList.add('right')
                descr.classList.add('descr')
                counter.classList.add('counter')
                count_span.classList.add('count-span')
                span_price.classList.add('price')

                h3.innerHTML = item.title
                h3.innerHTML = item.category
                span_price.innerHTML = item.price
                btnPlus.innerHTML = "+"
                btnMinus.innerHTML = "-"
                count_span.innerHTML = item.quantity
                p.innerHTML = "$"

                cart_item.append(left, right)
                left.append(img, descr)
                descr.append(h3, title)
                right.append(counter, p)
                counter.append(btnPlus, count_span, btnMinus)
                p.append(span_price)
                place.append(cart_item)

                btnPlus.onclick = () => {
                    if (item.quantity < item.rating.count) {
                        item.quantity++

                        span_price.innerHTML = (item.price * item.quantity).toFixed(2)
                        count_span.innerHTML = item.quantity
                        totalPrice += item.price
                        totalView.innerHTML = `${totalPrice.toFixed(2)} $`
                    }
                }
            }
        }
    }

}

cart_reaload(cart, cart_place)
reload(arr, products)

let tuman = document.querySelector('tuman')