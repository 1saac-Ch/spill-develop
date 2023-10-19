const formatCurrency = (number: number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}

export default formatCurrency
