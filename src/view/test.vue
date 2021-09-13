<template>
    <div>
        <p>test页面</p>    
        <p>count:{{count}}</p>
        <p>num:{{num}}</p>
        <p>number:{{number}}</p>
        <p>readcount:{{readCount}}</p>
        <p>double:{{double}}</p>
        <p>doubleCount:{{doubleCount}}</p>
        <p>totalCount:{{totalCount}}</p>
        <p>changCount:{{changCount}}</p>
        <p>midObj:{{midObj && midObj.innerObj.size}}</p>
        <button @click="addCount">count++</button>
        <button @click="addNum">num++</button>
        <el-button type="primary">element</el-button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p>{{item.title}}</p>
                <el-button  v-for="(ite,idx) in item.choices" 
                            :key="ite.value" 
                            :type="item.choed == ite.value ?'primary':'default'"
                            @click="choseValue(item,ite,idx,index)"
                            :disabled="item.choed == ite.value?true:false"
                            >
                    {{ite.label}}
                </el-button>
                <!-- <el-button :disabled="test && test.indexOf('1')<0">hahahahhahaha</el-button> -->
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, reactive, readonly, ref, toRefs, watch } from 'vue'
export default {
    setup() {
        const state = reactive({
            count : 0,
            number:1,
            readCount:0,
            test:"1,2",
            sum:0,
            list:[
                {
                    "title": "一、请问您是否已办理营业执照",
                    "name": "一、请问您是否已办理营业执照",
                    "colCount": null,
                    "type": "radio",
                    "choices": [
                    {
                        "label": "已办理",
                        "value": "4734.3496.3497",
                        "policyWords": [],
                        "matter": []
                    },
                    {
                        "label": "未办理",
                        "value": "4734.3496.3498",
                        "oneForm": "1",
                        "ybReusedField": {
                        "showField": [],
                        "disableField": [],
                        "hideField": []
                        },
                        "definedSxId": "",
                        "policyWords": [],
                        "matter": [],
                        "uuid": ""
                    }
                    ],
                    "cue": null,
                    "hidden": false,
                    "displayMode": "0",
                    "policyWords": [],
                    "regular": null,
                    "required": true
                },
                {
                    "title": "二、请问您是否已办理互联网上网服务营业场所经营单位设立（筹建）",
                    "name": "二、请问您是否已办理互联网上网服务营业场所经营单位设立（筹建）",
                    "colCount": null,
                    "type": "radio",
                    "choices": [
                    {
                        "label": "已办理",
                        "value": "4734.4157.4158",
                        "matter": [],
                        "questions": [
                        {
                            "title": "已办理",
                            "name": "已办理",
                            "colCount": null,
                            "type": "radio",
                            "choices": [
                            {
                                "label": "1、请选择您的经营场所面积",
                                "value": "4734.4157.4158.4168",
                                "matter": [],
                                "questions": [
                                {
                                    "title": "1、请选择您的经营场所面积",
                                    "name": "1、请选择您的经营场所面积",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "经营面积≤300m²",
                                        "value": "4734.4157.4158.4168.4169",
                                        "matter": []
                                    },
                                    {
                                        "label": "经营面积＞300m²",
                                        "value": "4734.4157.4158.4168.4170",
                                        "matter": [],
                                        "questions": [
                                        {
                                            "title": "经营面积＞300m²",
                                            "name": "经营面积＞300m²",
                                            "colCount": null,
                                            "type": "radio",
                                            "choices": [
                                            {
                                                "label": "1.1请问您是否已办理公众聚集场所投入使用、营业前消防安全检查合格证",
                                                "value": "4734.4157.4158.4168.4170.3502",
                                                "cue": "",
                                                "oneForm": "1",
                                                "ybReusedField": {
                                                "showField": [],
                                                "disableField": [],
                                                "hideField": []
                                                },
                                                "definedSxId": "",
                                                "policyWords": [],
                                                "matter": [],
                                                "uuid": "",
                                                "questions": [
                                                {
                                                    "title": "1.1请问您是否已办理公众聚集场所投入使用、营业前消防安全检查合格证",
                                                    "name": "1.1请问您是否已办理公众聚集场所投入使用、营业前消防安全检查合格证",
                                                    "colCount": null,
                                                    "type": "radio",
                                                    "choices": [
                                                    {
                                                        "label": "已办理公众聚集场所投入使用、营业前消防安全检查合格证",
                                                        "value": "4734.4157.4158.4168.4170.3502.3503",
                                                        "cue": "",
                                                        "oneForm": "1",
                                                        "ybReusedField": {
                                                        "showField": [],
                                                        "disableField": [],
                                                        "hideField": []
                                                        },
                                                        "definedSxId": "",
                                                        "policyWords": [
                                                        {
                                                            "id": "5d82fb273211f27bf644c1d5",
                                                            "name": "公众聚集场所"
                                                        }
                                                        ],
                                                        "matter": [],
                                                        "uuid": ""
                                                    },
                                                    {
                                                        "label": "未办理公众聚集场所投入使用、营业前消防安全检查合格证",
                                                        "value": "4734.4157.4158.4168.4170.3502.3504",
                                                        "cue": "",
                                                        "oneForm": "1",
                                                        "ybReusedField": {
                                                        "showField": [],
                                                        "disableField": [],
                                                        "hideField": []
                                                        },
                                                        "definedSxId": "tongspace_v1.0.0_AppModel_sxkwbgzxfaqjcsyfxV1_v1.0.0",
                                                        "policyWords": [
                                                        {
                                                            "id": "5d82fb273211f27bf644c1d5",
                                                            "name": "公众聚集场所"
                                                        }
                                                        ],
                                                        "matter": [
                                                        {
                                                            "id": "5d8375463211f223564944b2"
                                                        }
                                                        ],
                                                        "uuid": ""
                                                    }
                                                    ],
                                                    "cue": "",
                                                    "hidden": false,
                                                    "displayMode": "0",
                                                    "policyWords": [],
                                                    "regular": null,
                                                    "required": true
                                                }
                                                ]
                                            }
                                            ],
                                            "cue": null,
                                            "hidden": true,
                                            "displayMode": "1",
                                            "policyWords": [],
                                            "regular": null,
                                            "required": true
                                        }
                                        ]
                                    }
                                    ],
                                    "cue": null,
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "2、请问您是否已办理互联网上网服务营业场所信息网络安全审核意见书",
                                "value": "4734.4157.4158.3946",
                                "cue": "",
                                "oneForm": "1",
                                "ybReusedField": {
                                "showField": [],
                                "disableField": [],
                                "hideField": []
                                },
                                "definedSxId": "",
                                "policyWords": [],
                                "matter": [],
                                "uuid": "",
                                "questions": [
                                {
                                    "title": "2、请问您是否已办理互联网上网服务营业场所信息网络安全审核意见书",
                                    "name": "2、请问您是否已办理互联网上网服务营业场所信息网络安全审核意见书",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "已办理互联网上网服务营业场所信息网络安全审核意见书",
                                        "value": "4734.4157.4158.3946.3947",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "",
                                        "policyWords": [
                                        {
                                            "id": "5e13e4313211f24ff831f9f6",
                                            "name": "互联网上网服务营业场所"
                                        }
                                        ],
                                        "matter": [],
                                        "uuid": ""
                                    },
                                    {
                                        "label": "未办理互联网上网服务营业场所信息网络安全审核意见书",
                                        "value": "4734.4157.4158.3946.3948",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "tongspace_v1.0.0_AppModel_sxkwbxxwlaqspsyfxV1_v1.0.0",
                                        "policyWords": [
                                        {
                                            "id": "5e13e4313211f24ff831f9f6",
                                            "name": "互联网上网服务营业场所"
                                        }
                                        ],
                                        "matter": [
                                        {
                                            "id": "5fb5ee15dc53f3727ae96190"
                                        }
                                        ],
                                        "uuid": ""
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "3、请问您是否已办理网络文化经营许可证",
                                "value": "4734.4157.4158.3528",
                                "matter": [],
                                "questions": [
                                {
                                    "title": "3、请问您是否已办理网络文化经营许可证",
                                    "name": "3、请问您是否已办理网络文化经营许可证",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "已办理",
                                        "value": "4734.4157.4158.3528.3530",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "",
                                        "policyWords": [],
                                        "matter": [],
                                        "uuid": ""
                                    },
                                    {
                                        "label": "未办理",
                                        "value": "4734.4157.4158.3528.3529",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "tongspace_v1.0.0_AppModel_sxkwbhlwswfwsyfxV1_v1.0.0",
                                        "policyWords": [],
                                        "matter": [
                                        {
                                            "id": "5e0371f63211f24fd9582524"
                                        }
                                        ],
                                        "uuid": ""
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "4、请问您是否需要办理设置大型户外广告及在城市建筑物、设施上悬挂、张贴宣传品许可证",
                                "value": "4734.4157.4158.3505",
                                "cue": "",
                                "oneForm": "1",
                                "ybReusedField": {
                                "showField": [],
                                "disableField": [],
                                "hideField": []
                                },
                                "definedSxId": "",
                                "policyWords": [],
                                "matter": [],
                                "uuid": "",
                                "questions": [
                                {
                                    "title": "4、请问您是否需要办理设置大型户外广告及在城市建筑物、设施上悬挂、张贴宣传品许可证",
                                    "name": "4、请问您是否需要办理设置大型户外广告及在城市建筑物、设施上悬挂、张贴宣传品许可证",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "需要",
                                        "value": "4734.4157.4158.3505.3507",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "tongspace_v1.0.0_AppModel_sxkwbszdxhwggsyfxV1_v1.0.0",
                                        "policyWords": [],
                                        "matter": [
                                        {
                                            "id": "5d83747c3211f22356493f42"
                                        }
                                        ],
                                        "uuid": ""
                                    },
                                    {
                                        "label": "不需要",
                                        "value": "4734.4157.4158.3505.3998",
                                        "matter": []
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "5、请问您是否需要办理食品经营许可证",
                                "value": "4734.4157.4158.3508",
                                "matter": [],
                                "questions": [
                                {
                                    "title": "5、请问您是否需要办理食品经营许可证",
                                    "name": "5、请问您是否需要办理食品经营许可证",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "需要",
                                        "value": "4734.4157.4158.3508.3509",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "tongspace_v1.0.0_AppModel_sxkwbMarketFoodsyfxV1_v1.0.0",
                                        "policyWords": [],
                                        "matter": [
                                        {
                                            "id": "5d83756d3211f223564945b6"
                                        }
                                        ],
                                        "uuid": "",
                                        "questions": [
                                        {
                                            "title": "需要",
                                            "name": "需要",
                                            "colCount": null,
                                            "type": "radio",
                                            "choices": [
                                            {
                                                "label": "5.1请问您是否涉及散装熟食",
                                                "value": "4734.4157.4158.3508.3509.4171",
                                                "matter": [],
                                                "questions": [
                                                {
                                                    "title": "5.1请问您是否涉及散装熟食",
                                                    "name": "5.1请问您是否涉及散装熟食",
                                                    "colCount": null,
                                                    "type": "radio",
                                                    "choices": [
                                                    {
                                                        "label": "涉及",
                                                        "value": "4734.4157.4158.3508.3509.4171.4172",
                                                        "matter": [
                                                        {
                                                            "id": "5d83756d3211f223564945b6"
                                                        }
                                                        ]
                                                    },
                                                    {
                                                        "label": "不涉及",
                                                        "value": "4734.4157.4158.3508.3509.4171.4173",
                                                        "matter": []
                                                    }
                                                    ],
                                                    "cue": "",
                                                    "hidden": false,
                                                    "displayMode": "0",
                                                    "policyWords": [],
                                                    "regular": null,
                                                    "required": true
                                                }
                                                ]
                                            },
                                            {
                                                "label": "5.2请问您是否涉及自动售货设备",
                                                "value": "4734.4157.4158.3508.3509.4174",
                                                "matter": [],
                                                "questions": [
                                                {
                                                    "title": "5.2请问您是否涉及自动售货设备",
                                                    "name": "5.2请问您是否涉及自动售货设备",
                                                    "colCount": null,
                                                    "type": "radio",
                                                    "choices": [
                                                    {
                                                        "label": "涉及",
                                                        "value": "4734.4157.4158.3508.3509.4174.4175",
                                                        "matter": [
                                                        {
                                                            "id": "5d83756d3211f223564945b6"
                                                        }
                                                        ]
                                                    },
                                                    {
                                                        "label": "不涉及",
                                                        "value": "4734.4157.4158.3508.3509.4174.4176",
                                                        "matter": []
                                                    }
                                                    ],
                                                    "cue": "",
                                                    "hidden": false,
                                                    "displayMode": "0",
                                                    "policyWords": [],
                                                    "regular": null,
                                                    "required": true
                                                }
                                                ]
                                            },
                                            {
                                                "label": "5.3请问您是否涉及自制生鲜乳饮品",
                                                "value": "4734.4157.4158.3508.3509.4177",
                                                "matter": [],
                                                "questions": [
                                                {
                                                    "title": "5.3请问您是否涉及自制生鲜乳饮品",
                                                    "name": "5.3请问您是否涉及自制生鲜乳饮品",
                                                    "colCount": null,
                                                    "type": "radio",
                                                    "choices": [
                                                    {
                                                        "label": "涉及",
                                                        "value": "4734.4157.4158.3508.3509.4177.4178",
                                                        "matter": [
                                                        {
                                                            "id": "5d83756d3211f223564945b6"
                                                        }
                                                        ]
                                                    },
                                                    {
                                                        "label": "不涉及",
                                                        "value": "4734.4157.4158.3508.3509.4177.4179",
                                                        "matter": []
                                                    }
                                                    ],
                                                    "cue": "",
                                                    "hidden": false,
                                                    "displayMode": "0",
                                                    "policyWords": [],
                                                    "regular": null,
                                                    "required": true
                                                }
                                                ]
                                            }
                                            ],
                                            "cue": "",
                                            "hidden": true,
                                            "displayMode": "1",
                                            "policyWords": [],
                                            "regular": null,
                                            "required": true
                                        }
                                        ]
                                    },
                                    {
                                        "label": "不需要",
                                        "value": "4734.4157.4158.3508.3510",
                                        "matter": []
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "6、请选择您的经营场所类型",
                                "value": "4734.4157.4158.3511",
                                "cue": "",
                                "oneForm": "1",
                                "ybReusedField": {
                                "showField": [],
                                "disableField": [],
                                "hideField": []
                                },
                                "definedSxId": "",
                                "policyWords": [],
                                "matter": [],
                                "uuid": "",
                                "questions": [
                                {
                                    "title": "6、请选择您的经营场所类型",
                                    "name": "6、请选择您的经营场所类型",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "自有房屋",
                                        "value": "4734.4157.4158.3511.3512",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "",
                                        "policyWords": [],
                                        "matter": [
                                        {
                                            "id": "5e0371f63211f24fd9582524"
                                        },
                                        {
                                            "id": "5d83747c3211f22356493f42"
                                        }
                                        ],
                                        "uuid": ""
                                    },
                                    {
                                        "label": "租赁房屋",
                                        "value": "4734.4157.4158.3511.3513",
                                        "cue": "",
                                        "oneForm": "1",
                                        "ybReusedField": {
                                        "showField": [],
                                        "disableField": [],
                                        "hideField": []
                                        },
                                        "definedSxId": "",
                                        "policyWords": [],
                                        "matter": [
                                        {
                                            "id": "5e0371f63211f24fd9582524"
                                        },
                                        {
                                            "id": "5d83747c3211f22356493f42"
                                        }
                                        ],
                                        "uuid": ""
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            },
                            {
                                "label": "7、请问您是否委托办理",
                                "value": "4734.4157.4158.4180",
                                "matter": [],
                                "questions": [
                                {
                                    "title": "7、请问您是否委托办理",
                                    "name": "7、请问您是否委托办理",
                                    "colCount": null,
                                    "type": "radio",
                                    "choices": [
                                    {
                                        "label": "委托办理",
                                        "value": "4734.4157.4158.4180.4181",
                                        "matter": [
                                        {
                                            "id": "5d83756d3211f223564945b6"
                                        }
                                        ]
                                    },
                                    {
                                        "label": "自行办理",
                                        "value": "4734.4157.4158.4180.4182",
                                        "matter": []
                                    }
                                    ],
                                    "cue": "",
                                    "hidden": false,
                                    "displayMode": "0",
                                    "policyWords": [],
                                    "regular": null,
                                    "required": true
                                }
                                ]
                            }
                            ],
                            "cue": null,
                            "hidden": true,
                            "displayMode": "1",
                            "policyWords": [],
                            "regular": null,
                            "required": true
                        }
                        ]
                    },
                    {
                        "label": "未办理",
                        "value": "4734.4157.4159",
                        "cue": "PHA+PHNwYW4gc3R5bGU9ImNvbG9yOiNmZjAwMDAiPuivt+eCueWHu+WKnueQhjwvc3Bhbj48YSBocmVmPSJodHRwOi8vc3EuY2NtLmdvdi5jbi9jY250L3NjenIvbG9naW4iIHRhcmdldD0iX2JsYW5rIj7kupLogZTnvZHkuIrnvZHmnI3liqHokKXkuJrlnLrmiYDnu4/okKXljZXkvY3orr7nq4vvvIjnrbnlu7rvvIk8L2E+PHNwYW4gc3R5bGU9ImNvbG9yOiNmZjAwMDAiPu+8jOWujOaIkOivpeeOr+iKguWQjuaWueWPr+i/m+ihjOWQjue7rea1geeoi+WKnueQhjwvc3Bhbj48L3A+",
                        "oneForm": "1",
                        "ybReusedField": {
                        "showField": [],
                        "disableField": [],
                        "hideField": []
                        },
                        "definedSxId": "",
                        "policyWords": [],
                        "matter": [],
                        "uuid": ""
                    }
                    ],
                    "cue": null,
                    "hidden": false,
                    "displayMode": "0",
                    "policyWords": [],
                    "regular": null,
                    "required": true
                }
            ],
            chosedId:[],
            double:computed(()=>{
                return state.count*2
            }),
            totalCount:computed(()=>{
                return state.count + state.number
            }),
            changCount:computed(()=>{
                 return state.number * 8
            }),
            midObj: {
                innerObj: {
                    size: 0
                }
            }
        })
        const num = ref(0);
        const addCount = function () {
            state.count ++
        }
        const addNum = function () {
            num.value ++
        }
        const choseValue = function(item,ite,idx,index) {
            item.choed = ite.value
            if(state.chosedId.indexOf(ite.value) == -1) {
                state.chosedId.push(ite.value);
            }else {
                let findIndex = state.chosedId.findIndex(it=>it == ite.value)
                state.chosedId.splice(findIndex,1,null)
            }
            delLabel(item);
            if(ite.questions && ite.questions.length > 0) {
                item.children = ite.questions[0].choices.map(temp=>{
                    return temp.questions[0]
                })
                item.children.map((tem,iex)=>{
                        tem.choed = null
                        state.list.splice(index+1+iex,0,tem)
                })
            }
            console.log(state.list)
        }
        const delLabel = function(item,index) {
            if(item.children) {
                item.children.map(a=>{
                    let findItem = state.list.find(b=>b && b.title == a.title);
                    delLabel(findItem);
                    let findIndex = state.list.findIndex(c=>c && c.title == a.title);
                    state.list.splice(findIndex,1,'')
                })
                item.children = null
            }
            state.list.filter(itemtem=>itemtem)
        }
        // const readonlyState = readonly(state);
        // watch(()=>readonlyState.readCount,(newVal,oldVal)=>{
        //     console.log('readonly state is changed!')
        //     setTimeout(() => {
        //         // 修改只读属性会打印告警信息，但是不会报错
        //         readonlyState.readCount = 666
        //     }, 1000)
        // })
        watch(()=>state.totalCount,(newVal,oldVal)=>{
            console.log(newVal,oldVal,"====")
        })
        watch(()=>state.midObj,(newVal,oldVal)=>{
            console.log(`state.midObj = ${JSON.stringify(oldVal)}, deep=true`,`state.midObj = ${JSON.stringify(newVal)}, deep=true`)
        },{deep:true},
            setTimeout(()=>{
                state.midObj.innerObj.size =1
            },1000)
        )
        const doubleCount = computed({
            get(){
                return state.count *2
            },
            set(newVal){
                 state.count = newVal/2
            }
        })
        return {
            ...toRefs(state),
             num,
             addCount,
             addNum,
             choseValue,
             doubleCount
        }
    },
}
</script>
<style scoped>
li {
    list-style: none;
}
</style>
