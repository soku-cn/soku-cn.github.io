import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as h,c as d,a as l,b as a,w as t,d as i,e as u}from"./app-B2zTjN_r.js";const p={},A=l("div",{class:"hint-container warning"},[l("p",{class:"hint-container-title"},"新版已不再必需win7系统"),l("p",null,[l("strong",null,"这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改")]),l("p",null,[l("strong",null,"注意，此 mod 需要双方一起使用且版本相同")]),l("div",{class:"hint-container caution"},[l("p",{class:"hint-container-title"},"网战请关闭 giuroll 回滚使用"),l("p",null,[l("strong",null,"网战请关闭 giuroll 回滚使用，否则会发生不同步")]),l("p",null,[l("strong",null,"如琪露诺的原214和魔理沙等改成故事模式SC的招数，会根据自己 Config 菜单内的难度设置变化而变化，建议双方的难度设置为 Easy 或 Normal（双方要一样否则不同步）")])])],-1),_={class:"hint-container tip"},g=l("p",{class:"hint-container-title"},"下载",-1),D=l("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了",-1),m={class:"hint-container info"},C=l("p",{class:"hint-container-title"},"安装与使用 SokuPlus改版Mod",-1),B=l("p",null,[i("1、打开压缩包"),l("code",null,"【2024-3-4】SokuPlusLoader.zip"),i("，里面有个 "),l("code",null,"th123"),i(" 文件夹，将其与游戏本体的 "),l("code",null,"th123"),i(" 合并，"),l("mark",null,"注意不要把这个th123文件夹直接挪到本体里面去了，是要合并文件夹")],-1),b=l("code",null,"SokuPlusLoader.dll",-1),f=l("strong",null,"如何开关配置mod",-1),J=l("p",null,"3、运行游戏，可以进去练习模式选灵梦，使用 6C 看看有没有修改成功",-1),v=l("p",null,[i("4、如果你想恢复原版游戏，禁用 "),l("code",null,"SokuPlusLoader.dll"),i(" 这个mod并保存配置即可")],-1),k=u('<h3 id="_0、全体修改" tabindex="-1"><a class="header-anchor" href="#_0、全体修改"><span>0、全体修改</span></a></h3><ul><li>伤害面板: 将 rift 修正为 lift</li><li>终结技: 使用超过 4000 伤害带 SC 的连段终结对手时，会改变 BGM</li><li>空中 Dash 高度限制取消: 跳跃后可立即进行空中Dash，但飞翔依旧有100的高度限制</li><li>天气 <strong>「无风」</strong>：只要角色在地上就无条件缓慢回血，原版性质不变</li><li>天气 <strong>「苍天」</strong>：跳跃前5F的地上部分可以被“出招、6D、4D”取消；原版性质不变</li><li>天气 <strong>「风雨」</strong>:地面A系招数命中时可以像弹幕一样大跳或44移动取消（如AAAA、J2A着陆、DA等等，<strong>不包括DB、DC、体术必杀</strong>）；取消原版风雨的加速buff，但是3次空中Dash次数依然不变</li><li>系统卡 「<strong>羽衣」</strong>：可在空中使用，动作为J6A</li><li>系统卡 <strong>「人魂灯」「左扇」「符蚀药」</strong>：取消等级相当于 SC</li><li>系统卡 「<strong>白楼剑」</strong>:可以取消SC，可以空中使用，不占用空中Dash次数</li></ul><div class="hint-container tip"><p class="hint-container-title">限界機動（罗曼取消）</p><ul><li>可以使用<code>4DD、5DD、6DD、8DD</code>来罗曼取消。</li><li>在可以被SC取消的时机发动时消耗2张卡，其他时候（任何时候，出招前摇也可以直接取消）消耗3张卡</li><li>小心空中使用时，很容易按住D没来得及松开，又变成飞翔</li></ul></div><div class="hint-container tip"><p class="hint-container-title">萃梦想灵击</p><ul><li>取消等级相当于SC，和普通灵击一样的启动完全无敌和发生帧数和判定范围</li><li>如果你是取消攻击而发动的灵击，则有另外一个动作，像萃梦想一样竖直吹飞，追击时间110F，伤害 500，rate 110% ，limit 0%，可以给后续加伤加追击时间</li><li>如果是非取消而直接发出的灵击，则是普通原版灵击</li></ul></div><div class="hint-container tip"><p class="hint-container-title">系统卡「铜钱」——精防</p><ul><li>手上第一张卡是铜钱时，可在8F内精防<code>（8F内才按下4或1防御，8F前不能拉防）</code>，不需要按用卡键，不耗灵，错防也能触发精防 <strong>（原本铜钱效果依然在，按用卡键照常触发）</strong></li><li>精防成功后有音效，角色有闪光特效，卡槽微量增加，无视磨血<br> 空中也可以精防</li><li>有暗转般的时间停止效果：给对手在添加额外硬直，相当于自己有利帧多 X 帧，X 与攻击等级有关，取 3/5/7/10）</li><li>不被击退（版中可被对手肉身推动，板边由于自己不会后退，对手也就不会被反弹后退）；对弹幕也有效（有时间停止效果，但不会多加帧）</li><li>有缝隙的压制中可多次使用精防，若先前防御不是精防，也在后续防御中使用精防，例如可以普通防御妖梦的DA一段，然后精防妖梦的DA二段<br> 如果当时手上第一张卡不是铜钱或精防失败，则在从第一次攻击开始经过 40F 或无缝攻击结束后才能触发精防</li></ul><figure><img src="https://bu.dusays.com/2024/01/21/65ace3b260d9c.webp" alt="精防" width="400" tabindex="0" loading="lazy"><figcaption>精防</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65ace3bec545f.webp" alt="可以普通防御妖梦的DA一段，然后精防妖梦的DA二段" width="400" tabindex="0" loading="lazy"><figcaption>可以普通防御妖梦的DA一段，然后精防妖梦的DA二段</figcaption></figure></div><h3 id="_1、灵梦" tabindex="-1"><a class="header-anchor" href="#_1、灵梦"><span>1、灵梦</span></a></h3><ul><li>异地起身: 速度增加</li><li>6D8大跳: 高度減少</li><li>AAA: 追加向前的速度（就不容易断AAAA了）</li><li>B 射击: 增加了防御时的Hitstop</li><li>2B: 弹幕可以全版移动</li><li>3C（萃梦想的封魔针）: 追加</li><li>6C（萃梦想的封魔针）: 追加</li><li>DA: 硬直減少</li><li>DB: 発生加速</li><li>DC: 启动擦弹，改变惯性，增加追击时间</li><li>JA: 発生加速, 持続減少</li><li>J2A: 正常命中会弹地</li><li>JB: 移动取消加快</li><li>J2B: 移动取消加快</li><li>J2C: 発生加速</li><li>J3C: 追加</li><li>J6C: 追加</li><li>原236 博丽护符: 蓄力效率提高，C 版发生加速，B 版发生位置变更，C 版发生位置变更</li><li>236改 妖怪破坏者: 硬直减少，B 版伤害增加，B 版 Rate 调整，B 版 Limit 调整，B 版磨血调整，B 版灵力削减调整，B 版Hit数减少，B 版攒卡量调整</li><li>236改 扩散护符: 发生加速，弹幕速度因等级而降低，B 版产生位置变更</li><li>原623 升天脚: B 版可取消，B 版 Level 2 打击无敌</li><li>623改 抄地升天脚: 硬直减少，每等级硬直减少，C 版滑铲时附加擦弹</li><li>623改 祈雨: 命中时可取消，命中时可大跳取消，修正命中时梦想天生点灯数不增加的问题，命中音效变更</li><li>421改 封魔亚空穴: 发射行为变更，每等级伤害增加</li><li>421改 刹那亚空穴: 当身成立后发生加速，伤害增加</li><li>一卡 珠符「明珠暗投」: 灵力削减増加</li><li>二卡 夢想妙珠: 発生位置変更</li><li>二卡 夢符「封魔陣」: 按住2使用时性質変化</li><li>三卡 神技「天覇風神脚」: 按住2使用时性質変化</li><li>四卡 宝具「阴阳鬼神玉」： 按22D后再使用时特殊发动</li><li>五卡 神霊「夢想封印」: Limit 变为 0%, 追击时间増加</li></ul><div class="hint-container tip"><p class="hint-container-title">EX灵梦</p><ul><li>追加，选完地图后一直按住 D(飞翔键) 即可开启 <ul><li>以上修改全都作废，使用另外一套人物系统</li><li>各种体术修改：3A JA J6A J2A DB DC</li><li>飞翔回转性能大幅提升，耗灵也不多（大概是相当于永久快晴的buff）</li><li>可能还有别的改动，我没细测，有发现可以和我说</li></ul></li></ul></div><h3 id="_2、魔理沙" tabindex="-1"><a class="header-anchor" href="#_2、魔理沙"><span>2、魔理沙</span></a></h3><ul><li>6A: 硬直減少</li><li>AAA: 前進追加</li><li>H6A: 硬直減少</li><li>J1A: 追加</li><li>J2A: 硬直減少</li><li>J6A: 硬直減少, 慣性変更</li><li>f.A: 発生加速</li><li>214改 アップスウィープ: 后半部分命中时附加移动取消 (打防不可) ，追击时间增加，发射高度减少</li><li>原22C グラウンドスターダスト: C版变成 シューティングエコー(Shooting Echo，应该也是和⑨一样的故事模式SC)，升级可以加速移动取消</li><li>236激光 ナロースパーク: 移动取消加快、性质变化</li><li>623绿升 バスキースウィーパー: 添加擦弹</li><li>マジカル産廃再利用ボム: 变成打击属性，改变惯性，增加 Lift 修正，增加追击时间</li><li>原623 ミアズマスウィープ: 追加派生(防御时不可) ，B版高度减少，B版命中时可以取消</li><li>原236 メテオニックデブリ: 所有颜色 rate 98%</li><li>儀符「オーレリーズサン」 : 第二枚使用时不会射出而是当场旋转，第二枚使用时不能DD</li><li>光符「アースライトレイ」 : 消耗2张卡，硬直减少，擦弹持续延长，伤害减少，limit 10%，惯性变更，追击时间增加</li><li>星符「メテオニックシャワー」: 灵力削减增加</li><li>魔砲「ファイナルスパーク」: 发生加速</li><li>魔符「スターダストレヴァリエ」: limit 0%</li></ul><h3 id="_3、咲夜" tabindex="-1"><a class="header-anchor" href="#_3、咲夜"><span>3、咲夜</span></a></h3><ul><li>3C: 追加(延迟弹幕)</li><li>DC: 启动擦弹</li><li>H3A: 硬直増加</li><li>J3C: 追加(延迟弹幕)</li><li>214改 スクウェアリコシェ: 性质变化，弹幕启动就有判定，反弹次数增多，蓄力失效(bug)</li><li>22改分身 タイムパラドックス: 中段技，蹲防错防，第二段带破防</li><li>623改 舞星之剑: 可以移动取消</li><li>236绿刀 パラレルブレーン: 性质变化，类似萃梦想，升级无用只增加伤害</li><li>22改 当身: B 版当身启动加速，伤害增加</li><li>623改 : 伤害增加，防御Hitstop增加</li><li>4卡 伤符：判定加大</li><li>移动起身: 速度增加</li><li>3卡 速符: 灵力削减增加</li></ul><h3 id="_4、爱丽丝" tabindex="-1"><a class="header-anchor" href="#_4、爱丽丝"><span>4、爱丽丝</span></a></h3><ul><li>2B: 発生加速</li><li>3B: 新增</li><li>第四段A蓄力: 硬直減少</li><li>b 射击: 速度调整，寿命调整，增加防御时的Hitstop</li><li>c 射击: 增加防御时的Hitstop</li><li>H6a: 不可空防</li><li>J6A: 攻撃判定拡大</li><li>22改Seeker Wire: 改变惯性，追击时间增加</li><li>人形SP: 硬直減少</li><li>五卡旅鼠: 部分人偶会有相当于3卡炸弹的增强效果，自己体验</li><li>人形「未来文乐」 : 发动时6a 删除，b 发生加速，c 发生加速，d 伤害增加，a 蹲防错防，6a 灵力削减，2a 灵力削减，2a 蹲防错防，c 灵力削减</li><li>人形伏兵: 耐久力増加</li><li>人形千槍: 硬直減少</li><li>人形弓兵: 移动取消变快</li><li>人偶操创: 增加防御Hitstop</li><li>人形火葬: 固定轨道化，伤害增加</li><li>人偶置操: 灵力削减增加，击退消除且到最终段不能DD</li><li>戦操「ドールズウォー」4卡 : 伤害增加，rate98% ，limit2%</li><li>枪符「可爱大千枪」 : 空中版 纵向惯性减少，rate99%</li><li>红符「和兰人偶」 : 发生加速，追击时间增加，惯性变更，Hit数增加，Search强化（？？？）<br> 魔符「アーティフルサクリファイス」 : 加速发生，减少伤害</li></ul><h3 id="_5、帕秋莉" tabindex="-1"><a class="header-anchor" href="#_5、帕秋莉"><span>5、帕秋莉</span></a></h3><ul><li>DA: 発生加速</li><li>J2A: 打中会弹地</li><li>J6A: 慣性変更, Rate 95%</li><li>原22水柱 ウィンターエレメント: 延长持续时间</li><li>绿石: 命中时可取消 (被防御时不可)</li><li>原214 オータムエッジ: 灵力削减增加</li><li>22小水泡 スティッキーバブル: rate102% ，弹速提升</li><li>623空气炮: 发生加速，硬直減少</li><li>4卡绿石 土金符「エメラルドメガロポリス」: 发生加速</li><li>日月符「皇家钻石戒指」 : 附加磨耗，增加削减灵力</li><li>3卡圣光 日木符「フォトシンセシス」 : 发生加速</li><li>4卡水柱凹 月符「サイレントセレナ」: 灵力削减增加</li><li>火水木金土符「賢者の石」: 成立加速</li></ul><h3 id="_6、妖梦" tabindex="-1"><a class="header-anchor" href="#_6、妖梦"><span>6、妖梦</span></a></h3><ul><li>1A: 変更为飞膝，可取消2A.远A，AAA，空中可被B弹幕以上取消，落地可必杀取消</li><li>2A: 判定增大</li><li>2B: 移动取消加快</li><li>6B: 移动取消加快</li><li>B: 移动取消加快</li><li>DAA: 可以被必杀取消</li><li>DB: 发生前有擦弹帧</li><li>被打的蹲姿: 受击判定增加</li><li>心抄斩: 发生加快，硬直减少，伤害减少(对空伤害相对较高)，B 版 rate 90% 化，B 版 limit 40% 化，C 版 rate 95% 化，C 版 limit 45% 化(3段各15%)，防守时追加击退，C 版地面Hit数增加为3(对空还是1 Hit)</li><li>原22: 根据等级耐久力增加</li><li>折伏无间: 追击(长按飞膝)取消等级变更(同1A)，追击 limit 0% 化，追击惯性变更，追击时间增加</li><li>断霊剣「成仏得脱斬」: 削灵増加</li><li>炯眼剣: B 版硬直減少</li><li>燐气斩: 修复图片特效的问题</li><li>结跏趺斩: Hit数由2级增加</li></ul><h3 id="_7、蕾米莉亚" tabindex="-1"><a class="header-anchor" href="#_7、蕾米莉亚"><span>7、蕾米莉亚</span></a></h3><ul><li>J2A: 付加 Smash修正</li><li>22手里剑 スティグマナイザー: C 版本性质改变</li><li>原22 デーモンロードアロー: 保持壁贴时间延长，在壁贴时允许SC取消</li><li>原623升龙 デーモンロードクレイドル: 命中后可取消</li><li>623火箭腿 ロケットキックアップ: 发生加速，追加 C 版追踪，C 版发射位置变更</li><li>3卡恶女 夜符「バッドレディスクランブル」: limit 50%</li><li>2卡 小神枪 : 暗转时2可向上或6向斜上方发射，不能打康</li></ul><div class="hint-container tip"><p class="hint-container-title">EX蕾咪</p><ul><li>追加，选完地图后一直按住 D(飞翔键) 即可开启 <ul><li>以上修改全都作废，使用另外一套人物系统</li><li>行动模式修改，可以飞翔和地面DASH，增加 DA DB DC</li><li>蕾咪飞翔停止后不带惯性，必须要停止飞翔再出招</li><li>6A 修改</li><li>可能还有别的改动，我没细测，有发现可以和我说</li></ul></li></ul></div><h3 id="_8、幽幽子" tabindex="-1"><a class="header-anchor" href="#_8、幽幽子"><span>8、幽幽子</span></a></h3><ul><li>3C: 追加，斜上方的6C</li><li>6C: 発生位置変更, 速度増加</li><li>J3C: 追加，斜下方的6C</li><li>J6A: Rate 78% 化, 慣性変更</li><li>胡蝶夢の舞: 慣性変更</li><li>鳳蝶紋の槍: 弾速加快</li></ul><h3 id="_9、八云紫" tabindex="-1"><a class="header-anchor" href="#_9、八云紫"><span>9、八云紫</span></a></h3><ul><li>1A: 追加，可取消4A 1A，不可取消AAA</li><li>DC: 启动擦弹</li><li>境符「二次元と三次元の境界」:加速发生</li><li>境符「四重结界」 : 发生前附加完全无敌</li><li>幻想卍伞: 发生加速，空中版移动取消加速，击退减少，追加磨耗属性，改变惯性，磨血减少，空中 B 版发射方向变更，蓄力时也有判定</li><li>知能と脚の境界: 发生加速</li><li>肉体分解机: 出现时增加擦弹</li><li>開けて悔しき玉手箱: 发生加速，按等级发生加速，输入4或6进行位置微调，附加破防属性</li><li>魅惑のエサ: 减少硬直</li></ul><h3 id="_10、萃香" tabindex="-1"><a class="header-anchor" href="#_10、萃香"><span>10、萃香</span></a></h3><ul><li>1A: 追加，和DA第二段一样，有前移且不可空防，蹲防错防削2灵，可取消2A，被必杀以上取消</li><li>6B: 弾速向上</li><li>AA: 前進追加</li><li>AAA: 前進追加</li><li>DA: 二段目発生前前進追加</li><li>DB: 启动擦弹，硬直増加</li><li>DC: 発生加速</li><li>J6A: 硬直減少</li><li>厌雾: 减少僵直，出现时要朝向对方</li><li>地霊‐密‐: 発生加速</li><li>妖鬼- 密 -: 発生加速</li><li>攫鬼: 成立时可SC取消</li><li>踏鞴: 発生加速, 硬直減少, 灵力削减增加</li><li>霧符「雲集霧散」: 硬直減少</li><li>鬼神燐火术: 发生加速，加强防御Hitstop</li><li>鬼符「 missing power 」 : 可以打康，追击时间增加</li></ul><h3 id="_11、铃仙" tabindex="-1"><a class="header-anchor" href="#_11、铃仙"><span>11、铃仙</span></a></h3><ul><li>B 射击: 去除防御击退效果，直到最后一段不能DD</li><li>DB: 启动擦弹</li><li>DC: 启动擦弹<br> *「幻胧月瞪」 : 附加磨耗</li><li>214改扫描 アイサイトクリーニング: 发生加速，移动取消加速</li><li>22分身凹 ディスオーダーアイ: 加速发生</li><li>236改(不是子母弹) マインドベンディング: 发生加速</li><li>幻爆「近眼花火」 : 加速发生</li><li>惑视「离圆花冠」 : 削减灵力增加</li></ul><h3 id="_12、文" tabindex="-1"><a class="header-anchor" href="#_12、文"><span>12、文</span></a></h3><ul><li>2C: 伤害增加</li><li>3A: 伤害增加</li><li>6A: 伤害增加</li><li>6C: 伤害增加</li><li>AAA: 伤害增加</li><li>AAAA: 伤害增加</li><li>B 射撃: 追击时间増加</li><li>C: 伤害增加</li><li>DA: 伤害增加，攻击判定增加</li><li>DB: 伤害增加</li><li>DC: 伤害增加，启动擦弹，判定强化</li><li>J2A: 着地僵硬必杀技以上可取消</li><li>J2C: 伤害增加</li><li>J6A: 伤害增加</li><li>J6C: 伤害增加</li><li>J8A: 伤害增加</li><li>JA: 伤害增加</li><li>JC: 伤害增加</li><li>远A: 伤害增加</li><li>天狗burst: 加速发生</li><li>楓扇風: 发生加速，擦弹时判定不消失，发生位置变更，灵力削减增加</li><li>烈風扇: 発生位置変更, 追击时间増加</li><li>疾風扇: 修正改变</li><li>突風「猿田彦の先導」: 発生加速, 可以打康</li><li>鎌風ベーリング:灵力削减增加</li><li>風符「天狗報即日限」: 硬直减小</li><li>風符「天狗道の開風」 : 按住2时性质变化，伤害增加，削弱灵力增加</li></ul><h3 id="_13、小町" tabindex="-1"><a class="header-anchor" href="#_13、小町"><span>13、小町</span></a></h3><ul><li>2C: 発生加速</li><li>3A: 発生加速</li><li>3B: 新增</li><li>6C: 発生加速</li><li>AAA: 硬直減少</li><li>B 射撃: 発生加速, Rate 99%</li><li>C 射击: 场上可以存在多个C弹幕，性能变化</li><li>J2A: 発生加速</li><li>J2C: 発生加速</li><li>J6A: 発生加速</li><li>J6C: 発生加速</li><li>J8A: 硬直減少</li><li>JA: 硬直減少</li><li>f.A: 発生加速、硬直減少</li><li>お迎え体験版: 硬直減少，附加破防属性</li><li>三途の舟: 发生前pose调整、发生加速、伤害增加、惯性变更、自动派生删除</li><li>地獄「無間の狭間」: 射撃部分追击时间増加, 射撃部分惯性变更</li><li>換命「不惜身命、可惜身命」: 発生加速</li><li>死出の風: 伤害增加，追击时间増加</li><li>死符「死者選別の鎌」 : 性质变化，hold field展开时间延长（？？？）</li><li>無間の道: 発生加速, 硬直減少</li><li>迷わず生きた人霊: 发生加速</li><li>離魂の鎌: 伤害增加，削减灵力增加</li></ul><h3 id="_14、衣玖" tabindex="-1"><a class="header-anchor" href="#_14、衣玖"><span>14、衣玖</span></a></h3><ul><li>A: 判定拡大</li><li>AA: 判定拡大</li><li>J2A: 硬直減少</li><li>J6A: 追击时间増加, 硬直減少</li><li>羽衣は水の如く: 提早可防御时机，硬直減少</li><li>電符「雷鼓弾」: 削灵増加</li><li>龍神の稲光り: 硬直減少</li><li>龍魚の一撃: 硬直減少</li></ul><h3 id="_15、天子" tabindex="-1"><a class="header-anchor" href="#_15、天子"><span>15、天子</span></a></h3><ul><li>2B: 灵力削减增加</li><li>6B: 灵力削减增加</li><li>B: 灵力削减增加</li><li>DC: 启动擦弹，硬直减少，横向惯性减少</li><li>H6B: 提高蓄力效率</li><li>HJ2B: 提高蓄力效率</li><li>HJ6B: 提高蓄力效率</li><li>J2B: 灵力削减增加</li><li>J6A: 硬直減少</li><li>J6B: 灵力削减增加</li><li>JA: 硬直減少</li><li>JB: 启动擦弹, 灵力削减增加</li><li>「全人類の緋想天」: Limit 0% 化</li><li>因果之剑: 发生加速，命中硬直减少，命中时可移动取消</li><li>地符「不譲土壌の剣」: 硬直減少</li><li>地精的起床: 变成【天空的灵石】(故事模式SC)</li><li>坤儀の剣: 移动取消加速</li><li>天地冲压: 发生加速，按等级发生加速</li><li>天気「緋想天促」: Limit 0% 化, 灵力削减增加, 追击时间増加</li><li>守りの要: 发生加快</li><li>升天突: 地面版可取消</li><li>移动起身: 速度增加</li><li>绯想之剑: 伤害增加，limit 变更</li><li>緋想の剣気: 2 段目発生加速</li><li>要石「天地開闢プレス」 : 为了让蹲下的对手也能被击中，第二段巨石下落不能防御</li><li>非想「非想非想之剑」 : 伤害增加，初段 rate 100% 化，成立时硬直减少，惯性变更</li></ul><h3 id="_16、早苗" tabindex="-1"><a class="header-anchor" href="#_16、早苗"><span>16、早苗</span></a></h3><ul><li>1D（地面姿态）: 追加</li><li>2D（地面姿态）: 追加</li><li>3D（地面姿态）: 追加</li><li>AAA: Rate 85% 化</li><li>AAAA: 伤害提升，rate 86%</li><li>B: 発生位置変更</li><li>J4C: 取消时机钝化(4C 214诹访子分身 bug 修正)</li><li>JA: 発生加速</li><li>JB: 発生位置変更</li><li>22改 蛇: 移动取消加速</li><li>623妈突 乾神招来 突: 判定調整，缩小横向距离</li><li>御柱: 伤害增加</li><li>坤神招来 鉄輪: 灵力削减增加</li><li>奇跡「白昼の客星」:加速发生，增加防御Hitstop，limit 3%</li><li>236 波起: 发生加速，磨血增加</li><li>祈願「商売繁盛守り」: 発生加速, 発生位置変更</li><li>秘術「忘却の祭儀」: 発生加速</li></ul><h3 id="_17、琪露诺" tabindex="-1"><a class="header-anchor" href="#_17、琪露诺"><span>17、琪露诺</span></a></h3><ul><li>2b 射击: 伤害上升</li><li>2C 射撃: 射撃反射, 耐久力減少</li><li>6A: 発生加速</li><li>6b 射击: 伤害上升，灵力削减增加，命中间隔延长</li><li>B 射击: 伤害上升</li><li>DC: 启动擦弹</li><li>J6a: 伤害增加，rate 85%，発生加速, 硬直減少</li><li>J8A: 発生加速</li><li>JA: 追击时间増加</li><li>原236 アイシクルシュート: 加速发生</li><li>623剑 アイシクルソード: 发生加速，硬直减少，惯性变更</li><li>22改 アイシクルボム: 增加伤害，惯性变更，追击时间增加</li><li>623改 アイシクルライズ：追击时间增加</li><li>214改踢 アイスキック: 上升中可左右操作，伤害增加，追击时间增加</li><li>原623 フリーズタッチミー: 2级增加体术无敌</li><li>236改 フロストピラーズ: 发生加速，硬直减少</li><li>22冰箱 フローズン冷凍法: 命中后可取消</li><li>マイナス K（故事模式符卡？？）: 发生加速，硬直减少，惯性改变</li><li>214雪球 真夏のスノーマン: 变成 マイナス K</li><li>冷凍光線: 追击时间増加, Rate 98%, Limit 10%</li><li>冷符「瞬間冷凍ビーム」: 硬直减少，命中行为变化</li><li>吹符「アイストルネード」: 发生加速</li><li>氷塊「コールドスプリンクラー」: 速度降低</li><li>氷符「アイシクルマシンガン」: 加速发生</li><li>氷符「フェアリースピン」 : 附加至暗转完全无敌</li><li>霜符「フロストコラムス」: 伤害增加，rate 95%</li></ul><h3 id="_18、红美铃" tabindex="-1"><a class="header-anchor" href="#_18、红美铃"><span>18、红美铃</span></a></h3><ul><li>2C: 追击时间増加</li><li>6b: Hitstop增加，灵力削减增加</li><li>6C: 持続時間延長</li><li>AAA: 前進追加</li><li>B: 追击时间増加, 灵力削减増加</li><li>C: 追击时间増加</li><li>DA: 攻击等级增加</li><li>DB: 增加擦弹，发生加速，硬直增加</li><li>HB: 灵力削减増加</li><li>HJB: 灵力削减増加</li><li>j2b: Hitstop增加，灵力削减增加</li><li>J6A: 追击时间増加</li><li>j6b: Hitstop增加，灵力削减增加</li><li>J6C: 持続時間延長</li><li>J8A: 硬直減少</li><li>JA: 追击时间増加, 硬直減少</li><li>JB: 追击时间増加, 灵力削减增加</li><li>JC: 追击时间増加</li><li>彩华「虹色太极拳」 : 发生加速，击退减少</li><li>彩雨: 附加擦弹，C版发生加速，C版移动追加，Hitstop增加</li><li>气符「地龙天龙脚」 : 伤害增加</li><li>气符「星脉弹」 : 发生加速，硬直减少，伤害增加，灵力削减增加</li><li>気符「猛虎内勁」: 全体加速</li><li>水形太极拳: 增加擦弹</li><li>紅寸剄: 発生加速</li><li>红炮: 从等级2附加打击无敌</li><li>芳波: 発生加速</li><li>华符「彩光莲华掌」 : 增加擦弹</li><li>虎劲: 附加特殊霸体，加快取消时间，可通过Dash以上取消</li><li>虹符「烈虹真拳」: 削除Lift修正</li><li>黄震腿: 追加特效，攻击等级上升，增加防御的Hitstop，蓄力附加破防</li></ul><h3 id="_19、高达" tabindex="-1"><a class="header-anchor" href="#_19、高达"><span>19、高达</span></a></h3><ul><li>2B: 発生加速</li><li>3C: 追加</li><li>空中66: 减小前摇</li><li>6B: 発生加速</li><li>A: 硬直増加</li><li>AAAA: 硬直減少</li><li>B: 発生加速</li><li>DA: 発生加速</li><li>DB: 発生加速</li><li>H3A: 硬直減少</li><li>J2A: 发生加速，普通命中也会弹地</li><li>J2B: 発生加速</li><li>J3C: 追加</li><li>J6B: 発生加速</li><li>JA: 硬直減少</li><li>JB: 発生加速</li><li>「地獄の人工太陽」: Lift 補正削除</li><li>原236 グラウンドメルト: 加速发生</li><li>原22 : 移动取消加速，发生加速</li><li>光剑: 减少硬直</li><li>地狱波动炮: 修复与核热的怨灵的bug</li><li>核热的怨灵: C版瞄准自己发射，灵力削减增加</li><li>核符「クリーピングサン」:发生加速，伤害减少，limit 0% 化</li><li>焔星「十凶星」: 発生加速</li></ul><h3 id="_20、青蛙" tabindex="-1"><a class="header-anchor" href="#_20、青蛙"><span>20、青蛙</span></a></h3><ul><li>6B 射击: 提高蓄力效率</li><li>B: 去除防御击退和直到最后一段不能DD</li><li>DA: 可从 backdash 发动</li><li>DB: 可从 backdash 启动</li><li>DC: 可从 backdash 发动</li><li>JA: 発生加速</li><li>JB: 去除防御击退和直到最后一段不能DD</li><li>飛翔: 性能変更，向上漂浮效果减弱，可以各种方向飞了</li></ul><h3 id="_21、ex彩蛋" tabindex="-1"><a class="header-anchor" href="#_21、ex彩蛋"><span>21、EX彩蛋</span></a></h3><p><strong>全人类开局时按住3D开启“超级赛亚人”模式，1D开启“暗隐”模式</strong></p>',49),x=l("div",{class:"hint-container tip"},[l("p",{class:"hint-container-title"},"超级赛亚人模式"),l("ul",null,[l("li",null,"行走Dash（除了空中44）速度翻倍"),l("li",null,"44后撤变成反向6D"),l("li",null,"地面Dash开始前按反方向可以反方向Dash（很难按，比如44取消然后反过来6D）"),l("li",null,"空中66和地面6D附加飞尘特效"),l("li",null,"空中行动（Dash，攻击，防御等）之前可以无限腾空跳（7 8 9方向）【和⑨的漂浮特殊效果相似】"),l("li",null,"空中无限飞翔次数"),l("li",null,"对手弹墙弹地会受到100固定伤害（算1 HIT，虽然没明面加rate但是还是会影响追击时间）"),l("li",null,"总是霸占板边，攻击会把人挤出板边"),l("li",null,"按 F11恢复凡人"),l("li",null,"特殊：妖梦地面按D可以出B版囧眼当身，5D对中段和上段，2D对下段，必杀技随意互相取消（同必杀也可以取消）"),l("li",null,"特殊：幽幽飞翔效果变成蕾咪一瞬，不耗灵"),l("li",null,"特殊：蕾咪按D可以出B版锁链，再按D可以停下锁链，随时可以大跳取消走人锁链消失，或者结束后跟随锁链移动"),l("li",null,"特殊：爱丽丝DB DC借助飞尘buff会飞很远"),l("li",null,"特殊：灵梦原236变化"),l("li",null,"特殊：美铃很多招数性能变化，空中66没有速度加成"),l("li",null,"特殊：小町很多招数性能变化，原623变成升龙（可2A接，类似灵梦有地面判定）"),l("li",null,"特殊：19和天子的地面6D和空中66由于某些原因会保持翻倍，跑的比狗还快")])],-1),S=l("div",{class:"hint-container tip"},[l("p",{class:"hint-container-title"},"暗隐模式"),l("ul",null,[l("li",null,"自动满卡，开局即爆发，很容易耗光20张卡"),l("li",null,"无限灵力"),l("li",null,"空中无限飞翔次数")])],-1);function y(H,w){const s=o("RouteLink"),r=o("Tabs");return h(),d("div",null,[A,l("div",_,[g,l("p",null,[l("strong",null,[a(s,{to:"/about/"},{default:t(()=>[D]),_:1})])])]),l("div",m,[C,B,l("p",null,[i("2、启用 "),b,i(" 这个 mod，记得保存配置 "),a(s,{to:"/mods/WhatsMod.html"},{default:t(()=>[f]),_:1})]),J,v]),k,a(r,{id:"2066",data:[{id:"超级赛亚人模式"},{id:"暗隐模式"}]},{title0:t(({value:e,isActive:n})=>[i("超级赛亚人模式")]),title1:t(({value:e,isActive:n})=>[i("暗隐模式")]),tab0:t(({value:e,isActive:n})=>[x]),tab1:t(({value:e,isActive:n})=>[S]),_:1})])}const P=c(p,[["render",y],["__file","SokuPlus.html.vue"]]),L=JSON.parse('{"path":"/mods/GameplayMods/SokuPlus.html","title":"SokuPlus改版Mod","lang":"zh-CN","frontmatter":{"title":"SokuPlus改版Mod","icon":"circle-info","order":4,"editLink":false,"author":"三回転Tstar","date":"2024-03-04T00:00:00.000Z","description":"新版已不再必需win7系统 这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改 注意，此 mod 需要双方一起使用且版本相同 网战请关闭 giuroll 回滚使用 网战请关闭 giuroll 回滚使用，否则会发生不同步 如琪露诺的原214和魔理沙等改成故事模式SC的招数，会根据自己 Config 菜单内的难度设置变化而变化，建议双方的难度设置...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/GameplayMods/SokuPlus.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/GameplayMods/SokuPlus.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"SokuPlus改版Mod"}],["meta",{"property":"og:description","content":"新版已不再必需win7系统 这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改 注意，此 mod 需要双方一起使用且版本相同 网战请关闭 giuroll 回滚使用 网战请关闭 giuroll 回滚使用，否则会发生不同步 如琪露诺的原214和魔理沙等改成故事模式SC的招数，会根据自己 Config 菜单内的难度设置变化而变化，建议双方的难度设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/01/21/65ace3b260d9c.webp =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-25T11:01:09.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T11:01:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SokuPlus改版Mod\\",\\"image\\":[\\"https://bu.dusays.com/2024/01/21/65ace3b260d9c.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65ace3bec545f.webp =400x\\"],\\"datePublished\\":\\"2024-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-25T11:01:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":3,"title":"0、全体修改","slug":"_0、全体修改","link":"#_0、全体修改","children":[]},{"level":3,"title":"1、灵梦","slug":"_1、灵梦","link":"#_1、灵梦","children":[]},{"level":3,"title":"2、魔理沙","slug":"_2、魔理沙","link":"#_2、魔理沙","children":[]},{"level":3,"title":"3、咲夜","slug":"_3、咲夜","link":"#_3、咲夜","children":[]},{"level":3,"title":"4、爱丽丝","slug":"_4、爱丽丝","link":"#_4、爱丽丝","children":[]},{"level":3,"title":"5、帕秋莉","slug":"_5、帕秋莉","link":"#_5、帕秋莉","children":[]},{"level":3,"title":"6、妖梦","slug":"_6、妖梦","link":"#_6、妖梦","children":[]},{"level":3,"title":"7、蕾米莉亚","slug":"_7、蕾米莉亚","link":"#_7、蕾米莉亚","children":[]},{"level":3,"title":"8、幽幽子","slug":"_8、幽幽子","link":"#_8、幽幽子","children":[]},{"level":3,"title":"9、八云紫","slug":"_9、八云紫","link":"#_9、八云紫","children":[]},{"level":3,"title":"10、萃香","slug":"_10、萃香","link":"#_10、萃香","children":[]},{"level":3,"title":"11、铃仙","slug":"_11、铃仙","link":"#_11、铃仙","children":[]},{"level":3,"title":"12、文","slug":"_12、文","link":"#_12、文","children":[]},{"level":3,"title":"13、小町","slug":"_13、小町","link":"#_13、小町","children":[]},{"level":3,"title":"14、衣玖","slug":"_14、衣玖","link":"#_14、衣玖","children":[]},{"level":3,"title":"15、天子","slug":"_15、天子","link":"#_15、天子","children":[]},{"level":3,"title":"16、早苗","slug":"_16、早苗","link":"#_16、早苗","children":[]},{"level":3,"title":"17、琪露诺","slug":"_17、琪露诺","link":"#_17、琪露诺","children":[]},{"level":3,"title":"18、红美铃","slug":"_18、红美铃","link":"#_18、红美铃","children":[]},{"level":3,"title":"19、高达","slug":"_19、高达","link":"#_19、高达","children":[]},{"level":3,"title":"20、青蛙","slug":"_20、青蛙","link":"#_20、青蛙","children":[]},{"level":3,"title":"21、EX彩蛋","slug":"_21、ex彩蛋","link":"#_21、ex彩蛋","children":[]}],"git":{"createdTime":1690871118000,"updatedTime":1711364469000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":11}]},"readingTime":{"minutes":19.72,"words":5916},"localizedDate":"2024年3月4日","autoDesc":true,"excerpt":"<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">新版已不再必需win7系统</p>\\n<p><strong>这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改</strong></p>\\n<p><strong>注意，此 mod 需要双方一起使用且版本相同</strong></p>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">网战请关闭 giuroll 回滚使用</p>\\n<p><strong>网战请关闭 giuroll 回滚使用，否则会发生不同步</strong></p>\\n<p><strong>如琪露诺的原214和魔理沙等改成故事模式SC的招数，会根据自己 Config 菜单内的难度设置变化而变化，建议双方的难度设置为 Easy 或 Normal（双方要一样否则不同步）</strong></p>\\n</div>\\n</div>"}');export{P as comp,L as data};
