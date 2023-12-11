<template>
  <BasicTable @register="registerTable">
    <template #form-name="{ model, field }">
      <a-input v-model:value="model[field]" />
    </template>
    <template #headerTop>
      <Alert type="info" show-icon>
        <template #message>
          <template v-if="state.selectedRowKeys.length > 0">
            <span>已选中{{ state.selectedRowKeys.length }}条记录(可跨页)</span>
            <a-button type="link" @click="state.selectedRowKeys.splice(0)" size="small"
              >清空</a-button
            >
          </template>
          <template v-else>
            <span>未选中任何项目</span>
          </template>
        </template>
      </Alert>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicTable, useTable } from '@/components/Table';
  import { getBasicColumns, getFormConfig } from './data';
  import { Alert } from 'ant-design-vue';
  import type { Key } from 'ant-design-vue/lib/table/interface';

  import { demoListApi } from '@/api/demo/table';

  let rowKey = 'key'; // 默认rowKey name
  const state = reactive<{
    selectedRowKeys: Key[];
  }>({
    selectedRowKeys: [],
  });
  const [registerTable, { getForm }] = useTable({
    title: '',
    api: demoListApi,
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    showTableSetting: true,
    rowSelection: {
      type: 'checkbox',
      selectedRowKeys: state.selectedRowKeys,
      onSelect: onSelect,
      onSelectAll: onSelectAll,
    },
  });

  function getFormValues() {
    console.log(getForm().getFieldsValue());
  }

  function onSelect(record, selected) {
    if (selected) {
      state.selectedRowKeys.push(record[rowKey]);
    } else {
      state.selectedRowKeys
        .splice(0)
        .push(...state.selectedRowKeys.filter((id) => id !== record[rowKey]));
    }
  }

  function onSelectAll(selected, selectedRows, changeRows) {
    const changeIds = changeRows.map((item) => item[rowKey]);
    if (selected) {
      state.selectedRowKeys.push(...changeIds);
    } else {
      state.selectedRowKeys.splice(0);
    }
  }
</script>
