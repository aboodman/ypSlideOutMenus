var s = [];
for (var i = 1; i <= 100; i++) {
	//s.push("<div id=\"menu" + i + "Container\"><div id=\"menu" + i + "Content\" class=\"menu\">this is menu " + i + "!</div></div>");
	//s.push("\t\t" + 'new ypSlideOutMenu("menu' + i + '", "right", 120, ' + (16 + (i-1) * 19) + ', 150, 30)');
	s.push('<a href="#" onmouseover="ypSlideOutMenu.showMenu(\'menu' + i + '\')" onmouseout="ypSlideOutMenu.hideMenu(\'menu' + i + '\')">show menu ' + i + '</a><br>');
}

WScript.Echo(s.join("\n"))