<!-- .vuepress/components/SortableTable.vue -->
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index" @click="sort(index)">
                        {{ header }}
                        <span :class="getArrowClass(index)">
                            <!-- 根据排序状态显示箭头 -->
                            <span v-if="sortIndex === index" :class="sortOrder">
                                <span v-if="sortOrder === 'asc'">▲</span>
                                <span v-else>▼</span>
                            </span>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in sortedData" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>  
import { ref, computed } from 'vue';  
import pinyin from 'pinyin';  

const props = defineProps({  
    headers: Array,  
    data: Array,  
});  

const sortIndex = ref(null);  
const sortOrder = ref('asc');  

const sortedData = computed(() => {    
    if (sortIndex.value === null) return props.data;    
    const sorted = [...props.data];    
    sorted.sort((a, b) => {    
        const aValue = a[sortIndex.value];    
        const bValue = b[sortIndex.value];    
        // 如果是字符串且包含中文,使用拼音排序    
        if (typeof aValue === 'string' && typeof bValue === 'string') {    
            const aPinyin = pinyin(aValue, { style: pinyin.STYLE_NORMAL }).join('');    
            const bPinyin = pinyin(bValue, { style: pinyin.STYLE_NORMAL }).join('');    
            if (aPinyin < bPinyin) return sortOrder.value === 'asc' ? -1 : 1;    
            if (aPinyin > bPinyin) return sortOrder.value === 'asc' ? 1 : -1;    
            return 0;    
        }    
        // 数字或其他类型保持原有逻辑    
        if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1;    
        if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1;    
        return 0;    
    });    
    return sorted;    
});  

const sort = (index) => {  
    if (sortIndex.value === index) {  
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';  
    } else {  
        sortIndex.value = index;  
        sortOrder.value = 'asc';  
    }  
};  

const getArrowClass = (index) => {  
    return {  
        'default-arrow': sortIndex.value !== index,  
        'sort-arrow': sortIndex.value === index  
    };  
};  
</script>

<style scoped>
/* 默认箭头样式 */
.default-arrow::before {
    content: '▲▼';
    font-size: 0.8em;
    color: #888;
    margin-left: 5px;
}

.sort-arrow::after {
    content: '';
    display: inline-block;
}

.asc::after {
    content: '';
}

.desc::after {
    content: '';
}
</style>