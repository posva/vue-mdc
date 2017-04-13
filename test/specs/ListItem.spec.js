import ListItem from 'src/List/ListItem.vue'
import {
  createVM,
  dataPropagationTest,
} from '../helpers'

describe('ListItem', function () {
  it('renders an upgraded list item', function () {
    const vm = createVM(this, h => (
      <ListItem ref='item'>Item 1</ListItem>
    ))
    vm.$refs.item.should.have.class('mdc-list-item')
    vm.$refs.item.should.match('li')
  })

  it('can render a custom tag', function () {
    const vm = createVM(this, h => (
      <ListItem ref='item' tag='a'>Hello</ListItem>
    ))
    vm.$refs.item.should.have.class('mdc-list-item')
    vm.$refs.item.should.match('a')
  })

  it('keeps original tag data', dataPropagationTest(ListItem))
})
