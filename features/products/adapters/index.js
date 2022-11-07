import { DEFAULT_IMG_CATEGORY_PRODUCT } from 'const/products'
import _ from 'lodash'

// eslint-disable-next-line import/prefer-default-export
export const produtcsCategoryAdapter = data => {
  const cloneNodes = _.cloneDeep(data.nodes[0].children.nodes)
  const categoryBase = cloneNodes.map(entry => ({ ...entry, categories: entry.children.nodes }))
  return categoryBase
}

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
