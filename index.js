const fetch = require('node-fetch');
const cheerio = require('cheerio');
const queryString = require('query-string');

let $ = null;

const defaultQuery = {
    location: 'rs'
}

class Scrapper {
    constructor(options) {
        this.query = {
            ...defaultQuery,
            ...options.query
        };

        this.init();
    }

    async init() {
        const html = await this.getHtml(this.getUrl());
        $ = cheerio.load(html);

        const cars = this.getCars();
        const lastPage = this.getLastPage();

        const parsedCars = cars.toArray().map(Scrapper.parseAD);

        parsedCars.forEach(car => console.log(car.title));
    }

    getUrl () {
        const qs = {
            me: this.query.maxKm,
            ms: this.query.minKm,
            page: this.query.page
        }

        return `http://${this.query.location}.olx.com.br/regioes-de-pelotas-rio-grande-e-bage/veiculos-e-pecas/carros?${queryString.stringify(qs)}`;
    }

    async getHtml(url) {
        const res = await fetch(url);
        return res.text();
    }

    getCars() {
        return $('#main-ad-list .item');
    }

    getLastPage() {
        return $('.module_pagination .item.number').last().text().trim();
    }

    static parseAD(car) {
        const parseYear = title => {
            const match = /[- ]\d{4}/.exec(title);
            if (!match) return '';

            return match[0].trim();
        }

        const $car = $(car);
        const title = $car.find('.OLXad-list-title').text().trim();
        const detail = $car.find('.detail-specific').text().trim();
        const price = $car.find('.OLXad-list-price').text().trim();
        const year = parseYear(title);

        return {
            title,
            detail,
            price,
            year
        }
    }
}



new Scrapper({
    query: {
        minKm: '40000',
        maxKm: '60000',
    }
});