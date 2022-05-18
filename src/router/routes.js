
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/gaz', component: () => import('pages/ForGaz.vue') },
      { path: '/firstresponsible', component: () => import('pages/FirstResponsible.vue') },
      { path: '/secondresponsible', component: () => import('pages/SecondResponsible.vue') },
      { path: '/thirdresponsible', component: () => import('pages/ThirdResponsible.vue') },
      { path: '/fourthresponsible', component: () => import('pages/FourthResponsible.vue') },
      { path: '/fifthresponsible', component: () => import('pages/FifthResponsible.vue') },
      { path: '/forcomment', component: () => import('pages/ForComment.vue') },
      { path: '/forcomplaint', component: () => import('pages/ForComplaint.vue') },
      { path: '/complaintsecret', component: () => import('pages/ComplaintSecret.vue') },
      { path: '/theweather', component: () => import('pages/TheWeather.vue') },
      { path: '/currency', component: () => import('pages/CurrencyPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
