// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client';
import SortableTable from './components/SortableTable.vue';

export default defineClientConfig({
    enhance: ({ app }) => {
        app.component('SortableTable', SortableTable);
    },
});
