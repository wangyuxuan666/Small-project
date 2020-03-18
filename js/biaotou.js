var navbox=document.querySelector('.dh_dz_xl_bx')
var navol=document.createElement('ol');
var navarr=['阿拉善盟 鞍山 安庆 安阳 阿坝 安顺 安康 阿勒 泰阿克苏 安吉 安丘 安岳 安平 安宁 安溪 安化 阿勒泰市 安福','北京 保定 蚌埠 包头 本溪 巴彦淖尔 白城 白山亳州 滨州 巴中 北海 百色毕节 保山 宝鸡 白银 巴州博尔塔拉 滨海 宝应 北流 博爱 北碚 宝丰泌阳 博兴 博山 璧山 彬县 宾阳 博白县 博罗县 北镇市 泊头市 北安市 巴彦县','重庆 成都 长沙 常州 长春 沧州 承德 赤峰 长治 朝阳池州 巢湖 滁州 潮州 郴州 常德崇左 楚雄 昌吉 从化 常熟 长乐 长兴 慈溪 昌邑 长葛 苍南 承德县 赤壁 崇州 淳安 曹妃甸 昌乐磁县 昌黎 岑溪 成安 长垣 曹县 城阳 茌平 长汀城 固赤 水常山 长寿潮安 潮阳澄海 长丰县 茶陵常宁市 苍溪县慈利 长清区 崇明区 成武县 澄江县','大连 东莞 大庆 大同 丹东 大兴安岭  东营 德州 德阳 达州 德宏 大理 迪庆定 西敦煌丹阳 东台 大丰 德清东 阳当阳登封 儋州 东港 东兴 都江堰大石桥 大冶东方 大通 灯塔 调兵山 邓州电白东 平定州东 海达拉特旗 郸城 大荔 大洼 大竹 东光 敦化 大邑砀山 道县 大安市 定安县 东明县 定陶区 定边县','鄂尔多斯 鄂州恩施 峨眉山 额尔古纳恩 平额敏县','福州 佛山 抚顺阜 新阜 阳抚州 防城港 涪陵富 阳福清 凤凰 肥城 阜宁 奉化 汾阳阜 康凤城 范县丰城 封丘肥乡 繁昌富顺 抚松丰县扶风 扶沟丰宁佛 冈费县凤 台肥西 县奉新方城 富源县 分宜扶绥 县凤翔 县福安 福鼎市 府谷县','广州 桂林 贵阳 赣州 广元 广安 贵港甘 孜甘 南固原 巩义桂 平高邮 广饶 高州 个旧高碑店 盖州公主岭 高密广汉 藁城 高平格尔木 古交 灌云 灌南 赣榆共 青城 高安 广德高陵 高阳 公安固始县 光泽','杭州 合肥 葫芦岛 海口 哈尔滨 邯郸 呼和浩特 衡水 呼伦贝尔 鹤岗 湖州 黑河 淮安黄 山淮南 淮北鹤 壁菏泽 黄石怀 化惠 州河 源黄冈 衡阳贺州 河池红 河海东 海西海 南州汉 中花都哈 密海宁 惠阳惠 东黄岛 鹤山桦甸 海城华 阴霸州海 阳海门海 安侯马 河津海 林化州 黄骅霍 州淮阳合 川海盐 滑县惠安 怀仁辉县 户县和县 含山汉 阴河 口辉南 洪洞横店华 亭韩城 洪湖怀 宁珲春 霍邱海沧 潢川县衡 阳县衡山 县衡东县 贺兰县 海伦市汉 南区合 江县怀远 县会泽 县河 间市合浦 县环县黄 陵县华容','锦州 济南 焦作 九江晋城 晋中 鸡西 佳木斯吉 林嘉兴 金华吉 安景德 镇济宁 荆门济 源江 门荆 州揭 阳酒泉 金昌嘉 峪关 江 阴靖 江晋江金坛 江山嘉善 晋州句 容建湖介 休胶州 建德简 阳集安 即墨建 阳蛟河 监 利郏县巨野 江津金湖 江都莒南 江油京 山缙云 金乡嘉祥 金沙泾县 集美鄄城 县靖边江 川县江 华瑶族 自治县吉安 县吉水县 晋宁县江 永 建水县嘉 鱼县祁县精 河县 靖西县','昆明 开封昆 山喀什地 区克拉 玛依开平 库尔 勒奎屯开 州区垦 利宽城开 阳开化','廊坊 临汾吕 梁辽阳辽 源连云港六 安丽水 龙岩洛 阳聊城临 沂莱芜漯 河娄底泸 州乐山柳 州来宾临 沧拉萨六 盘水凉山 丽江临 夏陇南兰 州兰溪 临海溧阳 耒阳龙口 陆丰莱阳 乐昌莱 州临安 临清乐 陵龙海 醴陵浏 阳莱西 廉江阆中 乐平灵 宝冷 水江连州 灵山滦 南临江 陵水 鹿泉利 川凌海老 河口滦 县乐亭 临朐栾 城连江 隆 昌林州 临潼蓝 田 临漳灵 石鲁山临 猗柳河鹿 邑临沭 兰陵龙 游栾 川雷州 隆尧陵川 龙泉临邑 利津梁山 澧县辽 中涟水临 澧兰考 县灵丘 县利辛 洛川县 泸县溧水 区禄丰 县罗平 县涟源市 庐江县隆 回临颍蓝 山隆化 县洛宁芦溪 卢氏县罗 定市乐 东梁平临 高县 罗源县','牡丹江 马鞍山茂 名梅州绵阳 眉山密 山漠河 满洲里 明光梅 河口 孟州麻 城渑池眉 县民权 孟津牟 平蒙阴绵 竹蒙自市 蒙城明水 县米易县 闽侯县勐 腊县','宁波 南京南昌 南通南 宁宁德南 平南阳 内江南 充怒江 南沙宁 海宁乡 南安南 雄讷河 南乐 宁津宁晋 南陵 宁国宁 阳内丘 南和内黄 宁陵南 部县 南皮县 宁远县 嫩江县','盘锦莆 田萍乡平 顶山濮 阳攀枝花普 洱平凉邳州 普宁平 湖平度彭 州蓬莱 鄱阳磐 石浦江 平潭平原 平山濮 阳县沛 县蒲城 盘县平 江平邑平 遥平果 平阳平舆 平罗县平 阴县平 昌县','青岛 泉州齐齐 哈尔秦 皇岛七 台河衢州清 远钦州黔 西南曲靖 黔东南 黔南庆阳 迁安琼 海曲阜启 东青州潜江 沁阳邛崃 清丰齐 河淇县全 椒清河 青田栖 霞青县潜 山庆云祁 东县杞 县庆安 县青冈县岐 山县青 阳县','日照日喀则 仁怀瑞安 如皋 荣成乳 山汝州 瑞金瑞 昌仁寿 任丘如东 汝阳容 县汝城县 荣昌区','上海 深圳沈 阳石家庄 苏州 三 亚汕头朔州 双鸭山 四平松 原绍兴宿 迁绥化宿州 上饶三 明十堰 商丘三 门峡韶关 汕尾随州 邵阳遂 宁石嘴 山商洛 石河子 顺德石狮 上虞寿 光神农 架韶山 射阳沭阳 嵊州三 河沙河四 会松滋舒 兰邵东沙 湾泗阳 睢县石泉 单县泗 洪上高 绥中神木 涉县上蔡 遂昌睢 宁沈丘 三门什 邡上杭 石岛泗 水社旗 商河射洪 舒城嵩 县石门 桑植商 城县鄯 善县深 州市泗县 商水县 上林县 遂川上栗 双峰肃 宁县莎车 县绥德 县沙县 深泽县石 柱邵武 寿县三 台县','天津 太原 唐山 通辽 铁岭 通化 台州 泰州铜 陵泰安 铜仁铜 川天水 塔城吐 鲁番 太仓桐 乡台山 腾冲滕州 桐庐泰 兴天长天 门桐城洮 南台前太和 汤阴藤县 太谷天 台土默 特右旗 铜梁郯 城桃源 同安通 许县通 榆县通 海县唐 河泰和 县太康 县铜鼓 田东县通 江县','无锡武 汉芜湖温 州乌海乌 兰察布威 海潍坊 梧州文 山渭南武 威乌鲁 木齐吴 忠武夷 山吴江万 州婺源 温岭武安 文登乌镇 吴川文 昌舞 钢万宁温县 武陟 武穴乌 苏卫辉芜 湖县无 为乌拉特 前旗围场 武城汶 上微山 无极万 荣舞 阳威宁 武鸣武 义瓦房店 尉氏县 武隆县 万载武平 县威县 武冈市 望奎县 五常市 旺苍县','西安厦 门新乡 徐州邢 台忻州 兴安盟 锡林郭 勒宣城 新余襄 阳信 阳许昌 湘西咸 宁孝感 湘潭 西双版 纳西宁 咸阳仙 桃香格 里拉新 沂新密 荥阳新 郑兴宁西 塘新民兴化 湘阴新 泰响水辛 集湘乡 项城孝义 修武象山兴 城兴平仙 居夏津 信宜新 化新安新乡 县宣威霞 浦襄垣西 平新乐西 乡徐闻夏 邑浚县盱眙 香河信 丰浠水西 华薛城新 昌淅川溆浦 新蔡秀 山土家族 苗族自治 县新洲 区仙游县 新野兴国 县新田新 干祥云 县寻乌县襄 城县新宁 献县新 津县旬阳县','烟台 扬州 阳泉运 城营口 延边伊春 盐城鹰 潭宜春 宜昌永州 阳江岳阳 益阳宜宾 雅安云浮 玉林 玉溪银川 延安榆林 义乌伊犁 乐清阳 朔余姚永 康宜兴 兖州扬 中伊川 英德仪 征偃师 禹城禹 州伊宁宜 城原平 永城永 济玉环 宜都沅 江永年永 川阎良 原阳易县 宜阳叶 县阳城云 阳郓 城玉山 阳谷虞 城于都 沂水 沂南杨 凌伊金 霍洛旗攸 县永顺 县永 兴县酉 阳土家族 苗族自 治县应 县宜丰 营山县 永安永 丰鄢陵 永新宜 良县阳 山县榆 树市沅 陵县 永登县鱼 台县宜 州市义 马市盂 县永 嘉县','郑州 淄博珠海 中山 张家口 舟山镇 江枣庄 漳州驻 马店周口 湛江 肇庆株洲 张家 界资 阳自贡 遵义昭 通张掖 中卫 涿州张 家港增 城诸暨 章丘邹平 枣阳庄河 诸城钟 祥招远遵 化枝江 樟树漳浦 正定中牟 准格尔旗柘 城邹城赵 县织金芷 江周至资 兴市扎 兰屯市 漳平 忠县 柘荣 中江县']
var dh_dz_sj=document.querySelector('.dh_dz_sj')
var navad=document.getElementById('nav_id')
var dh_ewm=document.querySelector('.dh_ewm')
var dh_ewm_sj=document.querySelector('.dh_ewm_sj')
var dh_dl=document.querySelector('.dh_dl')
var dh_dl_sj=document.querySelector('.dh_dl_sj')

