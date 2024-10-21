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
          path: 'json',
          name: 'json',
          // component: () => import('@/views/JSON/index.vue'),
          children: [
            {
              path: 'json-format',
              name: 'json-format',
              component: () => import('@/views/JSON/JsonFormat.vue')
            },
            {
              path: 'json-compress',
              name: 'json-compress',
              component: () => import('@/views/JSON/JsonCompress.vue')
            }
          ]
        },
        {
          path: 'url',
          name: 'url',
          children: [
            {
              path: 'url-decode',
              name: 'url-decode',
              component: () => import('@/views/Url/UrlDecode.vue')
            },
            {
              path: 'url-encode',
              name: 'url-encode',
              component: () => import('@/views/Url/UrlEncode.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
