import _ from 'lodash'

// eslint-disable-next-line import/prefer-default-export
export const produtcsCategoryAdapter = data => {
  const cloneNodes = _.cloneDeep(data.nodes[0].children.nodes)
  const categoryBase = cloneNodes.map(entry => ({ ...entry, categories: entry.children.nodes }))
  return categoryBase
}

export const produtcsCategoryHistoryAdapter = (data, slugBaseCategory) => {
  const currentCategory = _.cloneDeep(data.nodes[0])

  const categoryBase = {
    id: currentCategory?.id,
    name: currentCategory.name,
    slug: currentCategory.slug,
    img: currentCategory.image.sourceUrl,
    categories: currentCategory?.parent?.node?.slug === slugBaseCategory ? [] : currentCategory.children.nodes,
    parent: currentCategory?.parent?.node?.slug === slugBaseCategory ? null : currentCategory?.parent?.node
  }
  return categoryBase
}
