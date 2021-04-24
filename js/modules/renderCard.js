import {getResource} from '../service/service';

const getCards = () => {
    class Cards {
        constructor(img, alt, title, price, parentSelector) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const elem = document.createElement('div');
            elem.classList.add('product');
    
            elem.innerHTML = `
                <div class="product__img">
                    <img src="${this.img}" alt="${this.alt}">
                </div>

                <div class="product__descr">
                    <div class="title">${this.title}</div>
                    <div class="price">$ ${this.price}</div>
                </div>

                <div class="add">
                    <a href='#'>Click to buy</a>
                </div>
            `;

            this.parent.appendChild(elem);
        }
    }

    getResource('http://localhost:3000/cards')
        .then(data => {
            data.forEach(({img, alt, title, price}) => {
                new Cards(img, alt, title, price, '.products__wrapper').render();
            });
        });
};

export default getCards;