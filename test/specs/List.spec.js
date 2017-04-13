import List from 'src/List/List.vue'
import ListItem from 'src/List/ListItem.vue'
import {
  createVM,
  dataPropagationTest,
  attrTest,
} from '../helpers'

describe('List', function () {
  it('renders an upgraded list', function () {
    const vm = createVM(this, h => (
      <List ref='list'>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    ), {
    })
    vm.$refs.list.should.have.class('mdc-list')
    vm.$refs.list.should.match('ul')
  })

  it('can render a custom tag', function () {
    const vm = createVM(this, h => (
      <List ref='list' tag='div'>Hello</List>
    ))
    vm.$refs.list.should.have.class('mdc-list')
    vm.$refs.list.should.match('div')
  })

  it('keeps original tag data', dataPropagationTest(List))

  describe('attrs', function () {
    attrTest(it, 'mdc-list', List, [
      'dense',
      'two-lines',
    ])
  })
})
