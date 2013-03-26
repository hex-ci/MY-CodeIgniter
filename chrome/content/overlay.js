
/**
 * MyCodeIgniterChrome namespace.
 * MyCodeIgniterChrome 名字空间
 */
if ("undefined" == typeof(MyCodeIgniterChrome))
{
	var MyCodeIgniterChrome = {};
}

MyCodeIgniterChrome = {
	onLoad: function() {
		// initialization code
		this.initialized = true;
		this.addToolbarButton();

//		var Application = Components.classes["@mozilla.org/fuel/application;1"].getService(Components.interfaces.fuelIApplication);
//		if (Application.extensions)
//		{
//		    let extension = Application.extensions.get('hex@codeigniter.org.cn');
//		    if (extension.firstRun)
//		    {
//		    	this.addToolbarButton();
//		    }
//		}
//		else if (Application.getExtensions)
//		{
//		    Application.getExtensions(function(extensions){
//				let extension = extensions.get('hex@codeigniter.org.cn');
//		        if (extension.firstRun)
//		        {
//		    		MyCodeIgniterChrome.addToolbarButton();
//		        }
//		    });
//		}
	},

	addToolbarButton: function() {
		try
		{
			var myId    = "MyCodeIgniter-toolbar-button"; // ID of button to add
			var afterId = "home-button";    // ID of element to insert after
			var navBar  = document.getElementById("nav-bar");
			var curSet  = navBar.currentSet.split(",");

			if (curSet.indexOf(myId) == -1) 
			{
				var pos = curSet.indexOf(afterId) + 1 || curSet.length;
				var set = curSet.slice(0, pos).concat(myId).concat(curSet.slice(pos));

				navBar.setAttribute("currentset", set.join(","));
				navBar.currentSet = set.join(",");
				document.persist(navBar.id, "currentset");
				try
				{
					BrowserToolboxCustomizeDone(true);
				}
				catch (e) {}
			}
		}
		catch(e) {}
	},

	openWebpage: function(event, url) {
		if (event && event.button != 0)
		{
			getBrowser().addTab(url);
		}
		else
		{
			loadURI(url);
		}
	}
};

window.addEventListener("load", function() { MyCodeIgniterChrome.onLoad(); }, false);
