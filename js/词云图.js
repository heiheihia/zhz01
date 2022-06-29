var myChart1 = echarts.init(document.getElementById("main1"));
var option = { //指定图表的配置项和数据
    title: { //配置标题组件
        text: '百度搜索前10关键词',
        x: 'center',
        y: 5,
        textStyle: {
            color: '#fff',
            fontSize: 15,
        }
    },
    series: [{ //数据系列及其配置
            name: '百度搜索前10关键词', //设置名称
            type: 'wordCloud', //设置图表类型为字云图
            sizeRange: [5, 10], //设置数据大小范围
            size: ['40%', '90%'], //设置显示的字云图的大小
            textRotation: [0, 45, 90, 100, 135, -45, -90], //设置文字倾斜角度
            textPadding: 1, //设置文字之间的间距
            autoSize: {
                enable: true,
                minSize: 8
            }, //设置文字的自动大小
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 26,
                    color: '#333',
                    shadowColor: '#ccc',
                    fontSize: 15
                }
            },
            data: [{
                "name": "脱发严重是什么原因引起的",
                "value": 100
            }, {
                "name": "脂溢性脱发",
                "value": 82
            }, {
                "name": "脱发怎么办",
                "value": 16
            }, {
                "name": "雄激素性脱发",
                "value": 10
            }, {
                "name": "秃顶",
                "value": 10
            }, {
                "name": "脱发原因",
                "value": 6
            }, {
                "name": "发际线后移",
                "value": 5
            }, {
                "name": "脱发的原因",
                "value": 5
            }, {
                "name": "脱发是什么原因引起的",
                "value": 4
            }, {
                "name": "女性脱发",
                "value": 3
            }]
        }] //series结束
}; //option结束
myChart1.setOption(option); //为echarts对象加载数据