var myChart4 = echarts.init(document.getElementById("main4"));
var data1 = []
myChart4.showLoading({
    text: 'loading',
    color: '#4cbbff',
    textColor: '#4cbbff',
    maskColor: 'rgba(0, 0, 0, 0.9',
});


$.get("../data/data.json", function(data) {
    console.log("===" + JSON.stringify(data.data_pie))
        // data1 = JSON.parse(data),
    data1 = data.data_pie,
        myChart4.setOption({
            color: ['red', 'yellow', 'LimeGreen', 'Teal', 'Purple'],
            tooltip: {
                extraCssText: 'width:90px; height:22px;',
                formatter(data) {
                    return (
                        data.marker + data.name +
                        data.value + "%"
                    );
                }
            },
            title: {
                text: '购买植发护发产品各年龄段消费者占比',
                subtext: '（2019）（单位：%）',
                top: '5',
                left: 'center',
                textStyle: {
                    color: 'rgb(82,123,172)',
                    fontSize: 15
                },
                subtextStyle: { //副标题样式
                    color: '#fff',
                    fontSize: 10,
                }
            },
            legend: {
                top: '48', //设置图例距离顶部边距
                right: 10, //设置图例距离左侧边距
                itemWidth: 10, //设置图例标记的图形宽度
                itemHeight: 10, //设置图例标记的图形高度
                itemGap: 15, //设置图例每项之间的间隔
                orient: 'vertical', //设置图例列表的布局朝向，'horizontal'|'vertical'
                data: ['70前', '70后', '80后', '90后', '00后'],
                textStyle: {
                    color: 'rgba(51,0,255,1)',
                    fontWeight: 'bold',
                    fontSize: 10
                }
            },
            calculable: true,
            color: ['rgb(41,182,203)', 'rgb(52,195,242)', 'rgb(52,146,242)', 'rgb(86,111,206)', '#fff'],
            series: [ //配置数据系列组件
                {
                    type: 'pie',
                    //半径大小 圆心位置
                    radius: ['20%', '60%'],
                    center: ['50%', '66%'],
                    label: {
                        normal: {
                            //取消原来的显示模式
                            show: false,
                            //在中间显示
                            position: 'center'
                        },
                        //高亮扇区
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: data1
                        //backgroundColor:'rgba(128,128,128,0.1)',
                }
            ]
        })
});
//使用刚指定的配置项和数据显示图表

setTimeout(function() {
    myChart4.hideLoading();
}, 2000);


myChart4.on('legendselectchanged', function(params) {
    //获取点击图例的选中状态
    var isSelected = params.selected[params.name];
    //在控制台中打印
    console.log((isSelected ? '你选中了' : '你取消选中了') + '图例:' + params.name);
    //打印所有图例的状态
    console.log(params.selected);
});