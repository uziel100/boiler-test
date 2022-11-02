const parseFiltersUrlProducts = (query = {}, defaultFilters = {}, srr = true) => {
  let filters = { ...defaultFilters }
  const { slug, ...queryRest } = query
  if (!srr) {
    return { ...queryRest, ...defaultFilters }
  }

  if (query?.rating) filters.rating = parseInt(query.rating, 10)
  if (query?.freeShipping === 'true') filters.freeShipping = true
  if (query?.freeShipping === 'false') filters.freeShipping = false
  if (query?.priceMin) filters.priceMin = parseInt(query.priceMin, 10)
  if (query?.priceMax) filters.priceMax = parseInt(query.priceMax, 10)
  if (query?.orderBy) filters.orderBy = query.orderBy
  if (query?.category) filters.ctg = query.category

  filters = { ...queryRest, ...filters }

  return Object.entries(filters).length > 0 ? filters : null
}

export default parseFiltersUrlProducts
