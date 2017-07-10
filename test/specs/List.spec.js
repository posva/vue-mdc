import List from 'src/List/List'
import ListItem from 'src/List/ListItem'
import ListDivider from 'src/List/ListDivider'
import ripple from 'src/ripple'
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

  describe('ListItem', function () {
    it('renders an upgraded list item', function () {
      const vm = createVM(this, h => (
        <div>
          <List>
            <ListItem ref='item'>Item 1</ListItem>
            <ListItem v-ripple>
              <i class='mdc-list-item__start-detail material-icons'
                aria-hidden='true'>network_wifi</i>
              <span class='mdc-list-item__text'>
                Two-line item
                <span class='mdc-list-item__text__secondary'>Secondary text</span>
              </span>
            </ListItem>
          </List>
        </div>
      ), { directives: { ripple }})
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

  describe('ListDivider', function () {
    it('keeps original tag data', dataPropagationTest(ListDivider))
  })
})
