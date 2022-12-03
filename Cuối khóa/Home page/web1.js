let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Rèm đèn cầu giáng sinh',
        image1: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2021/12/15/04/22/1639549798_267711478_1834566713401987_8042559538277467564_n.j.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2021/12/15/04/22/1639549792_266749838_1834566723401986_9008355966291224414_n.j.jpg',
        curr_price: '250.000₫',
    },
    {
        name: 'Bờm giáng sinh',
        image1: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2017/11/17/07/43/1510904254_2017-11-07_13-21-24.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2017/11/17/07/43/1510904273_2017-11-07_13-27-09.jpg',
        curr_price: '25.000₫'
    },
    {
        name: 'Gia đình Người tuyết đèn',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/11/30/08/39/1669783398_o1cn01hpyh5m2cbqwkuxdpb_2401178493-0-cib.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2022/11/30/08/39/1669783411_o1cn01pgien42cbqwztojgs_2401178493-0-cib.jpg?v=4',
        curr_price: '1.499.000₫'
    },
    {
        name: 'Nến thơm hình cây thông',
        image1: 'https://mona.vn/wp-content/uploads/2022/11/nen-cay-thong-noel-trang-tri-giang-sinh-mona-4.jpg',
        image2: 'https://mona.vn/wp-content/uploads/2022/11/nen-cay-thong-noel-trang-tri-giang-sinh-mona-5.jpg',
        curr_price: '75.000₫'
    },
    {
        name: 'Decal Merry Christmas',
        image1: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2021/11/19/04/49/1637306674_2021-11-19_5-03-15.jpg?v=4',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2021/11/19/04/49/1637306668_2021-11-19_5-06-30.jpg',
        curr_price: '70.000₫'
    },
    {
        name: 'Hộp trái châu Noel 8cm',
        image1: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2016/11/29/01/57/1480428160_15139268_1785265698352944_1670169899_n.png?v=4',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2016/11/29/01/57/1480428169_15151396_1785265708352943_1426114741_n.png',
        curr_price: '65.000₫'
    },
    {
        name: 'Chữ gỗ để bàn Giáng sinh',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2019/11/21/02/11/1574345491_2019-11-21_21-06-12.jpg',
        image2: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2019/11/21/02/11/1574345494_2019-11-21_21-06-53.jpg',
        curr_price: ' 65.000₫'
    },
]

let product_list = document.querySelector('#latest-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Mua ngay</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    
})

let products1 = [
    {
        name: 'Set 4 hộp quà giáng sinh',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/12/01/01/45/1669801776_o1cn01q1dhi32cbqzmokare_2401178493-0-cib.jpg',
        image2: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/12/01/01/45/1669801782_screenshot_4.jpg',
        curr_price: '130.000₫'
    },
    {
        name: 'Vòng nguyệt quế XMas',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2019/11/21/12/03/1574337832_2019-11-21_18-43-59.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2019/11/21/11/51/1574337087_2019-11-21_17-41-55.jpg?v=4',
        curr_price: '199.000₫'
    },
    {
        name: 'Ngôi nhà bánh gừng',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/11/30/01/10/1669713349_screenshot_3.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2022/11/30/01/10/1669713319_o1cn01bihr9m1plhtkab9um_3843165401-0-cib.jpg?v=4',
        curr_price: '120.000₫'
    },
    {
        name: 'Kẹo cây thông 3D',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/11/30/07/20/1669778678_o1cn01pyewtc1plhwepxtgm_3843165401-0-cib.jpg',
        image2: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2022/11/30/07/20/1669778693_screenshot_1.jpg',
        curr_price: '60.000₫'
    },
    {
        name: 'Dây treo Merry Christmas',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2021/11/21/08/28/1637492476_2021-11-21_16-39-38.jpg',
        image2: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2021/11/21/08/28/1637492479_2021-11-21_16-47-29.jpg',
        curr_price: '40.000₫'
    },
    {
        name: 'Rèm đèn led Giáng sinh',
        image1: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2019/12/13/03/10/1576206657_2019-12-13_9-56-15.jpg',
        image2: 'https://cdn-img-v2.webbnc.net//uploadv2/web/78/789/product/2019/12/13/03/10/1576206654_2019-12-05_16-52-58.jpg',
        curr_price: '150.000₫'
    },
    {
        name: 'Hộp 24 quả châu (3cm)',
        image1: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2017/11/23/01/34/1511443732_2017-11-23_20-25-19.jpg',
        image2: 'https://cdn-img-v2.webbnc.net/uploadv2/web/78/789/product/2017/11/23/09/36/1511429461_2017-11-23_16-35-59.jpg',
        curr_price: '50.000₫',
    },
]

let best_product_list = document.querySelector('#best-products')

products1.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Mua ngay</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    best_product_list.insertAdjacentHTML("afterbegin", prod)
    
})