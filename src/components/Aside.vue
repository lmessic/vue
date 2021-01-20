<template>
  <div>
    <el-row>
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">文学作品</template>
            <el-menu-item index="ten">滕王阁序</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">node.js</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'nav-menu',
  data () {
    return {}
  },
  methods: {
    handleOpen () {

    },
    handleClose () {},
    handleSelect (key) {
      console.log(key)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