navbox.appendChild(navol) 
for(var i=0;i<22;i++){
var navli=document.createElement('li');
var nava=document.createElement('a');

nava.innerHTML=navarr[i]
navol.appendChild(navli) 
navli.appendChild(nava)
}
var navdz=document.querySelector('.dh_dz')
var navxl=document.querySelector('.dh_dz_xl')
var dh_dz_xl_ding=document.querySelector('.dh_dz_xl_ding')
var navi=2;
var saos=null
navdz.onclick=function(){
   navi++
    if(navi%2==0){
        this.classList.remove('nav_bian')
        dh_dz_sj.classList.remove('nav_bian')
        navxl.className='dh_dz_xl_bian1 dh_dz_xl'
        dh_dz_xl_ding.className='dh_dz_xl_ding_bian1 dh_dz_xl_ding'
        saos=setTimeout(function(){
            dh_dz_xl_ding.style.display='none'
            navxl.style.display='none'
        },1000)
    }
    else{
        dh_dz_sj.classList.add('nav_bian')
        navxl.className='dh_dz_xl_bian dh_dz_xl'
        dh_dz_xl_ding.className='dh_dz_xl_ding_bian dh_dz_xl_ding'
        dh_dz_xl_ding.style.display='block'
        navxl.style.display='block'
    }

}
// navdz.onmouseenter=function(){
//     dh_dz_sj.classList.add('nav_bian')
//     navxl.className='dh_dz_xl_bian dh_dz_xl'
//     dh_dz_xl_ding.className='dh_dz_xl_ding_bian dh_dz_xl_ding'
// }

