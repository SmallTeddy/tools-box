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
          path: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'code',
          name: 'code',
          children: [
            {
              path: 'prismjs-code-highlight',
              name: 'prismjs-code-highlight',
              component: () => import('@/views/Code/PrismJs/index.vue')
            },
            {
              path: 'shiki-code-highlight',
              name: 'shiki-code-highlight',
              component: () => import('@/views/Code/Shiki/index.vue')
            }
          ]
        },
        {
          path: 'editor',
          name: 'editor',
          children: [
            {
              path: 'wang-editor',
              name: 'wang-editor',
              component: () => import('@/views/Editor/WangEditor/index.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
