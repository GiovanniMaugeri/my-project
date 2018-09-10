<template>
<div class='container'>
  <b-row class='Fpar'>
    <b-col  class='text-wrapper col-md-10'>
      <h2> Some title </h2>
      <div
        v-for="currency in info"
        class="currency"
      >
        {{currency.code}}
    </div>
    </b-col>
  </b-row>
  <div class='row card-container container'>
    <b-col  class='cards' sm='12' md='4' lg='4'>
      <b-card title="Card Title 1"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style=""
                class="">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card s content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col class='cards' sm='12' md='4' lg='4'>
      <b-card title="Card Title 2"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card s content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      </b-col>
      <b-col class='cards' sm='12' md='4' lg='4'>
      <b-card title="Card Title 3"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"

              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card s content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      </b-col>
  </div>
</div>
</template>



<script>
const axios = require('axios');

export default {
  name: 'PageA',
  data () {
    return {
        info : null
    }
  },
  methods: {

  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response.data.bpi))
  }

}
</script>

<style scoped>
div.Fpar{
  justify-content:space-around;
}
.text-wrapper{
  text-align: center;
}
.text-wrapper h2{
  margin-bottom: 15px;
}
.text-wrapper p{
  margin-bottom: 50px;
}
.cards{
  margin: 5px 0;
}

</style>
