<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff;padding: 0;">
        <div style=" border: 0px red solid;">
          <Button type="primary" style="float: left;margin-top: 20px; margin-left: 100px;">增加</Button>
          <a-space direction="vertical" style="margin:20px 0 0 600px;">
            <a-input-search v-model:value="value" placeholder="input search text" enter-button @search="onSearch" />
          </a-space>
        </div>
      </a-layout-header>
      <a-table :columns="columns" :data-source="users" :scroll="{ x: 1300, y: 1000 }">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'operation'">
            <a>更改</a>
          </template>
        </template>
      </a-table>
      <a-layout-footer style="text-align: center">

      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup name="Person">
import { Button, type TableColumnsType } from 'ant-design-vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const value = ref<string>('');
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
//接口
interface user {
  name: string,
  number: number,
  time: string
}

const users = ref<user[]>([])

const fetchData = async () => {
  try {
    const response = await axios.get<user[]>("http://localhost:3001")
    users.value = response.data;
  } catch (error) {
    console.log("错误：", error)
  }
}
//生命周期钩子，组件在挂载后调用函数
onMounted(() => {
  fetchData();
})

//表格
const columns: TableColumnsType = [
  { title: '名字', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '电话', width: 150, dataIndex: 'number', key: 'age', fixed: 'left' },
  { title: '时间', dataIndex: 'time', key: '1', width: 200 },
  {
    title: '',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
];
</script>








<style>

</style>