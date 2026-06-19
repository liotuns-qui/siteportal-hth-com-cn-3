// public/site-helper.js
(function () {
  'use strict';

  var config = {
    portalUrl: 'https://siteportal-hth.com.cn',
    keyword: '华体会',
    seed: 'f7bde08d6c3d7e4a' //用于微调展示
  };

  var hints = [
    '欢迎访问 ' + config.portalUrl + '，关键词：' + config.keyword,
    '提示：页面加载完毕，可查看相关卡片',
    '当前站点专注' + config.keyword + '相关服务'
  ];

  var badgeList = [
    { label: '华体会', color: '#3498db' },
    { label: '体育', color: '#e74c3c' },
    { label: '电竞', color: '#2ecc71' },
    { label: '真人', color: '#f39c12' },
    { label: '彩票', color: '#9b59b6' }
  ];

  function createCard(container) {
    var card = document.createElement('div');
    card.className = 'site-helper-card';
    card.style.cssText = 'border:1px solid #ddd; border-radius:8px; padding:16px; margin:20px 0; background:#f9f9f9; font-family:sans-serif;';
    var title = document.createElement('h3');
    title.textContent = '页面提示卡片';
    title.style.margin = '0 0 12px 0';
    card.appendChild(title);

    var hintList = document.createElement('ul');
    hintList.style.listStyle = 'none';
    hintList.style.padding = '0';
    hintList.style.margin = '0 0 12px 0';
    hints.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      li.style.marginBottom = '6px';
      li.style.fontSize = '14px';
      hintList.appendChild(li);
    });
    card.appendChild(hintList);

    var linkInfo = document.createElement('p');
    linkInfo.innerHTML = '相关链接：<a href="' + config.portalUrl + '" target="_blank" rel="noopener noreferrer">' + config.portalUrl + '</a>';
    linkInfo.style.fontSize = '14px';
    card.appendChild(linkInfo);

    container.appendChild(card);
  }

  function createBadges(container) {
    var badgeContainer = document.createElement('div');
    badgeContainer.className = 'site-helper-badges';
    badgeContainer.style.cssText = 'margin:20px 0;';

    var title = document.createElement('h4');
    title.textContent = '关键词徽章';
    title.style.margin = '0 0 10px 0';
    badgeContainer.appendChild(title);

    badgeList.forEach(function (item) {
      var badge = document.createElement('span');
      badge.textContent = item.label;
      badge.style.cssText = 'display:inline-block; padding:4px 12px; margin:4px 6px 4px 0; border-radius:16px; background:' + item.color + '; color:#fff; font-size:13px; font-weight:500;';
      badgeContainer.appendChild(badge);
    });

    container.appendChild(badgeContainer);
  }

  function createAccessInfo(container) {
    var info = document.createElement('div');
    info.className = 'site-helper-access';
    info.style.cssText = 'margin:20px 0; padding:12px; border-left:4px solid #2c3e50; background:#ecf0f1; border-radius:4px; font-family:sans-serif;';
    info.innerHTML = '<p style="margin:0; font-size:14px;"><strong>访问说明：</strong>本站为 <a href="' + config.portalUrl + '" target="_blank" rel="noopener noreferrer">' + config.portalUrl + '</a> 的辅助工具，展示有关「' + config.keyword + '」的示例内容。所有数据仅用于演示，不涉及用户隐私或敏感操作。</p>';
    container.appendChild(info);
  }

  function init() {
    var container = document.createElement('div');
    container.id = 'site-helper-root';
    container.style.cssText = 'max-width:600px; margin:0 auto; padding:10px;';
    document.body.appendChild(container);

    createCard(container);
    createBadges(container);
    createAccessInfo(container);

    console.log('[site-helper] 已加载，种子：' + config.seed);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();