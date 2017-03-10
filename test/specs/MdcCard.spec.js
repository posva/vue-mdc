import MdcCard from 'src/Card/Card.vue'
import MdcCardTitle from 'src/Card/CardTitle.js'
import MdcCardSubtitle from 'src/Card/CardSubtitle.js'
import MdcCardMedia from 'src/Card/CardMedia.js'
import { createVM, nextTick, dataPropagationTest } from '../helpers'
const largeImg = 'http://material-components-web.appspot.com/images/16-9.jpg'
// const squareImg = 'http://material-components-web.appspot.com/images/1-1.jpg'

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

  it('has a media section before the title', function (done) {
    const vm = createVM(this, `
<MdcCard :media="media" title="Title"
>
</MdcCard>
`, {
  data: { media: largeImg },
  components: { MdcCard },
})
    vm.$('.mdc-card__media + .mdc-card__primary').should.exist
    vm.$('.mdc-card__primary + .mdc-card__media').should.not.exist
    const style = vm.$('.mdc-card__media').style
    style.height.should.equal('12.313rem')
    style.backgroundImage.should.equal(`url("${largeImg}")`)
    vm.media = ''
    nextTick().then(() => {
      vm.$('.mdc-card__media').should.not.exist
    }).then(done)
  })

  it('can reorder elements', function () {
    const vm = createVM(this, `
<MdcCard class="reorder" title="Title">
<MdcCardMedia media="${largeImg}" style="height: 12rem"></MdcCardMedia>
</MdcCard>
`, {
  components: { MdcCard, MdcCardMedia },
})
    vm.$('.mdc-card__media + .mdc-card__primary').should.not.exist
    vm.$('.mdc-card__primary + .mdc-card__media').should.exist
  })
})
