/**
 * @name ToggleTyping
 * @author JediMinecraft1
 * @version 0.0.1
 * @description This Plugin Is To Toggle The Typing Indicator Under The Chat Bar
 * @website https://github.com/Jedi-Coder1/ForeverTyping
 * @updateUrl https://raw.githubusercontent.com/Jedi-Coder1/ForeverTyping/main/ForeverTyping.plugin.js
 * @source https://github.com/Jedi-Coder1/ForeverTyping/blob/main/ForeverTyping.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */



module.exports = class ToggleTyping {
    start() {
        const ToggleButton = this.ToggleButton = document.createElement("button");
        ToggleButton.textContent = "Start Typing";
        ToggleButton.addEventListener("click", () => {
            const url = `https://discord.com/api/v9/channels/${BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("getLastSelectedChannelId"))}/typing`
            window.alert("Hello World!");});
        const root = document.querySelector(".tree-3agP2X > div > div[Select emoji]");
        root.append(ToggleButton);
    }
    stop() {
        this.ToggleButton.remove();
        
    }
}