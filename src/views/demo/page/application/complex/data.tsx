import { optionsListApi } from '@/api/demo/select';
import { FormProps, FormSchema, BasicColumn } from '@/components/Table';
import { VxeFormItemProps, VxeGridPropTypes } from '@/components/VxeTable';
import { ref } from 'vue';
import { Input } from 'ant-design-vue';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '开始时间',
      width: 150,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      width: 150,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
}
export function getFormConfig(): Partial<FormProps> {
  const colProps = {
    xl: 12,
    xxl: 8,
  };
  return {
    labelWidth: 100,
    watchEvent: true, // 开启值触发reload
    schemas: [
      {
        field: `shopCode`,
        label: `商品编码`,
        component: 'InputSearch',
        // watchEventNames: ['search'],
        colProps,
        componentProps: {
          showSearch: true,
        },
      },
      // {
      //   field: `name`,
      //   label: `商品名称`,
      //   component: 'Select',
      //   slot: 'name',
      //   colProps,
      // },
      {
        field: `address`,
        label: `地址`,
        component: 'Input',
        colProps,
      },
      {
        field: 'status',
        component: 'Select',
        label: '状态',
        componentProps: {
          options: [
            {
              label: '已创建',
              value: 0,
            },
            {
              label: '已完成',
              value: 1,
            },
          ],
        },
        colProps,
      },
    ],
  };
}
