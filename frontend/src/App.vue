<template>
  <div class="layout" id="app">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="./assets/imgs/rocket.png" style="height: 100%;vertical-align: bottom;">
            <span style="vertical-align: bottom;">Web Lab</span>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>

      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}" width="250">
          <!--最大支持三级菜单-->
          <Menu :active-name="$route.name"
                v-if="openNames.length > 0"
                theme="light" width="auto"
                @on-select="onSelectMenu"
                :open-names="this.openNames">
            <!--一级菜单-->
            <Submenu :name="firstRoute.name" :key="firstRoute.name" v-for="firstRoute in firstRoutes">
              <template slot="title">
                <Icon :type="firstRoute.meta.icon"></Icon>
                {{firstRoute.meta.label}}
              </template>

              <template v-if="firstRoute.children && firstRoute.children.length > 0"
                        v-for="secondRoute in firstRoute.children">
                <!--二级非叶子菜单-->
                <Submenu :name="secondRoute.name" v-if="secondRoute.children && secondRoute.children.length > 0">
                  <template slot="title">
                    <Icon :type="secondRoute.meta.icon"></Icon>
                    {{secondRoute.meta.label}}
                  </template>

                  <!--三级菜单-->
                  <MenuItem :name="thirdRoute.name" :key="thirdRoute.name"
                            v-for="thirdRoute in secondRoute.children">
                    <Icon :type="thirdRoute.meta.icon"></Icon>
                    {{thirdRoute.meta.label}}
                  </MenuItem>
                </Submenu>

                <!--二级叶子菜单-->
                <MenuItem v-else :name="secondRoute.name">
                  <Icon :type="secondRoute.meta.icon"></Icon>
                  {{secondRoute.meta.label}}
                </MenuItem>
              </template>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem v-for="breadcrumb in breadcrumbs"
                            :key="breadcrumb.name">
              <Icon :type="breadcrumb.icon"></Icon>
              {{breadcrumb.label}}
            </BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '12px', minHeight: '280px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        openNames: [],//默认打开的非叶子菜单的名称。组件bug：只有在组件第一次渲染时设置有效
        firstRoutes: [],//一级菜单对应路由
        names: [],
        breadcrumbs: []
      }
    },
    created () {
      const {options: {routes}} = this.$router
      this.firstRoutes = routes
      this.resolveInfoByRoute(this.$route)
    },
    watch: {
      //监听路由对象
      '$route' (nVal, oVal) {
        this.resolveInfoByRoute(nVal)
      }
    },
    methods: {
      resolveInfoByRoute ($route) {
        const {matched} = $route
        if (matched.length > 0) {
          if (this.openNames.length === 0) {
            this.openNames = matched.map(({name}) => name)
          }
          this.breadcrumbs = matched.map(({name, meta: {label, icon}}) => ({
            label,
            name,
            icon
          }))
        }
      },
      //选中叶子菜单
      onSelectMenu (name) {
        this.$router.push({name})
      },
    },
  }
</script>

<style>
</style>
