import { FormProps, BasicColumn } from '@/components/Table';
import type { DescItem } from '/@/components/Description/index';
// import { VxeFormItemProps, VxeGridPropTypes } from '@/components/VxeTable';
const colProps = {
  xl: 12,
  xxl: 8,
};
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
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `shopCode`,
        label: `商品编码`,
        component: 'InputSearch',
        colProps,
        componentProps: {
          showSearch: true,
        },
      },
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

export const descItem: DescItem[] = [
  {
    field: 'hasBattery',
    label: '创建时间',
  },
];

export function getEditFormConfig(type: string): Partial<FormProps> {
  return {
    layout: 'vertical',
    showActionButtonGroup: false,
    schemas: [
      {
        field: `shopCode`,
        label: `商品编码`,
        component: 'InputSearch',
        colProps,
        componentProps: {
          showSearch: true,
        },
      },
      {
        field: `address`,
        label: `地址`,
        component: 'Input',
        colProps,
      },
    ],
  };
}
