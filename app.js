// We are based on electron, so we need to initiate it.
var electron = require('electron');
var system = "Unknown OS";
var os = require('os')

switch(os.type()) {
    case "Linux":
        system = "Linux";
        break;
    case "Darwin":
        system = "Mac OSX";
        break;
    case "Windows_NT":
        system = "Windows";
        break;
    default:
        system = "Unknown OS";
}

// When the app is ready...
electron.app.on('ready', function () {
  // Create the BrowserWindow variable.
  const BrowserWindow = require('electron').BrowserWindow;

  // Create a new window and let it load in the background.
  var win = new BrowserWindow({width: 800, height: 600, show: false, title: "WhatsApp for " + system});

  // When it is closed, delete the window.
  win.on('closed', function() {
    win = null;
  });

  // Don't let the page title change!
  win.on('page-title-updated', function(event) {
    event.preventDefault();
  });

  win.loadURL('https://web.whatsapp.com');
  win.show();
})
