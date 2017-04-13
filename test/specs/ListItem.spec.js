import ListItem from 'src/List/ListItem.vue'
import {
  createVM,
  dataPropagationTest,
} from '../helpers'

describe('ListItem', function () {
  it('renders an upgraded list item', function () {
    const vm = createVM(this, `
<ListItem>Item 1</ListItem>
`, {
  components: { ListItem },
})
    vm
  })

  it('keeps original tag data', dataPropagationTest(ListItem))
})
