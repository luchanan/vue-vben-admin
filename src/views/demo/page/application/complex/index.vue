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
      <a-button type="primary" @click="handleGo('add', {})">新增</a-button>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '详情',
              onClick: handleGo.bind(null, 'detail', record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除',
              popConfirm: {
                title: '是否确认删除',
                placement: 'left',
                confirm: handleGo.bind(null, 'del', record),
              },
            },
          ]"
        />
      </template>
    </template>
  </BasicTable>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getBasicColumns, getFormConfig } from './data';
  import { Alert } from 'ant-design-vue';
  import type { Key } from 'ant-design-vue/lib/table/interface';
  import { useGo } from '@/hooks/web/usePage';
  import { demoListApi } from '@/api/demo/table';

  defineOptions({ name: 'ApplicationComplex' });
  let rowKey = 'key'; // 默认rowKey name
  const state = reactive<{
    selectedRowKeys: Key[];
  }>({
    selectedRowKeys: [],
  });
  const [registerTable] = useTable({
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
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });
  const go = useGo();
  function handleGo(action: string, record: Recordable) {
    let params = {
      name: 'ApplicationComplexDetail',
      params: {
        action,
      },
      query: { id: record.id },
    };
    switch (action) {
      case 'del':
        // todo del
        break;
      default:
        go(params);
        break;
    }
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
