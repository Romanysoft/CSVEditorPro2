(function () {
    window.RTYConfig = {
        appName:"CSVEditorPro2",
        appID:"com.romanysoft.app.macos.CSVEditorPro",
        documentTitle:"CSVEditorPro2 By Romanysoft",
        supportPlatforms:["Mac"],
        googleUA:"UA-76676167-16",
        gitHome:"//github.com/Romanysoft/CSVEditorPro2",
        reportIssueUrl:"//github.com/Romanysoft/CSVEditorPro2/issues",
        changeLogUrl:"//github.com/Romanysoft/CSVEditorPro2/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/CSVEditorPro2/wiki",
        jumpLocation:"https://www.romanysoft.net/csveditorpro2/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    } 
    
})();