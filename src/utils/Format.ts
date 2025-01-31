
class Format {

    static formatMoney(value: number) {
        return new Intl.NumberFormat('pt-br', {
            style: 'currency',
            compactDisplay: 'short',
            currency: 'BRL'
        }).format(value);
    }

    static FormatDate(date: Date) {
        return Intl.DateTimeFormat('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        }).format(date)
    }

}

export { Format }
