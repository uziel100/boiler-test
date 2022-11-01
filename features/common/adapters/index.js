import _ from 'lodash'

// eslint-disable-next-line import/prefer-default-export
export const categoriesDrawerAdapter = data => {
  const items = _.cloneDeep(data.nodes)
  return items.sort((a, b) => b.children.nodes.length - a.children.nodes.length)
}
