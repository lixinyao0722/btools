import VueRouter from 'vue-router'

const Flex = () => import(/* webpackChunkName: "flex" */ '../components/flex-demo/flex')
const Basic = () => import(/* webpackChunkName: "basic" */ '../components/basic/Index')
const ExcessiveAnimation = () => import(/* webpackChunkName: "excessiveAnimation" */ '../components/excessive-animation/Index')
const Tool = () => import(/* webpackChunkName: "tool" */ '../components/tool/Index')

/*Basic begin*/
const Introduce = () => import(/* webpackChunkName: "basic" */ '../components/basic/Introduce')
const VueInstance = () => import(/* webpackChunkName: "basic" */ '../components/basic/VueInstance')
/*Basic end*/

/*ExcessiveAnimation begin*/
const EnterLeave = () => import(/* webpackChunkName: "excessiveAnimation" */ '../components/excessive-animation/EnterLeave')
const StateExcessive = () => import(/* webpackChunkName: "excessiveAnimation" */ '../components/excessive-animation/StateExcessive')
/*ExcessiveAnimation end*/

/*Tool begin*/
const ProdEnvDeploy = () => import(/* webpackChunkName: "tool" */ '../components/tool/ProdEnvDeploy')
const SingleFileComp = () => import(/* webpackChunkName: "tool" */ '../components/tool/SingleFileComp')
const UnitTest = () => import(/* webpackChunkName: "tool" */ '../components/tool/unit-test/Index')

const ConfigTool = () => import(/* webpackChunkName: "tool" */ '../components/tool/unit-test/ConfigTool')
const SimpleAssert = () => import(/* webpackChunkName: "tool" */ '../components/tool/unit-test/SimpleAssert')
/*Tool end*/

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/flex',
      name: 'Flex',
      component: Flex,
      meta: {
        label: 'Flex布局测试',
        icon: 'email-unread',
      },
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic,
      meta: {
        label: '基础',
        icon: 'ios-cloudy-night',
      },
      children: [
        {
          path: 'introduce',
          name: 'Introduce',
          component: Introduce,
          meta: {
            label: '介绍',
            icon: 'android-download',
          }
        },
        {
          path: 'vue-instance',
          name: 'VueInstance',
          component: VueInstance,
          meta: {
            label: 'Vue实例',
            icon: 'android-radio-button-on'
          }
        }
      ]
    },
    {
      path: '/excessive-animation',
      name: 'ExcessiveAnimation',
      component: ExcessiveAnimation,
      meta: {
        label: '过渡 & 动画',
        icon: 'ios-partlysunny-outline',
      },
      children: [
        {
          path: 'enter-leave',
          name: 'EnterLeave',
          component: EnterLeave,
          meta: {
            label: '进入/离开 & 列表过渡',
            icon: 'ios-rainy-outline'
          }
        },
        {
          path: 'state-excessive',
          name: 'StateExcessive',
          component: StateExcessive,
          meta: {
            label: '状态过渡',
            icon: 'ios-flower'
          }
        }
      ]
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool,
      meta: {
        label: '工具',
        icon: 'ios-recording-outline',
      },
      children: [
        {
          path: 'prod-env-deploy',
          name: 'ProdEnvDeploy',
          component: ProdEnvDeploy,
          meta: {
            label: '生产环境部署',
            icon: 'ios-locked'
          }
        },
        {
          path: 'single-file-comp',
          name: 'SingleFileComp',
          component: SingleFileComp,
          meta: {
            label: '单文件组件',
            icon: 'ios-navigate'
          }
        },
        {
          path: 'unit-test',
          name: 'UnitTest',
          component: UnitTest,
          meta: {
            label: '单元测试',
            icon: 'ios-football'
          },
          children: [
            {
              path: 'config-tool',
              name: 'ConfigTool',
              component: ConfigTool,
              meta: {
                label: '配置和工具',
                icon: 'asterisk'
              }
            },
            {
              path: 'simple-assert',
              name: 'SimpleAssert',
              component: SimpleAssert,
              meta: {
                label: '简单的断言',
                icon: 'funnel'
              },
            }
          ]
        },
      ]
    },
    {
      path: '*',
      redirect: {name: 'Introduce'},
      meta: {
        withoutMenu: true
      }
    },
  ]
})
