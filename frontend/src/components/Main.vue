<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 160px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: white;
    line-height: 100%;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="../assets/imgs/rocket.png" style="height: 100%;vertical-align: bottom;">
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
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu :active-name="activeMenuName"
                theme="light" width="auto"
                @on-select="onSelectMenu"
                :open-names="[openMenuName]">
            <Submenu :name="submenuRoute.name"
                     :key="submenuRoute.name"
                     v-for="submenuRoute in children">
              <template slot="title">
                <Icon :type="submenuRoute.icon"></Icon>
                {{submenuRoute.label}}
              </template>

              <MenuItem :name="`${submenuRoute.name}-${menuItemRoute.name}`"
                        :key="menuItemRoute.name"
                        v-for="menuItemRoute in submenuRoute.children">
                <Icon :type="menuItemRoute.icon"></Icon>
                {{menuItemRoute.label}}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
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
        children: []
      }
    },
    created () {
      const {options: {routes}} = this.$router
      const filterRoutes = routes.filter(({name}) => name === 'Main')
      if (filterRoutes.length > 0) {
        const [mainRoute] = filterRoutes
        const {children} = mainRoute
        this.children = children
      }
    },
    computed: {
      //compute the current active menu name in order to highlight them, including all level menus.
      activeMenuName () {
        const {matched} = this.$route
        const names = []
        matched.forEach(({name}, index) => {
          if (name !== 'Main') {
            names.push(name)
          }
        })
        return names.join('-')
      },
      openMenuName () {
        return this.$route.matched.length >= 2 && this.$route.matched[1].name
      }
    },
    methods: {
      onSelectMenu (name) {
        const [, secondName] = name.split('-')
        this.$router.push({name: secondName})
      }
    }
  }
</script>
