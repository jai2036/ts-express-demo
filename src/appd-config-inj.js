const appd = require('appdynamics');
appd.profile({
    controllerHostName: "",
    controllerPort: 443,
    accountName: '',
    accountAccessKey: '',
    controllerSslEnabled: true,
    applicationName: 'TypescriptJsDemo',
    tierName: 'tier1',
    nodeName: 'node1',
    logging: {
        'logfiles': [{
            filename: "nodejs_agent_%N.log",
            level: 'TRACE'
        }]
    }
  });

