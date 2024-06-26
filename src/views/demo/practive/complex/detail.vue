<template>
  <PageWrapper title="详情" content="" contentBackground @back="goBack">
    <template #extra>
      <a-button type="primary" @click="goEdit"> 编辑</a-button>
    </template>
    <Description @register="registerDescription" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '@/components/Page';
  import { Description, useDescription } from '@/components/Description/index';
  import { descItem } from './data';
  import { useHook } from './useHook';
  import { unref } from 'vue';

  const [registerDescription, { setDescProps }] = useDescription({
    schema: descItem,
    column: 4,
    data: [],
    bordered: false,
  });
  const { query, goBack, goRoute } = useHook();
  defineOptions({ name: 'ComplexApplicationDetail' });
  defineProps({
    action: {
      type: String,
      default: 'add',
    },
  });
  const goEdit = () => {
    goRoute({
      name: 'ComplexApplicationDetail',
      params: {
        action: 'edit',
      },
      query: unref(query),
    });
  };
  const getDetail = () => {
    setDescProps({
      data: {},
    });
  };
  getDetail();
</script>
