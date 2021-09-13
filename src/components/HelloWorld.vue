<template>
  <div class="hello">
    <h1>12312312123{{curCourseLecturer && curCourseLecturer.areaName}}</h1>
    <!-- <select-component
      :options="provinceList"
      :label="'areaName'"
      :value="'areaId'"
      :curModel.sync="curCourseLecturer.province"
       @selectChange="provinceChange($event, curCourseLecturer, index)"
    ></select-component> -->
    <TestComponent/>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import SelectComponent from "../view/components/selecomponents"
import TestComponent from "../view/components/testcomponent"
export default {
  name: 'HelloWorld',
  components:{
    SelectComponent,
    TestComponent
  },
  props: {
    msg: String
  },
  setup(){
    const state = reactive({
      provinceList : [
          {
            areaCode:'110000',
            areaId:'2',
            areaName:'北京市'
          }
        ],
        curCourseLecturer:{
          province:"1",
          areaName:"北京市"
        },
        test:"hahahaha",
    })
    return {
      ...toRefs(state)

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
