<template>
  <div ref="chartRef" class="echart"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import * as echarts from 'echarts'
  let chartRef = ref();
  let myChart;
  onUnmounted(() => {
    myChart.dispose()
    myChart = null
  })
  onMounted(() => {
    myChart = echarts.init(chartRef.value)
    let options = {
      tooltip: {
        trigger: 'item'
      },
      color: ['#ffd666', '#ffa39e', '#409EFF'],
      series: [
        {
          name: '前端课程',
          type: 'pie',
          radius: '70%',
          data: [
            {value: 43340, name: '重学前端'},
            {value: 7003, name: 'Javascript核心原理解析'},
            {value: 4314, name: '玩转Vue3全家桶'}
          ]
        }
      ]
    }
    myChart.setOption(options)
  })
</script>

<style lang="scss" scoped>
  .echart {
    width: 400px;
    height: 400px;
  }
</style>