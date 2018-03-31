/**
 * 作者: xinyaoli
 * 日期: 2018/3/31 17:45
 */
const Basic = () => import(/* webpackChunkName: "BASIC" */ '../components/basic/Index')
const ExcessiveAnimation = () => import(/* webpackChunkName: "ExcessiveAnimation" */ '../components/excessive-animation/Index')
const Tool = () => import(/* webpackChunkName: "Tool" */ '../components/tool/Index')

/*Basic begin*/
const Introduce = () => import(/* webpackChunkName: "Basic" */ '../components/basic/Introduce')
const VueInstance = () => import(/* webpackChunkName: "Basic" */ '../components/basic/VueInstance')
/*Basic end*/

/*ExcessiveAnimation begin*/
const EnterLeave = () => import(/* webpackChunkName: "ExcessiveAnimation" */ '../components/excessive-animation/EnterLeave')
const StateExcessive = () => import(/* webpackChunkName: "ExcessiveAnimation" */ '../components/excessive-animation/StateExcessive')
/*ExcessiveAnimation end*/

/*Tool begin*/
const ProdEnvDeploy = () => import(/* webpackChunkName: "Tool" */ '../components/tool/ProdEnvDeploy')
const SingleFileComp = () => import(/* webpackChunkName: "Tool" */ '../components/tool/SingleFileComp')
const UnitTest = () => import(/* webpackChunkName: "Tool" */ '../components/tool/UnitTest')
/*Tool end*/

export default [
  {
    path: '/basic',
    name: 'Basic',
    component: Basic,
    label: '基础',
    icon: 'ios-cloudy-night',
    children: [
      {
        path: 'introduce',
        name: 'Introduce',
        component: Introduce,
        label: '介绍',
        icon: 'android-download',
      },
      {
        path: 'vue-instance',
        name: 'VueInstance',
        component: VueInstance,
        label: 'Vue实例',
        icon: 'android-radio-button-on'
      }
    ]
  },
  {
    path: '/excessive-animation',
    name: 'ExcessiveAnimation',
    component: ExcessiveAnimation,
    label: '过渡 & 动画',
    icon: 'ios-partlysunny-outline',
    children: [
      {
        path: 'enter-leave',
        name: 'EnterLeave',
        component: EnterLeave,
        label: '进入/离开 & 列表过渡',
        icon: 'ios-rainy-outline'
      },
      {
        path: 'state-excessive',
        name: 'StateExcessive',
        component: StateExcessive,
        label: '状态过渡',
        icon: 'ios-flower'
      }
    ]
  },
  {
    path: '/tool',
    name: 'Tool',
    component: Tool,
    label: '工具',
    icon: 'ios-recording-outline',
    children: [
      {
        path: 'prod-env-deploy',
        name: 'ProdEnvDeploy',
        component: ProdEnvDeploy,
        label: '生产环境部署',
        icon: 'ios-locked'
      },
      {
        path: 'single-file-comp',
        name: 'SingleFileComp',
        component: SingleFileComp,
        label: '单文件组件',
        icon: 'ios-navigate'
      },
      {
        path: 'unit-test',
        name: 'UnitTest',
        component: UnitTest,
        label: '单文件组件',
        icon: 'ios-football'
      },
    ]
  }
]
