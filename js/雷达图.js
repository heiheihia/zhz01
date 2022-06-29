//基于准备好的DOM，初始化ECharts图表
var myChart2 = echarts.init(document.getElementById("main2"));
//指定图表的配置项和数据
var option = { //指定图表的配置项和数据
    title: { //配置标题组件
        text: '90后男女主要脱发区域统计',
        subtext: '(单位：%)',
        target: 'blank',
        top: '5',
        left: 'center',
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 15,
        },
        subtextStyle: { //副标题的属性
            color: '#fff',
            // 同主标题
        },
    },
    legend: { //配置图例组件
        show: true, //设置是否显示图例
        icon: 'rect', //icon.'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
        top: '25', //设置图例距离顶部边距
        right: 10, //设置图例距离左侧边距
        itemWidth: 10, //设置图例标记的图形宽度
        itemHeight: 10, //设置图例标记的图形高度
        itemGap: 15, //设置图例每项之间的间隔
        orient: 'vertical', //设置图例列表的布局朝向，'horizontal'|'vertical'
        data: [ //设置图例的数据数组，数组项通常为字符串，每项代表一个系列name
            {
                name: '男',
                icon: 'rect',
                textStyle: {
                    color: 'rgba(51,0,255,1)',
                    fontWeight: 'bold',
                    fontSize: 10
                }
            }, //设置图例项的文本样式
            {
                name: '女',
                icon: 'rect',
                textStyle: {
                    color: 'rgba(51,0,255,1)',
                    fontWeight: 'bold',
                    fontSize: 10
                }
            } //'normal'|'bold'|'bolder'|'lighter'
        ],
    },
    tooltip: { //配置详情提示框组件
        //设置雷达图的tooltip不会超出div，也可设置position属性
        //设置定位不会随着鼠标移动而变化
        confine: true, //设置是否将tooltip框限制在图表的区域内
        enterable: true, //设置鼠标是否可以移动到tooltip区域内
        extraCssText: 'width:90px; height:150px;'
    },
    radar: [{ //配置雷达图坐标系组件，只适用于雷达图
        center: ['50%', '64%'], //设置中心坐标，数组的第1项是横坐标，第2项是纵坐标
        radius: 50, //设置圆的半径，数组的第一项是内半径，第二项是外半径
        startAngle: 90, //设置坐标系起始角度，也就是第一个指示器轴的角度
        name: { //设置（圆外的标签）雷达图每个指示器名称
            formatter: '{value}',
            textStyle: {
                fontSize: 12,
                padding: [4, 5],
                backgroundColor: 'rgb(41,182,203,.4)',
                color: 'rgb(41,182,203)'
            }
        },
        nameGap: 2, //设置指示器名称和指示器轴的距离，默认为15
        splitNumber: 2, //设置指示器轴的分割段数，default
        //shape:'circle',  //设置雷达图绘制类型，支持'polygon','circle'
        //设置坐标轴轴线设置
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid',
            }
        },
        //设置坐标轴在grid区域中的分隔线
        splitLine: {
            lineStyle: {
                color: '#fff',
                width: 1,
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgb(52,146,242,.8)', 'rgb(52,146,242.8)']
            }
        }, //设置分隔区域的样式
        indicator: [ //配置雷达图指示器，指定雷达图中的多个变量，跟data中value对应
            {
                name: '发际线',
                max: 100
            }, {
                name: '头顶',
                max: 100
            }, {
                name: '额角',
                max: 100
            }, {
                name: '后脑勺',
                max: 100
            }, {
                name: '发缝',
                max: 100
            }, {
                name: '双鬓',
                max: 100
            }
        ]
    }],
    series: [{
        name: '雷达图', //系列名称，用于tooltip的显示，图例筛选
        type: 'radar', //系列类型: 雷达图
        //拐点样式，'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
        symbol: 'triangle',
        itemStyle: { //设置折线拐点标志的样式
            normal: {
                lineStyle: {
                    width: 1
                },
                opacity: 0.2
            }, //设置普通状态时的样式
            emphasis: {
                lineStyle: {
                    width: 5
                },
                opacity: 1
            } //设置高亮时的样式
        },
        data: [ //设置雷达图的数据是多变量(维度)
            { //设置第1个数据项
                name: '女', //数据项名称
                value: [46.3, 34.6, 26.5, 15.5, 41.6, 5.6], //value是具体数据
                symbol: 'triangle',
                symbolSize: 5, //设置单个数据标记的大小
                //设置拐点标志样式
                itemStyle: {
                    normal: {
                        borderColor: 'blue',
                        borderWidth: 3
                    }
                },
                //设置单项线条样式
                lineStyle: {
                    normal: {
                        color: 'red',
                        width: 1,
                        opacity: 0.9
                    }
                }
            }, { //设置第2个数据项
                name: '男',
                value: [53.1, 40.8, 29.4, 21.6, 17.2, 6.3],
                symbol: 'circle',
                symbolSize: 5, //设置单个数据标记的大小
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(51,0,255,1)',
                        borderWidth: 3,
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'blue',
                        width: 1,
                        opacity: 0.9
                    }
                },
            }
        ]
    }, ]
};
//使用刚指定的配置项和数据显示图表
myChart2.setOption(option);