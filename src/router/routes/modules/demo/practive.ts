import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { ExceptionEnum } from '@/enums/exceptionEnum';
import { t } from '@/hooks/web/useI18n';

const ExceptionPage = () => import('@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/practive-demo',
  name: 'PractiveDemo',
  component: LAYOUT,
  redirect: '/practive-demo/compolex',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: t('routes.demo.practice.best'),
  },
  children: [
    {
      path: 'complex',
      name: 'ComplexApplication',
      component: () => import('@/views/demo/practive/complex/index.vue'),
      meta: {
        title: t('routes.demo.practice.complexApplication'),
        hideChildrenInMenu: true,
      },
      children: [
        {
          path: ':action',
          name: 'ComplexApplicationDetail',
          component: () => import('@/views/demo/practive/complex/main.vue'),
          meta: {
            title: t('routes.demo.practice.complexApplication'),
            currentActiveMenu: '/practive-demo/complex',
            hideTab: true,
          },
        },
      ],
    },
  ],
};

export default page;
