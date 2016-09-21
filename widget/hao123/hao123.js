var artTpl = require('widget/ui/art-template/art-template.js');

module.exports = function() {
	var $mod = document.querySelector('.mod-hao123');
	var TPL = [
		'{{each data as item index}}',
			'{{if !(index % 5)}}<ul>{{/if}}',
			'<li>',
				'<a href="{{item.url}}">',
					'<img src="{{item.img}}"/>',
				'</a>',
			'</li>',
			'{{if index % 5 == 4}}</ul>{{/if}}',
		'{{/each}}'
	].join('');
	var _data = [
		{name: 'OA', img: __uri('img/oa.png'), url: 'http://inner.800bestex.com:8090/'},
		{name: '协和系统', img: __uri('img/xh.png'), url: 'https://xh.800best.com/'},
		{name: '百世快递大学', img: __uri('img/university.png'), url: 'http://daxue2.800best.com/'},
		{name: '百世大笔', img: __uri('img/dabi.png'), url: 'http://dabi.800best.com/'},
		{name: '问道网误录签收反馈', img: __uri('img/askform.png'), url: 'http://app.askform.cn/2770050001.aspx'},
		{name: '百世快递', img: __uri('img/express.png'), url: 'http://www.800bestex.com/'},
		{name: '百世快运', img: __uri('img/freight.png'), url: 'https://t.800best.com/turbo/home/home'},
		{name: '百世集团', img: __uri('img/best.png'), url: 'http://www.800best.com/'},
		{name: 'U9系统', img: __uri('img/u9.png'), url: 'https://u9.800best.com/'},
		{name: 'S9系统', img: __uri('img/s9.png'), url: 'http://s9.800best.com/'},
		{name: 'CRM系统', img: __uri('img/crm.png'), url: 'http://crm.800bestex.com/'},
		{name: '百世天雷', img: __uri('img/m9.png'), url: 'http://m9.800best.com'},
		{name: '灵通打单', img: __uri('img/dadan.png'), url: 'http://bestsmart.800best.com/'}
	]
	$mod.insertAdjacentHTML('beforeend', artTpl.compile(TPL)({data: _data}));
};
