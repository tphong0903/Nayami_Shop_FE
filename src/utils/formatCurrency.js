export const formatCurrency = (amount) => {
  const intAmount = parseInt(amount, 10) || 0;
  return new Intl.NumberFormat('vi-VN').format(intAmount) + ' VND';
};