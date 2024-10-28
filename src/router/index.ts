const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    // {
    //   path: '/login',
    //   component: () => import('@/views/login/Login.vue'),
    // },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'code',
          name: 'code',
          children: [
            {
              path: 'code-highlight',
              name: 'code-highlight',
              component: () => import('@/views/Code/PrismJs/index.vue')
            }
          ]
        },
      ]
    }
  ]
})

export default router
