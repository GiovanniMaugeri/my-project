import Vue from "vue"
import PageA from "@/components/PageA"


describe('PageA.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PageA)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.text-wrapper h2').textContent)
      .to.equal('Some title')
  })
})
