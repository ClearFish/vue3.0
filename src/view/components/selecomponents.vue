<template>
  <div
    class="ai-course-select"
    :style="{
      width:
        Object.prototype.toString.call(width) === '[object Number]'
          ? width + 'px'
          : width,
    }"
  >
    <el-select
      v-model="currentData"
      placeholder="请选择"
      @change="selectChange"
      :disabled="disabled"
    >
      <el-option
        v-for="item in options"
        :key="item[value]"
        :label="item[label]"
        :value="item[value]"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      // 所有选项
      type: Array,
      default: () => [],
    },
    label: {
      // lable值
      type: String,
      default: "name",
    },
    value: {
      // value值
      type: String,
      default: "code",
    },
    curModel: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 160,
    },
  },
  data() {
    return {
      currentData: null,
    };
  },
  watch: {
    curModel: {
      handler(val) {
        this.currentData = val;
      },
      immediate: true, // 立即执行一次
    },
  },
  methods: {
    // 选项发生改变时
    selectChange(val) {
      console.log('leo_val',val)
      this.$emit("update:curModel", this.currentData);
      this.$emit("selectChange", val);
    },
  },
};
</script>

<style>
.ai-course-select {
  margin-right: 10px;
}
.el-select {
  width: 100%;
  min-width:100px !important;
}
.el-input .el-input__inner {
  height: 34px;
  line-height: 34px;
  color: #333333;
}
.el-select__caret {
  font-size: 14px;
}
    
</style>
