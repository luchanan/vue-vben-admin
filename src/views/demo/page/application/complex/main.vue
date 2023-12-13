<template>
  <component :is="currentComponent" v-bind="{ action }" />
</template>
<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouter } from 'vue-router';
  import { createAsyncComponent } from '@/utils/factory/createAsyncComponent';
  // import { useCommon } from '/@/hooks/web/useCommon';

  const { currentRoute } = useRouter();
  console.log(currentRoute);
  const params = computed(() => {
    return unref(currentRoute).params;
  });
  const components = {
    add: createAsyncComponent(() => import('./add.vue')),
    edit: createAsyncComponent(() => import('./add.vue')),
    detail: createAsyncComponent(() => import('./detail.vue')),
  };
  const currentComponent = computed(() => {
    // 区分 add/edit/detail
    return components[unref(params).action as string];
  });
  const action = computed(() => {
    return unref(params).action as string;
  });
</script>
