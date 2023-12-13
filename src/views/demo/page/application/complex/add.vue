<template>
  <PageWrapper :title="getTitle" content="" contentBackground @back="goBack">
    <template #extra> </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { useHook } from './useHook';

  const { goBack } = useHook();
  const props = defineProps({
    action: {
      type: String,
      default: 'add',
    },
  });
  const getTitle = computed(() => (props.action === 'add' ? '新增' : '编辑'));
</script>
