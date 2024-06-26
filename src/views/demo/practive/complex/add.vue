<template>
  <PageWrapper :title="getTitle" content="" contentBackground @back="goBack">
    <template #extra> </template>
    <BasicForm @register="registerForm" />
    <template #rightFooter>
      <a-button type="primary" @click="handleSubmit()"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { getEditFormConfig } from './data';
  import { useHook } from './useHook';

  const props = defineProps({
    action: {
      type: String,
      default: 'add',
    },
  });
  const [registerForm, { setFieldsValue }] = useForm(getEditFormConfig(props.action));
  const { goBack } = useHook();

  const getTitle = computed(() => (props.action === 'add' ? '新增' : '编辑'));
  const getDetail = () => {
    if (props.action === 'add') {
    } else {
      setFieldsValue({
        shopCode: 'fe',
      });
    }
  };
  const handleSubmit = () => {
    goBack();
  };
  onMounted(() => {
    getDetail();
  });
</script>
