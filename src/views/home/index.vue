<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="250px">
        <nav-menu />
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import navMenu from '@/components/Aside'
export default {
  components: {
    navMenu
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