// navdz.onmouseleave=function(){
//     this.classList.remove('nav_bian')
//     dh_dz_sj.classList.remove('nav_bian')
//     navxl.className='dh_dz_xl_bian1 dh_dz_xl'
//     dh_dz_xl_ding.className='dh_dz_xl_ding_bian1 dh_dz_xl_ding'
// }
var dh_ewm_xL=document.querySelector('.dh_ewm_xl')
dh_ewm.onmouseenter=function(){
    dh_ewm_xL.className='dh_ewm_xl dh_ewm_xl_bian'
    dh_ewm_sj.classList.add('nav_bian')
    dh_ewm_xL.style.display='block'
}
dh_ewm.onmouseleave=function(){
    dh_ewm_sj.classList.remove('nav_bian')
    dh_ewm_xL.className='dh_ewm_xl dh_ewm_xl_bian1'
    saos=setTimeout(function(){
        dh_ewm_xL.style.display='none'
    },300)
}
var dh_dl_img=document. querySelector('.dh_dl_img')


dh_dl.onmouseenter=function(){
    dh_dl_sj.classList.add('nav_bian')
    dh_dl_img.src='file:///C:/Users/EDZ/Desktop/%E7%8C%AB%E7%9C%BC%E4%B8%BB%E9%A1%B5/hearimg/emotion.png'
}
dh_dl.onmouseleave=function(){
    dh_dl_sj.classList.remove('nav_bian')
    dh_dl_img.src='file:///C:/Users/EDZ/Desktop/%E7%8C%AB%E7%9C%BC%E4%B8%BB%E9%A1%B5/hearimg/icon_zhanghao.png'
}



