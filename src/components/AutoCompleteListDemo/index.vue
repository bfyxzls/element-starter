<!-- 文本框自动补完功能 -->
<template>
  <div style="border:1px solid #ff0000">
    <el-autocomplete
      v-model="dataValue"
      :fetch-suggestions="fetchSuggestions"
      @select="handleSelect"
    >
      <template slot-scope="{ item }">{{ item.label }}</template>
    </el-autocomplete>
    <h1>子组件的值:{{subValue}}</h1>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteListDemo',
  //allInfos是父组件传来的值，如果allInfos不是父组件传来的就不用这样写
  props: ["allInfos"],
  data() {
    return {
      dataValue: null,
      subValue: 1,
    }
  },
  methods: {
    fetchSuggestions(queryString, cb) {
      let results = this.allInfos;
      results = queryString
        ? results.filter(this.createFilter(queryString))
        : results;
      cb(results);
    },
    createFilter(queryString) {
      return (item) => {
        return item.value.toUpperCase().match(queryString.toUpperCase());
      };
    },
    handleSelect(item) {
      this.dataValue = item.label; // 回调在文框中显示的值
      this.$emit('input', item.value);// 绑定到父组件的值
    },
  }
};
</script>
