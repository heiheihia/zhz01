//基于准备好的dom，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main6"));
var option = { //指定图表的配置项和数据
    color: ['LimeGreen', 'DarkGreen', 'red', 'blue', 'Purple'],
    title: {
        left: 'center',
        top: 5,
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 18
        },
        text: '90后爱用的防脱洗发水品牌排名'
    },
    color: ['rgb(41,182,203)', 'rgb(52,195,242)', 'rgb(52,146,242)', 'rgb(86,111,206)'],
    series: [{
        name: '名称',
        type: 'funnel',
        left: 'center',
        sort: 'ascending',
        y: 190,
        y2: 150,
        width: '50%',
        min: 0,
        max: 5,
        minSize: '0%',
        maxSize: '100%',
        gap: 15,
        data: [{
            value: 1,
            name: '吕'
        }, {
            value: 2,
            name: '滋源'
        }, {
            value: 3,
            name: '施华蔻'
        }, {
            value: 4,
            name: '美体小铺'
        }, {
            value: 5,
            name: '卡诗'
        }, ],
        label: {
            normal: {
                formatter: function(params) {
                    return params.name;
                },
                position: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                },
            },
        },
        itemStyle: {
            normal: {
                borderWidth: 0,
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
    }, ],
};
myChart.setOption(option); //使用刚指定的配置项和数据显示图表
window.addEventListener("resize", function() {
    myChart.resize(); //使图表自适应窗口的大小
});
//回调函数处理鼠标点击事件并且显示各数据信息内容
myChart.on('click', function(params) {
    alert(params.name + '  排名第' + params.value +
        '\n\n' + '将为你转到淘宝搜索商品' + params.name);
    window.open('https://s.taobao.com/search?q=' + params.name + '&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.jianhua.201856-taobao-item.2&ie=utf8&initiative_id=tbindexz_20170306');
});