const parseFiltersUrlProducts = (query = {}, defaultFilters = {}, srr = true) => {
  let filters = { ...defaultFilters }
  const { slug, ...queryRest } = query
  if (!srr) {
    return { ...queryRest, ...filters }
  }

  if (query?.rating) filters.rating = parseInt(query.rating, 10)
  if (query?.freeShipping === 'true') filters.freeShipping = true
  if (query?.freeShipping === 'false') filters.freeShipping = false
  if (query?.priceMin) filters.priceMin = parseInt(query.priceMin, 10)
  if (query?.priceMax) filters.priceMax = parseInt(query.priceMax, 10)
  if (query?.orderBy) filters.orderBy = query.orderBy
  if (query?.category) filters.ctg = query.category
  if (query?.count) filters.count = parseInt(query.count, 10)
  if (query?.tags) filters.tags = typeof query.tags === 'string' ? [query.tags] : query.tags

  filters = { ...queryRest, ...filters }

  return Object.entries(filters).length > 0 ? filters : null
}

export default parseFiltersUrlProducts
