!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/recommendations/styles/recommendations.10022a97346f1c6e3798931bbd8e4bb5.css",RTL_STYLES:"https://c.disquscdn.com/next/recommendations/styles/recommendations_rtl.9c3ccad48c24340222b5a85c20ea36b8.css","recommendations/main":"https://c.disquscdn.com/next/recommendations/recommendations.bundle.540d77a9b22358647ed01c5c9f5cd435.js","remote/config":"https://disqus.com/next/config.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/recommendations/recommendations",paths:["recommendations/main","remote/config"].reduce(function(a,c){var d=-3;return a[c]=b[c].slice(0,d),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("recommendations",b)})},c.src="https://c.disquscdn.com/next/recommendations/common.bundle.a9dbfd4953c56ee31948cf0727470689.js",a.body.appendChild(c)}();