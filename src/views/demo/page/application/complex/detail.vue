<template>
  <PageWrapper title="详情" content="" contentBackground @back="goBack">
    <template #extra>
      <a-button type="primary" @click="goEdit"> 编辑</a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '@/components/Page';
  import { useHook } from './useHook';
  import { unref } from 'vue';

  const { query, goBack, goRoute } = useHook();
  defineOptions({ name: 'ApplicationComplexDetail' });
  defineProps({
    action: {
      type: String,
      default: 'add',
    },
  });
  const goEdit = () => {
    goRoute({
      name: 'ApplicationComplexDetail',
      params: {
        action: 'edit',
      },
      query: unref(query),
    });
  };
</script>
