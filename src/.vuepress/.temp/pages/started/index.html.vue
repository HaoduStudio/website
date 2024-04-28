<template><div><p>对于大多数小天才用户，安装每日手帐<strong>只需简单三步</strong>：</p>
<h2 id="应用商店安装-正式版" tabindex="-1"><a class="header-anchor" href="#应用商店安装-正式版"><span>应用商店安装（正式版）</span></a></h2>
<p>首先，打开 <code v-pre>小天才家长端</code> APP，在底部菜单栏中选择最右项，进入 <code v-pre>更多</code> 页。</p>
<p>在 <code v-pre>更多</code> 页中下滑，找到 <code v-pre>应用中心</code> 字样，单击即可进入小天才的官方应用中心。</p>
<p>进入应用中心后，在 <code v-pre>Banner</code> 下方有五个分类，选择其中第二个的 <code v-pre>生活便利</code> 模块。</p>
<p>进入主分类应用列表，下滑即可找到我们的 <code v-pre>每日手帐</code> ，点击图文右侧 <code v-pre>安装</code> 按钮，在下方弹出的安装确认界面勾选用户协议及隐私协议后，选择“使用WiFi安装”或“使用流量安装”的其中一种下载方式后系统就会根据选择在合适的条件下自动开始安装流程。</p>
<div class="hint-container tip">
<p class="hint-container-title">安装前提示</p>
<ul>
<li>请确认手表可用空间大于至少2GB</li>
<li>请确认手表流量余额充足或已经连接可用WiFi</li>
<li>请确认手表处于在线状态</li>
<li>请确认手表连接的是正式服务器（即<code v-pre>正式环境</code>，而非<code v-pre>开发环境</code>、<code v-pre>模块环境</code>）</li>
<li>请确认手表剩余电量充足（大于20%）</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">版本滞后提示</p>
<p>小天才内上架的 <code v-pre>每日手帐</code> APP 可能不是最新版本，一切请以<strong>Github上或社群内反馈最新版本为主</strong></p>
<p>您可以透过 <a href="https://github.com/HaoduStudio/DailyNotes-V3" target="_blank" rel="noopener noreferrer">Github V3仓库<ExternalLinkIcon/></a> 查看最新动态。</p>
</div>
<iframe id="dogePlayerFrame" src="https://player.dogecloud.com/web/player.html?vcode=5defbe4ccdf7fd68&userId=2491&autoPlay=false&inFrame=true" allowfullscreen="true" msallowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" allowtransparency="true" scrolling="no" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerPolicy="unsafe-url"></iframe>
<h2 id="adb离线安装-所有版本" tabindex="-1"><a class="header-anchor" href="#adb离线安装-所有版本"><span>ADB离线安装（所有版本）</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">安全警告</p>
<p><strong>以下内容仅建议 <code v-pre>有刷机能力、有责任、有一定技术、有一定理解能力</code> 的用户查阅，否则我们只推荐通过应用商店安装程序</strong></p>
<p>HaoduStudio不承担任何因非法或不规范操作导致的不可逆转的后果，包括但不限于: <em>手帐数据丢失、数据库重建失败、多媒体缺失等后果</em></p>
</div>
<div class="hint-container info">
<p class="hint-container-title">下载渠道</p>
<p>在开始使用 <code v-pre>ADB</code> 离线安装之前，请先确认您的电脑是否已经安装了相关套件并配置好了环境。若未安装，请下载<a href="https://developer.android.com/tools/releases/platform-tools?hl=zh-cn#downloads" target="_blank" rel="noopener noreferrer">Platform工具包<ExternalLinkIcon/></a>解压并放在一个<strong>纯英文</strong>的目录内。</p>
<p>并且你还需要准备每日手帐的官方安装包，你可以通过 <code v-pre>Clone源码并本地编译</code> 获得，或通过 <a href="https://github.com/HaoduStudio/DailyNotes/releases" target="_blank" rel="noopener noreferrer">Github Release<ExternalLinkIcon/></a> 下载（目前仅提供V2稳定及测试版本）</p>
</div>
<p>使用自带文件管理器打开 <code v-pre>Platform工具包</code> 目录，在管理器上方输入<code v-pre>cmd</code>打开命令行。在命令行中输入 <code v-pre>adb devices</code> 确认是否已经连接了手表，若未连接，请连接后重试(当然你可能没破解啥的)。</p>
<figure><img src="https://shanghai.static.nextsay.cn/2024/04/29/662e735b0b5c1.png" alt="打开adb cmd" tabindex="0" loading="lazy"><figcaption>打开adb cmd</figcaption></figure>
<p>像这样就证明你的连接有效：</p>
<figure><img src="https://shanghai.static.nextsay.cn/2024/04/29/662e74ed56c23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>adb install -r xxx.apk(需包含文件存放路径，可直接拖动apk文件至cmd内，此时路径会自动识别)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


