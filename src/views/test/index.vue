<template>
  <div class="app-container">
    <el-form ref="queryForm" :inline="true" :model="queryParams" label-width="68px"
             size="small">
      <el-row>
        <el-col :span="5">
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="queryParams.name"
              clearable
              placeholder="请输入姓名"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="邮件" prop="email">
            <el-input
              v-model="queryParams.email"
              clearable
              placeholder="请输入邮件"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="身份份号" prop="certNumber">
            <el-input
              v-model="queryParams.certNumber"
              clearable
              placeholder="请输入身份份号"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="联系电话" prop="phone">
            <el-input
              v-model="queryParams.phone"
              clearable
              placeholder="请输入联系电话"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row justify="end" type="flex">
        <el-form-item>
          <el-button icon="el-icon-search" size="mini" type="primary" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <el-select v-model="currentOption" clearable placeholder="请输入城市编号">
      <el-option
        v-for="item in optionData"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <hello-tag :options="optionData" :value="currentOption" :msg="msgData"></hello-tag>
  </div>
</template>

<script>

export default {
  name: "test",
  data() {
    return {
      currentOption: "1",
      optionData: [
        {value: "1", label: "北京"},
        {value: "2", label: "上海"},
        {value: "3", label: "广州"},
        {value: "4", label: "深圳"}],
      queryParams: {
        name: "",
        email: "",
        certNumber: "",
        phone: ""
      },
      msgData: "Welcome to Your Vue.js App",

    }
  },
  methods: {
    handleQuery() {
      this.$model.alert("检索");
    },
    resetQuery() {
      this.$refs.queryForm.resetFields();
      this.$emit("query", this.queryParams);
    }

  }
}
</script>
