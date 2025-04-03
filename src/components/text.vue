<template>
 <a-layout style="min-height: 100vh">
    <!-- 设置整个layout的高度为100% -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <!-- 
            v-mode双向绑定collapsed属性，为true时折叠。
            collapsed表示可折叠
          -->
          <div class="logo"/>
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
            <!-- 
             v-model双向绑定selectedKeys属性，它是一个数组包含当前选中的菜单键
             theme="light"：设置菜单的主题为浅色主题
             mode="inline"：设置菜单的显示模式为内联模式，即菜单项垂直排列
            -->
            <a-menu-item key="1">
                <QqOutlined />
                <span>干倒鹅厂</span>
                <a href="text.vue"></a>
            </a-menu-item>
            <a-menu-item key="2">
                <desktop-outlined />
                <span>图标2</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>User</span>
                    </span>
                </template>
                <a-menu-item key="3">1</a-menu-item>
                <a-menu-item key="4">2</a-menu-item>
                <a-menu-item key="5">3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>Team</span>
                    </span>
                </template>
                <a-menu-item key="6">4</a-menu-item>
                <a-menu-item key="7">5</a-menu-item>
                <a-menu-item key="8">6</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="9">
                <!-- 类似ul -->
                <file-outlined/>
                <!-- 文件图标 -->
                 <span>File</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
    
    <!-- 主体部分 -->
    <a-layout>
        <a-layout-header style="background: #fff;padding: 0;"/>

        <a-layout-content style="margin: 0 16px;">
        <a-breadcrumb style="margin: 16px 0;">
            <a-breadcrumb-item>用户</a-breadcrumb-item>
            <a-breadcrumb-item>账单</a-breadcrumb-item>
            </a-breadcrumb>
            <div :style="{ padding: '24px', minHeight: '360px' }">
                <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
                    <template #bodyCell="{ column }">
                        <template v-if="column.key === 'operation'">
                         <a>action</a>
                        </template>
                    </template>
                </a-table>
            </div>
        </a-layout-content>

        <a-layout-footer style="text-align: center;">
                zj制作
            </a-layout-footer>
    </a-layout>
  </a-layout>
 </template>
 <script lang="ts" setup name="text">
 import type{TableColumnsType } from 'ant-design-vue';
 import { ref } from 'vue';
 //导入antdv图标
 import {
   PieChartOutlined,
   DesktopOutlined,
   UserOutlined,
   TeamOutlined,
   FileOutlined,
   QqOutlined 
 } from '@ant-design/icons-vue';
 //暂时不知道
 const collapsed = ref<boolean>(false);
 const selectedKeys = ref<string[]>(['1']);

 const columns:TableColumnsType=[
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 30 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 30 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 30 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 30 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 30 },
 ]
 interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
 </script>

 
 <style>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>