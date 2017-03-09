import MdcCard from 'src/Card/Card.vue'
import MdcCardTitle from 'src/Card/CardTitle.js'
import MdcCardSubtitle from 'src/Card/CardSubtitle.js'
import { createVM, nextTick, dataPropagationTest } from '../helpers'

describe('Card.vue', function () {
  it('can have a title', function () {
    const vm = createVM(this, `
<MdcCard class="title">
<MdcCardTitle slot="primary">Title</MdcCardTitle>
</MdcCard>
<MdcCard class="no-title"></MdcCard>
`, {
  components: { MdcCard, MdcCardTitle },
})
    vm.$('.title .mdc-card__title').should.have.text('Title')
    vm.$('.no-title .mdc-card__title').should.not.exist
  })

  it('can have a title as a prop', function (done) {
    const vm = createVM(this, `
<MdcCard class="prop" :title="title"></MdcCard>
`, {
  data: { title: 'Title' },
  components: { MdcCard },
})
    vm.$('.prop .mdc-card__title').should.have.text('Title')
    // It's large by default
    vm.$('.prop .mdc-card__title').should.have.class('mdc-card__title--large')
    vm.title = ''
    nextTick().then(() => {
      vm.$('.prop .mdc-card__title').should.not.exist
    }).then(done)
  })

  it('can have a title and subtitle', function () {
    const vm = createVM(this, `
<MdcCard class="multi">
<MdcCardTitle slot="primary">Title</MdcCardTitle>
<MdcCardSubtitle slot="primary">subtitle</MdcCardSubtitle>
</MdcCard>
`, {
  components: { MdcCard, MdcCardTitle, MdcCardSubtitle },
})
    vm.$('.multi .mdc-card__title').should.have.text('Title')
    vm.$('.multi .mdc-card__subtitle').should.have.text('subtitle')
  })

  it('can have a subtitle as a prop', function (done) {
    const vm = createVM(this, `
<MdcCard class="prop" :subtitle="sub"></MdcCard>
`, {
  data: { sub: 'sub' },
  components: { MdcCard },
})
    vm.$('.prop .mdc-card__subtitle').should.have.text('sub')
    vm.sub = ''
    nextTick().then(() => {
      vm.$('.prop .mdc-card__sub').should.not.exist
    }).then(done)
  })

  it('keeps original data in Title', dataPropagationTest(MdcCardTitle))
  it('keeps original data in Subtitle', dataPropagationTest(MdcCardSubtitle))
})
