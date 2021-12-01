import NProgress from 'nprogress'
import router from './router/index'

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(to => {
  NProgress.done()
})
