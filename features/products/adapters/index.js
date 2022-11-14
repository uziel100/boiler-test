import { DEFAULT_IMG_CATEGORY_PRODUCT } from 'const/products'
import _ from 'lodash'
import { DEFAULT_FILTERS_PRODUCTS, FILTER_ORDERBY } from '../consts'

/**
 * Adapter para las categorias de productos
 * @param {Object} data
 * @returns {Object}
 */
export const produtcsCategoryAdapter = data => {
  const cloneNodes = _.cloneDeep(data.nodes[0].children.nodes)
  const categoryBase = cloneNodes.map(entry => ({ ...entry, categories: entry.children.nodes }))
  return categoryBase
}

/**
 * Adapter para el manejo de las categorias del componente
 * de camino de subcategorias
 * @param {*} data
 * @param {String} slugBaseCategory
 * @param {Boolean} isMobil
 * @returns {Object}
 */
export const produtcsCategoryHistoryAdapter = (data, slugBaseCategory, isMobil = true) => {
  const currentCategory = _.cloneDeep(data.nodes[0])

  const categoryBase = {
    id: currentCategory?.id,
    name: currentCategory.name,
    slug: currentCategory.slug,
    img: currentCategory?.image?.sourceUrl || DEFAULT_IMG_CATEGORY_PRODUCT,
    categories:
      currentCategory?.parent?.node?.slug === slugBaseCategory
        ? []
        : currentCategory.children.nodes.map(item => ({
            ...item,
            img: item?.image?.sourceUrl || DEFAULT_IMG_CATEGORY_PRODUCT
          })),
    parent: currentCategory?.parent?.node?.slug === slugBaseCategory ? null : currentCategory?.parent?.node
  }
  if (isMobil) {
    categoryBase.categories = currentCategory.children.nodes.map(item => ({
      ...item,
      img: item?.image?.sourceUrl || DEFAULT_IMG_CATEGORY_PRODUCT
    }))
    categoryBase.parent = currentCategory?.parent?.node
  }

  return categoryBase
}

export const tagsListAdapter = data =>
  data?.nodes?.map(
    item =>
      ({
        id: item.id,
        title: item.name,
        text: item.name
      } || [])
  )

export const productsListAdapter = data => {
  const { pageInfo } = data

  return {
    pageInfo,
    items: data.edges.map(({ node: product }) => ({
      id: product.id,
      name: product.name,
      price: Number(product.rawPrice),
      imgUrl: product?.image?.sourceUrl || DEFAULT_IMG_CATEGORY_PRODUCT,
      freeShipping: false, // TODO
      score: product.averageRating
    }))
  }
}

export const productFiltersAdapter = (filters = {}) => {
  const customFilters = { ...DEFAULT_FILTERS_PRODUCTS, ...filters }
  const filterOrderBy = [FILTER_ORDERBY[customFilters.orderBy]]
  const isChangeFilterPrice = customFilters.priceMax + customFilters.priceMin > 0

  return {
    first: customFilters.count,
    where: {
      category: customFilters.ctg,
      maxPrice: isChangeFilterPrice ? customFilters.priceMax : undefined,
      minPrice: isChangeFilterPrice ? customFilters.priceMin : undefined,
      orderby: filterOrderBy.filter(Boolean).length > 0 ? filterOrderBy : undefined
    }
  }
}

export const productFilterPaginationsAdapter = (filters = {}) => {
  const customFilters = productFiltersAdapter(filters)
  return { ...customFilters, after: filters?.afterCursor }
}
