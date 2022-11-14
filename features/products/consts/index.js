export const DEFAULT_FILTERS_PRODUCTS = {
  freeShipping: false,
  priceMin: 0,
  priceMax: 0,
  orderBy: 'none',
  tags: [],
  ctg: '',
  count: 12,
  rating: 0
}

export const FILTER_ORDERBY = {
  lowerPrice: {
    order: 'ASC',
    field: 'PRICE'
  },
  higherPrice: {
    order: 'DESC',
    field: 'PRICE'
  },
  new: {
    order: 'DESC',
    field: 'DATE'
  },
  popular: {
    order: 'DESC',
    field: 'RATING'
  }
}

export const DEFAULT_OPTIONS_ORDER_BY = [
  {
    id: 0,
    value: 'none',
    text: 'Ninguno'
  },
  {
    id: 1,
    value: 'popular',
    text: 'Populares'
  },
  {
    id: 2,
    value: 'opinion',
    text: 'Opinion media de los clientes'
  },
  {
    id: 3,
    value: 'new',
    text: 'Nuevo'
  },
  {
    id: 4,
    value: 'higherPrice',
    text: 'Mayor precio'
  },
  {
    id: 5,
    value: 'lowerPrice',
    text: 'Menor precio'
  }
]
