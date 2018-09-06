<template>
<b-form class='left'>
  <b-form-group id="InputGroup2"
                label="Email address:"
                label-for="exampleInput2">
          <b-form-input id="Input2"
                  type="email"
                  v-model="email"
                  required
                  placeholder="Enter email">
          </b-form-input>
    </b-form-group>
    <b-form-group id="InputGroup2"
                  label="Body:"
                  label-for="exampleInput2"
                  >
          <b-form-textarea id="textarea1"
                       v-model="textarea"
                       placeholder="Enter something"
                       :rows="3"
                       :max-rows="6">
           </b-form-textarea>
    </b-form-group>
    <b-button type="submit" variant="primary">Send</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
</b-form>
</template>



<script>
export default {
  name: 'PageC',
  data () {
    return {
        email : '',
        textarea : ''
    }
  },
  methods: {

  }

}
</script>
<style scoped>
.left{
  
}
</style>
