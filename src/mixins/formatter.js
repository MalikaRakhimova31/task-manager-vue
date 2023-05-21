
export const priceMixin = {
    methods: {
        // ========== PRICE_FORMATTER START ==========
        formatPrice(value){
            if(value){
                let currency = value.toString().replace(/,/g, '');
                currency = parseFloat(currency);
                currency = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2}).format(currency);

                return currency
            }
            return 0;
        }
        // ========== PRICE_FORMATTER END ==========
    }
}