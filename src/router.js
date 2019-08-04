import Vue from 'vue';
import Router from 'vue-router';
import * as Route from './utils/router-map';

Vue.use (Router);


export default new Router ({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Route.Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Route.Register,
      redirect: '/register/step1',
      children: [
        {path: 'step1', name: 'step1', component: Route.StepCode},
        {path: 'step2', name: 'step2', component: Route.StepInfo},
      ],
    },
    {
      path: '/opera',
      name: 'opera',
      component: Route.Opera,
    },
    {
      path: '/about',
      name: 'about',
      component: Route.About,
    },
    {
      path: '/panel',
      name: 'panel',
      redirect:'/panel/captain'
    },
    {
      path: '/panel/captain',
      name: 'captain',
      component: Route.panelCaptain,
      redirect:'/panel/captain/tissue',
      children:[
        {path:'tissue',name:'captain_tissue',component:Route.captainTissue},//组织结构
        {path:'decision',name:'captain_decision',component:Route.captainDecision},//决策层列表
        {path:'manager',name:'captain_manager',component:Route.captainManager}//当前管理层列表
      ]
    },
    {
      path: '/panel/manager',
      name: 'manager',
      component: Route.panelManager,
      redirect:'/panel/manager/tissue',
      children:[
        {path:'tissue',name:'manager_tissue',component:Route.captainDecision},//志愿组织
        {path:'staff',name:'manager_staff',component:Route.viewList},//我的部员
        {path:'firstView',name:'manager_waitfirst_view',component:Route.managerWaitfirstView},//一面待面试
        {path:'hasfirstView',name:'manager_hasfirst_view',component:Route.managerHasfirstView},//一面已面试
        {path:'commonfirstView',name:'manager_commonfirst_view',component:Route.managerCommonfirstView},//跨部人员
        {path:'finalView',name:'manager_final_view',component:Route.managerFinalView},//二面待面试
        {path:'hasfinalView',name:'manager_hasfinal_view',component:Route.managerHasfinalView},//二面已面试
      ]
    },
    {
      path: '/panel/operator',
      name: 'operator',
      component: Route.panelOperator,
      redirect:'/panel/operator/account',
      children:[
        {path:'account',name:'operator_account',component:Route.operatorAccount},//账号管理
        {path:'application',name:'operator_application',component:Route.operatorApplication},//申请列表
        {path:'rudder',name:'operator_rudder',component:Route.operatorRubber}//志愿分舵
      ]
    },
    {
      path:'*',
      redirect:'/login'       // 用户主动输入错误url转跳
    }
    /* {
      path: '/opera',
      name: 'opera',
      route level code-splitting
      this generates a separate chunk (about.[hash].js) for this route
      which is lazy-loaded when the route is visited.
      component: () =>
        import (webpackChunkName: "about" './views/About.vue'),
    }, */
  ],
});
