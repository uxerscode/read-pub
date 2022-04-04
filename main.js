const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({width: 1920, height: 1080})    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/read-pub/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

app.on('ready', onReady);
