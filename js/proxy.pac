const J = "CT"
const P = [11,31,97,317,997,3163,9973,33161,99991,331613,1000003]
var H = {};
(function(){/*
DT	DIRECT
DN	PROXY 0.0.0.0:0
CJ	cs-pj.cybozu.com	www.mhlw.go.jp	*.japanpost.jp	*.google.co.jp	*.google.com	google.com
CS	kouseiroudou-coronavirus-2020.awsapps.com	*.amazonaws.com	*.awsapps.com	*.cloudfront.net	cloudfront.net	monolith.cybozu.com	*.pref.*	www.mhlw.go.jp	www.meti.go.jp	www.moj.go.jp	www.mofa.go.jp	www.forth.go.jp	cs-pj.cybozu.com	www.mhlw.go.jp	*.japanpost.jp	*.google.co.jp	*.google.com	google.com	*.pref.*.jp	*.lg.jp	www.anzen.mofa.go.jp	www.mext.go.jp
CT	www.city.taito.lg.jp	kyufukin.soumu.go.jp	seireki.hikak.com	*.japanpost.jp	www.e-typing.ne.jp	*.myna.go.jp	secure.okbiz.okwave.jp	*.cybozu.com	*.google.co.jp	*.google.com	google.com	zengin.ajtw.net
WM	www.wam.go.jp	www.int.wam.go.jp	secure.okbiz.okwave.jp	fukushicorona.cybozu.com
PY	www.sastty.com	*.japanpost.jp	zengin.ajtw.net	bkichiran.hikak.com	www.google.co.jp
HN	tenki.jp	tokyo-haneda.com	www.aeif.or.jp	www.cab.mlit.go.jp	www.e-typing.ne.jp	www.jma.go.jp	www.mlit.go.jp	www.ntrack.mlit.go.jp	www.ntrack-internal2020.mlit.go.jp	secure.okbiz.okwave.jp
*/}).toString().split(/(\r|\n)+/).forEach(
    function (s) { a=s.split("\t"); k=a.shift(); if (a[0]) { H[k] = a } }
);
function FindProxyForURL(u,h){
    return H[H[J].some(function (s) {
        return isPlainHostName(h) || shExpMatch(h,s)
    }) ? "DT":"DN"][0];
}
