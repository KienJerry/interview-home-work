export function getFirstAndLastDay(input) {
  const year = Number(input.split('-')[0]);
  const month = Number(input.split('-')[1]);
  const firstDay = new Date(Date.UTC(year, month - 1, 1));
  const lastDay = new Date(Date.UTC(year, month, 0));
  return {
    firstDay: firstDay.toISOString().split('T')[0],
    lastDay: lastDay.toISOString().split('T')[0],
  };
}

export const ConvertAddRess = (data: any) => {
  const output = data.map(({ id, brand, name, min_stock, doorId }) => ({
    id,
    brand: brand,
    name: name,
    min_stock: min_stock,
    doorId: doorId,
  }));
  return output;
};

export const CheckEmpty = (value) => {
  if (value === null || value.toString().trim() === '') {
    return true;
  } else {
    return false;
  }
};
