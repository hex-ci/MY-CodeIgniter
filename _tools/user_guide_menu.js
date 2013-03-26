if ("undefined" == typeof(MyCodeIgniterChrome))
{
	var MyCodeIgniterChrome = {};
}

MyCodeIgniterChrome._setNavigation = function() {
	myHeight = {
		toggle: function() {
			var object = document.getElementById('nav');
			if (object.style['height'] == '0px')
			{
				object.style['height'] = object.scrollHeight + 'px';
			}
			else
			{
				object.style['height'] = '0px';
			}
		}
	};

	document.getElementById('nav').style['height'] = '0px';
	document.getElementById('nav').style['overflow'] = 'hidden';
};