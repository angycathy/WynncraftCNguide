import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c,d as t,e as d,b as o,w as s,f as e}from"./app-6385ae17.js";const p="/WynncraftCNguide/assets/img/prof1.jpg",h="/WynncraftCNguide/assets/img/prof2.jpg",g="/WynncraftCNguide/assets/img/prof3.jpg",u="/WynncraftCNguide/assets/img/prof4.jpg",v="/WynncraftCNguide/assets/img/prof5.jpg",m={},L=e('<p>副职在wynn中其实并不是一个必须要游玩的内容</p><p>对于玩家而言，这个内容更像是后期<s>闲的没事</s>的休闲（一点也不）内容。</p><p>对于新手而言，练习副职是消耗时间过多且效率低下的玩法。</p><p>在这里，我只会对副职进行简单的介绍（部分摘自moe_block的自制系统简介）。</p><p>打开物品栏的指南针后，我们将鼠标移动至铁斧的图标上，可以看到我们所有的副职等级，<br><img src="'+p+'" alt="" loading="lazy"></p><p>副职主要分为<strong>采集</strong>和<strong>制作</strong>两大板块</p><h2 id="采集" tabindex="-1"><a class="header-anchor" href="#采集" aria-hidden="true">#</a> 采集</h2>',7),b=e('<p>Tool Merchant会出售1~2级的采集工具<br><img src="'+h+'" alt="" loading="lazy"><br> 从上到下为鱼竿、木斧、木镐、木锄</p><p>分别对应钓鱼、伐木、挖矿和农业。</p><p>更高级的工具需要通过完成地牢并使用对应的代币与绿宝石在地牢商人处兑换</p><p>或直接使用交易市场进行购买。</p><p>注意，等级越高的工具，使用时所需要的对应采集等级需求就越高。</p><p>有了这些工具，我们就可以走到对应的地方，到了可以采集的目标附近之后，我们会看到类似于这样的字：<br><img src="'+g+'" alt="" loading="lazy"></p><p>此时我们使用工具左键可以获得该目标的直接产物（如木头、矿石、鱼肉、小麦）</p><p>而我们右键则是会获得该目标处理过后的产物（如纸、宝石、鱼油、绳子）。而这些产物都可以用于制造业。</p><p>以上介绍了四种采集，共有八种原材料。</p><p>原材料分为1~3星级，一次采集中，若采集成功（成功率随采集等级提高）：</p><p>89%的概率掉落1星原材料，10%的概率掉落2星原材料，1%概率掉落3星原材料。</p><p>原材料的星级影响其制作出的物品的耐久度，面板数值。</p><div class="hint-container tip"><p class="hint-container-title">原料对应的制作物品等级</p><p>原材料分为1级，10级，20级……110级。</p><p>1级原材料制作出的物品根据自身的制作等级，分为1-3级，3-5级，5-7级，7-9级；<br> 具体等级根据范围内随机取值。</p><p>10级原材料则为10-13级，13-15级，15-17级，17-19级，20级往后以此类推。</p><p>特例为100级和110级原材料<br> 100级原材料只能制作100-103级物品，110原材料只能制作103-105级物品。</p></div><div class="hint-container warning"><p class="hint-container-title">警告</p><p>在采集过程中，你的背包不能同时存放两把相同类型的工具</p><p>即使其中一把超过了你的采集等级！</p><p>如果你这么做了，你的采集成功率会大幅度降低。</p></div><div class="hint-container tip"><p class="hint-container-title">关于工具耐久</p><p>在工具耐久归零后，你仍然可以得到采集经验</p><p>但此时你将不会得到任何采集原料</p></div><h2 id="制作" tabindex="-1"><a class="header-anchor" href="#制作" aria-hidden="true">#</a> 制作</h2><p>在城镇中，我们会看到这样的东西，比如这个是药水制造的酿造台：</p><figure><img src="'+u+'" alt="每种制造业都有一个类似的工作台" tabindex="0" loading="lazy"><figcaption>每种制造业都有一个类似的工作台</figcaption></figure><p>与其交互后即可打开制作GUI界面(每种制作副职都有一样的界面！)</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个界面的左边两格，是用于存放原材料（即采集获得的材料）</p><p>而中间六格则是用于存放功能素材（可以通过打怪/开箱子获得）</p><p>部分功能素材的不同摆放方式会为最后的成品带来不一样的效果。</p><div class="hint-container tip"><p class="hint-container-title">如果你不放置任何素材...</p><ul><li>饰品：无任何属性</li><li>武器：只有基础伤害</li><li>防具：只有基础血量</li><li>消耗品：作用和回血药水相当，且会占用你的药水槽</li></ul></div><p>如果放了材料，则制作出来的物品带有材料属性</p><p>若消耗品放置了材料，则不再是回血功能，而是根据材料决定的属性</p><p>放置了材料的1-30级消耗品基础只能使用1次，31-70级2次，71级以上3次。</p><p>与此类似，1-30级自制武器装备只有1个粉槽，31-70级2个，71级以上3个。</p><div class="hint-container tip"><p class="hint-container-title">自制物品都具有耐久限制！</p><p>自制装备受到攻击和移动时掉落耐久，自制饰品同理<br> 自制武器攻击和释放技能时掉落耐久。</p><p>当自制物品的耐久低于最大值的50%，会逐渐折损属性<br> 耐久为0时只有10%的属性，但是并不会直接消失</p><p>使用修理碎片在铁匠处可以修复自制物品的耐久</p><p><strong>修理碎片放置在银行也可以直接在铁匠处消耗。</strong></p></div><p>材料分为0星，1星，2星，3星。星级仅表示稀有度，不表示强度。</p><p>各种星级的材料都可能是比较实用的材料。</p><p>材料的等级表示其只能用于对应等级或者更高的配方中合成，<br> 例如一个96级材料，若用于制作93-95的物品，则无法使用该材料；<br> 若用于制作95-97或者更高的等级，则可以使用。</p><details class="hint-container details"><summary>制造业的全部基础配方</summary><table><thead><tr><th>种类</th><th>Ingot</th><th>Gem</th><th>Wood</th><th>Paper</th><th>Grain</th><th>String</th><th>Meat</th><th>Oil</th></tr></thead><tbody><tr><td>长矛 　(武器)</td><td>1X</td><td></td><td>2X</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>匕首 　(武器)</td><td>2X</td><td></td><td>1X</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>弓 (木工)</td><td></td><td></td><td>1X</td><td></td><td></td><td>2X</td><td></td><td></td></tr><tr><td>法杖 　(木工)</td><td></td><td></td><td>2X</td><td></td><td></td><td>1X</td><td></td><td></td></tr><tr><td>巫杖 　(木工)</td><td></td><td></td><td>1X</td><td></td><td></td><td></td><td></td><td>2X</td></tr><tr><td>头盔 　(盔甲)</td><td>1X</td><td></td><td></td><td>2X</td><td></td><td></td><td></td><td></td></tr><tr><td>胸甲 　(盔甲)</td><td>2X</td><td></td><td></td><td>1X</td><td></td><td></td><td></td><td></td></tr><tr><td>护腿 　(纺织)</td><td>2X</td><td></td><td></td><td></td><td></td><td>1X</td><td></td><td></td></tr><tr><td>靴子　(纺织)</td><td>1X</td><td></td><td></td><td></td><td></td><td>2X</td><td></td><td></td></tr><tr><td>种类</td><td><strong>Ingot</strong></td><td><strong>Gem</strong></td><td><strong>Wood</strong></td><td><strong>Paper</strong></td><td><strong>Grain</strong></td><td><strong>String</strong></td><td><strong>Meat</strong></td><td><strong>Oil</strong></td></tr><tr><td>指环　(饰品)</td><td></td><td>1X</td><td></td><td></td><td></td><td></td><td></td><td>1X</td></tr><tr><td>手镯　(饰品)</td><td></td><td>2X</td><td></td><td></td><td></td><td></td><td></td><td>1X</td></tr><tr><td>项链　(饰品)</td><td></td><td>3X</td><td></td><td></td><td></td><td></td><td></td><td>1X</td></tr><tr><td>药水</td><td></td><td></td><td></td><td></td><td>2X</td><td></td><td></td><td>1X</td></tr><tr><td>卷轴</td><td></td><td></td><td></td><td>1X</td><td></td><td></td><td></td><td>1X</td></tr><tr><td>食物</td><td></td><td></td><td></td><td></td><td>1X</td><td></td><td>2X</td><td></td></tr></tbody></table><p>以上X的取值根据原材料等级取值</p><table><thead><tr><th>原料等级</th><th>1</th><th>10-20</th><th>30-40</th><th>50-60</th><th>70-80</th><th>90+</th></tr></thead><tbody><tr><td>X</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr></tbody></table></details><h2 id="附录-关于采集推荐地点以及工具兑换点" tabindex="-1"><a class="header-anchor" href="#附录-关于采集推荐地点以及工具兑换点" aria-hidden="true">#</a> 附录 - 关于采集推荐地点以及工具兑换点</h2>',34),f={href:"https://www.youtube.com/@Olinus10",target:"_blank",rel:"noopener noreferrer"},X=e('<h3 id="woodcutting" tabindex="-1"><a class="header-anchor" href="#woodcutting" aria-hidden="true">#</a> Woodcutting</h3><ul><li>Lv.1 NIVLA Forest <code>[-366,67,-1729]</code></li><li>Lv.10 Detlas Suburbs <code>[335,67,-1580]</code></li><li>Lv.20 Nemract Outskirts <code>[88,46,-2132]</code></li><li>Lv.30 Bremminglar <code>[665,73,-2016]</code></li><li>Lv.40 Nesaak Entrance <code>[85,68,-945]</code></li><li>Lv.50 Dernel Mansion <code>[-941,23,-725]</code></li><li>Lv.60 Dark Forest Border <code>[-1387,44,-5051]</code></li><li>Lv.70 Forgery Grove <code>[-856,45,-4990]</code></li><li>Lv.80 Thesead Entrance <code>[693,78,-5085]</code></li><li>Lv.90 Lighthouse Mountain <code>[-1362,122,-3029]</code></li><li>Lv.100 Kandon Mountain <code>[750,113,-4600]</code></li><li>Lv.100 Wybel Island <code>[1296,66,-4693]</code></li><li>Lv.110 Lutho Gate <code>[971,74,-628]</code></li></ul><h3 id="farming" tabindex="-1"><a class="header-anchor" href="#farming" aria-hidden="true">#</a> Farming</h3><ul><li>Lv.1 Ragni Wheat Fields <code>[-776,67,-1736]</code></li><li>Lv.10 Durum Isles <code>[541,35,-2956]</code></li><li>Lv.20 Durum Isles <code>[500,35,-2838]</code></li><li>Lv.30 Durum Isles <code>[385,35,-2836]</code></li><li>Lv.40 Olux Farms <code>[-1630,51,-5428]</code></li><li>Lv.50 Wormhole Farms <code>[-2068,53,-5462]</code></li><li>Lv.50/60 Forgotten Burrows <code>[-2041,57,-5388]</code> (+50%XP,Quest Needed)</li><li>Lv.60 Forgery Farms <code>[-724,44,-5014]</code></li><li>Lv.70 Forgery Farms <code>[-724,44,-5014]</code></li><li>Lv.80 Hobgoblin Flelds <code>[79,42,-4838]</code></li><li>Lv.90 Lighthouse Farm <code>[-1378,123,-3013]</code></li><li>Lv.100 Kandon Caverns <code>[850,40,-4423]</code></li><li>Lv.110 Void Valley Upper <code>[1089,135,-1130] </code></li></ul><h3 id="mining" tabindex="-1"><a class="header-anchor" href="#mining" aria-hidden="true">#</a> Mining</h3><ul><li>Lv.1 Ragni Mine <code>[-572,69,-1556]</code></li><li>Lv.10 Corrupted Mines <code>[786,86,-1242]</code></li><li>Lv.20 Corrupted Mines <code>[685,89,-1217]</code></li><li>Lv.30 Bandit Barracks <code>[1478,91,-2178]</code></li><li>Lv.40 Nesaak Mountain Side <code>[260,89,-700]</code></li><li>Lv.40 Karoc Quarry <code>[-1655,76,-4347]</code> (+50%XP,Quest Needed)</li><li>Lv.50 Troms Silver Mine <code>[-620,83,-1009]</code></li><li>Lv.60 Olux River Source <code>[-1444,48,-5367]</code></li><li>Lv.70 Prison Caverns <code>[-790,108,-5628]</code></li><li>Lv.80 Colossus Mines <code>[560,120,-4355]</code></li><li>Lv.80/90 Maex Mine <code>[1535,61,-5339]</code> (+50%XP,Quest Needed)</li><li>Lv.90 Molten Upper Mine <code>[1433,142,-5106]</code></li><li>Lv.100 Sky Caverns <code>[872,34,-4775]</code></li><li>Lv.100 Kandon Beda Cave <code>[850,40,-4423]</code></li><li>Lv.110 Olmic Mine <code>[492,93,-525]</code></li></ul><h3 id="fishing" tabindex="-1"><a class="header-anchor" href="#fishing" aria-hidden="true">#</a> Fishing</h3><ul><li>Lv.1 Ragni Pond <code>[-634,67,-1536]</code></li><li>Lv.10 Wynn Plains River <code>[53,58,-1494]</code></li><li>Lv.20 Saint’s Row Beach <code>[371,34,-2126]</code></li><li>Lv.30 Desert River Source <code>[1182,154,-2248]</code></li><li>Lv.40 Nodguj Island <code>[891,34,-3372]</code></li><li>Lv.50 Iboju Waterfall <code>[-780,74,-724]</code></li><li>Lv.50 Forgotten Burrows <code>[-2041,57,-5388]</code> (+50%XP,Quest Needed)</li><li>Lv.60 Willow Pond <code>[-1303,51,-5194]</code></li><li>Lv.70 Lake Gylia <code>[-207,29,-5204]</code></li><li>Lv.80 Relos Coast <code>[-1860,37,-2191]</code></li><li>Lv.90 Molten Heights Lake <code>[1435,139,-5091]</code></li><li>Lv.90 Maex Mine <code>[1535,61,-5339]</code> (+50%XP,Quest Needed)</li><li>Lv.100 Kandon Pond Lower <code>[689,88,-4605]</code></li><li>Lv.100 Sky Falls <code>[1432,127,-4574]</code></li><li>Lv.110 Toxic Hill Upper <code>[786,148,-983]</code></li></ul><h3 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h3><ul><li><p>Tier 3: Decrepit Sewers &amp; Infested Pit<br> Cost: 1 Fragment</p></li><li><p>Tier 4: Timelost Sanctum &amp; Underworld Crypt<br> Cost: 2 Fragment</p></li><li><p>Tier 5: Sand-Swept Tomb<br> Cost: 3 Fragment +64e</p></li><li><p>Tier 6: Ice Barrows<br> Cost: 4 Fragment + 128e</p></li><li><p>Tier 7: Undergrowth Ruins<br> Cost: 5 Fragment + 256e</p></li><li><p>Tier 8: Galleon&#39;s Graveyard &amp; CDS<br> Cost: 6 Fragment + 512e</p></li><li><p>Tier 9: CIP &amp; CLS<br> Cost: 7 Fragment + 1024e</p></li><li><p>Tier 10: CUC &amp; CSST<br> Cost: 8 Fragment + 2048e</p></li><li><p>Tier 11: CIB &amp; CUR &amp; Fallen Factory<br> Cost: 9 Fragment + 4096e</p></li><li><p>Tier 12: Eldritch Outlook<br> Cost: 9 Fragment + 4096e</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本文作者:kotoko</p></div>',11);function _(C,y){const r=i("RouterLink"),l=i("ExternalLinkIcon");return a(),c("div",null,[L,t("p",null,[d("想要提升采集等级，最开始你需要先找到"),o(r,{to:"/guide/npcs.html#tool-merchant"},{default:s(()=>[d("Tool Merchant")]),_:1})]),b,t("blockquote",null,[t("p",null,[d("数据来源："),t("a",f,[d("https://www.youtube.com/@Olinus10"),o(l)])])]),X])}const x=n(m,[["render",_],["__file","profession.html.vue"]]);export{x as default};