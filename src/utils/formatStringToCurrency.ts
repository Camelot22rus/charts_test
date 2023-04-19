export const formatStringToCurrency = (value: number) => {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(value)
}