var dh_mk_div=document.querySelectorAll('.dh_mk_li_div')
var dh_mk_li=document.querySelectorAll('.dh_mk_li')
// console.log(dh_mk_li)

var dh_mk_a=document.querySelectorAll('.dh_mk4')
for(var i=0;i<dh_mk_li.length;i++){
    
  dh_mk_li[i].onmouseenter=function(){
   
    var dh_mk_sss=this.dataset.dhmk;
    dh_mk_div[dh_mk_sss].className="dh_mk_li_div dh_mk_bian"
    dh_mk_a[dh_mk_sss].className="dh_mmk"+dh_mk_sss+" dh_mk_a_bian dh_mk4 "
  }
  dh_mk_li[i].onmouseleave=function(){
    var dh_mk_sss=this.dataset.dhmk;
    dh_mk_div[dh_mk_sss].className="dh_mk_li_div dh_mk_bian1"
    dh_mk_a[dh_mk_sss].className="dh_mmk"+dh_mk_sss+" dh_mk_a_bian1 dh_mk4 "
}
// dh_mk_a[i].onmouseenter=function(){
    
//     var dh_mk_sss=this.dataset.dhmk;
//     dh_mk_a[dh_mk_sss].className="dh_mmk"+dh_mk_sss+" dh_mk_a_bian dh_mk4 "
//   }
//   dh_mk_a[i].onmouseleave=function(){
    
//     var dh_mk_sss=this.dataset.dhmk;
//     dh_mk_a[dh_mk_sss].className="dh_mmk"+dh_mk_sss+" dh_mk_a_bian1 dh_mk4 "
// }
}



var dh_dl_img=document.querySelector('.dh_dl_img')
var dh_dl_xl=document.querySelector('.dh_dl_xl')
var dh_dl_i=1;
dh_dl_img.onclick=function(){
    dh_dl_i++;
    if(dh_dl_i%2==0){2
        dh_dl_xl.className="dh_dl_xl dh_dl_xl_bian"
    
        dh_dl_xl.style.display='block'

    }
    else{
        dh_dl_xl.className="dh_dl_xl dh_dl_xl_bian1"
        saos=setTimeout(function(){
            dh_dl_xl.style.display='none'
        },300)
    }

}
