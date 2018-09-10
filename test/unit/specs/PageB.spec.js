
import Vue from "vue"
import PageB from "@/components/PageB"


describe('PageB.vue', () => {
  it('Email is an emal', () =>{
    const Constructor = Vue.extend(PageB)
    const vm = new Constructor ().$mount()

    vm.email = "prova123@gmail.com"
    expect(vm.email).to.contain("@")
  })
  it("Name doesn't contain numebers",()=>{
    const Constructor = Vue.extend(PageB)
    const vm = new Constructor ().$mount()

    vm.name = "giogi"
    for(var i = 0; i < 10; i++){
      expect(vm.name).to.not.contain(i)
    }
  })
})
