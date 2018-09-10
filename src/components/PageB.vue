<template>
<div>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="exampleInputGroup1"
                  label="Email address:"
                  label-for="exampleInput1"
                  description="We'll never share your email with anyone else.">
      <b-form-input id="exampleInput1"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup2"
                  label="Your Name:"
                  label-for="exampleInput2">
      <b-form-input id="exampleInput2"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Enter name">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup3"
                  label="Phone:"
                  label-for="exampleInput3">
          <b-form-input id="exampleInput3"
                        name="phone"
                        v-model="form.phone"
                        v-validate="'numeric'"
                        :class="{'input': true, 'is-danger': errors.has('phone') }"
                        type="text"
                        placeholder="Enter phone number"
                        >
          </b-form-input>
          <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
    </b-form-group>
    <b-form-group id="exampleGroup4">
      <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
        <b-form-checkbox value="me">Check me out</b-form-checkbox>
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</div>
</template>



<script>

const axios = require('axios');

export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone:'',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      axios.post('https://ptsv2.com/t/v3vb3-1536574083/post', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.phone = '';
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style scoped>
span{
  color : red;
}

</style>
