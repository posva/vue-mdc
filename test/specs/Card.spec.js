import MdcCard from 'src/Card/Card.vue'
import MdcButton from 'src/Button.vue'
import MdcCardActions from 'src/Card/CardActions.js'
import MdcCardHorizontalBlock from 'src/Card/CardHorizontalBlock.js'
import MdcCardMedia from 'src/Card/CardMedia.js'
import MdcCardPrimary from 'src/Card/CardPrimary.js'
import MdcCardTitle from 'src/Card/CardTitle.js'
import MdcCardSubtitle from 'src/Card/CardSubtitle.js'
import MdcCardSupportingText from 'src/Card/CardSupportingText.js'
import {
  createVM,
  nextTick,
  dataPropagationTest,
  attrTest,
} from '../helpers'
const largeImg = 'http://material-components-web.appspot.com/images/16-9.jpg'
const squareImg = 'http://material-components-web.appspot.com/images/1-1.jpg'

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
  it('keeps original data in Primary', dataPropagationTest(MdcCardPrimary))
  it('keeps original data in HorizontalBlock', dataPropagationTest(MdcCardHorizontalBlock))
  it('keeps original data in SupportingText', dataPropagationTest(MdcCardSupportingText))
  it('keeps original data in Actions', dataPropagationTest(MdcCardActions))

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

  it('has a supporting text', function (done) {
    const vm = createVM(this, `
<MdcCard :supporting-text="text">
</MdcCard>
`, {
        data: { text: 'Hello there' },
        components: { MdcCard, MdcCardMedia },
      })
    vm.$('.mdc-card__supporting-text').should.exist
    vm.$('.mdc-card__supporting-text').should.have.text('Hello there')
    vm.text = ''
    nextTick().then(() => {
      vm.$('.mdc-card__supporting-text').should.not.exist
    }).then(done)
  })

  it('has a slot in supporting text', function (done) {
    const vm = createVM(this, `
<MdcCard>
<MdcCardSupportingText v-if="show">A slot</MdcCardSupportingText>
</MdcCard>
`, {
        data: { show: true },
        components: { MdcCard, MdcCardSupportingText },
      })
    vm.$('.mdc-card__supporting-text').should.exist
    vm.$('.mdc-card__supporting-text').should.have.text('A slot')
    vm.show = false
    nextTick().then(() => {
      vm.$('.mdc-card__supporting-text').should.not.exist
    }).then(done)
  })

  it('has an actions slot', function (done) {
    const vm = createVM(this, `
<MdcCard>
<p v-if="show" slot="actions">Actions</p>
<MdcButton v-if="show" slot="actions">Actions</MdcButton>
</MdcCard>
`, {
        data: { show: true },
        components: { MdcCard, MdcButton },
      })
    vm.$('.mdc-card__actions').should.exist
    vm.$('.mdc-card__actions p').should.have.text('Actions')
    vm.$('.mdc-card__actions button').should.have.class('mdc-card__action')
    vm.$('.mdc-card__actions p').should.not.have.class('mdc-card__action')
    vm.show = false
    nextTick().then(() => {
      vm.$('.mdc-card__actions').should.not.exist
      vm.show = true
    }).then(done)
  })

  it('can apply a dark theme', function () {
    const vm = createVM(this, `
<MdcCard theme-dark title="Hello there">
<MdcButton theme-dark slot="actions" compact>Action</MdcButton>
</MdcCard>
`, {
        components: { MdcCard, MdcButton },
      })
    vm.$('.mdc-card').should.have.class('mdc-card--theme-dark')
  })

  it('horizontal block', function () {
    const vm = createVM(this, `
<MdcCard style="max-width: 21.875rem;">
  <MdcCardHorizontalBlock>
    <MdcCardPrimary>
      <MdcCardTitle large>Title Here</MdcCardTitle>
      <MdcCardSubtitle>Subtitle Here</MdcCardSubtitle>
    </MdcCardPrimary>
    <img class="mdc-card__media-item mdc-card__media-item--1dot5x" src="${squareImg}">
  </MdcCardHorizontalBlock>
  <MdcButton slot="actions" compact>Action 1</MdcButton>
  <MdcButton slot="actions" compact>Action 2</MdcButton>
</MdcCard>
`, {
      components: {
        MdcCard,
        MdcButton,
        MdcCardTitle,
        MdcCardSubtitle,
        MdcCardPrimary,
        MdcCardHorizontalBlock,
      },
    })
    vm.$('.mdc-card__horizontal-block .mdc-card__primary .mdc-card__title').should.exist
    vm.$('.mdc-card__horizontal-block .mdc-card__primary .mdc-card__subtitle').should.exist
  })

  attrTest(it, 'mdc-card__actions', MdcCardActions, 'vertical')
})
