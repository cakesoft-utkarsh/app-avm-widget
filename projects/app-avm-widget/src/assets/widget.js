var rprAvmWidgetOptions = {
  Token: "-",
  Query: "-",
  CoBrandCode: "btsshopprop",
  ShowRprLinks: true,

};
if (!window.console || !window.console.log) {
  window.console = { log: function() {} };
}
if (!window.rprAvmWidgetCount) window.rprAvmWidgetCount = 0;
++rprAvmWidgetCount;
(function(widgetId, options) {
  widgetId = "rprAvmWidget_" + widgetId;
  options.Query = document.getElementById("widgetAddress").value;
  options.Token = document.getElementById("widgetKey").value;
  if (!options.ContainerSelector) {
    document.write('<div id="' + widgetId + '"></div>');
    options.ContainerSelector = "#" + widgetId;
    console.log(widgetId);
  }
  if (typeof jQuery === "undefined") {
    if (!window.rprIsJQueryLoading) {
      window.rprIsJQueryLoading = true;
      console.log("AVM WIDGET: Loading jQuery...");
      var headTag = document.getElementsByTagName("head")[0];
      var jqTag = document.createElement("script");
      jqTag.type = "text/javascript";
      jqTag.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
      jqTag.onload = getWidgetHtml;
      headTag.appendChild(jqTag);
    } else {
      var jqInterval = window.setInterval(function() {
        console.log("AVM WIDGET: Checking for jQuery...", jQuery);
        if (typeof jQuery !== "undefined") {
          window.clearInterval(jqInterval);
          getWidgetHtml();
        }
      }, 500);
    }
  } else {
    console.log("AVM WIDGET: jQuery is present...");
    getWidgetHtml();
  }
  function getWidgetHtml() {
    var $ = jQuery;
    console.log("gere");
    $.ajax({
      type: "GET",
      url: "https://www.narrpr.com/widgets/avm-widget/widget.ashx/html",
      processData: true,
      data: {
        Token: options.Token,
        Query: options.Query,
        cbcode: options.CoBrandCode,
        ShowRprLinks: options.ShowRprLinks
      },
      contentType: "application/json; charset=utf-8",
      dataType: "jsonp",
      jsonpCallback: "onJSONPSuccess_" + widgetId,
      cache: true,
      success: onSuccess,
      error: onError
    });
    function onSuccess(result) {
      processWidgetResult(result);
      $("<img />").attr(
        "src",
        "https://www.narrpr.com/widgets/avm-widget/tracking-beacon.gif?Token=" +
          encodeURIComponent(options.Token) +
          "&Entity=" +
          encodeURIComponent(result.entityName) +
          "&t=" +
          new Date().getTime()
      );
      gaTrack(result.entityName);
    }
    function onError(request, status, error) {
      console.log("on error");
      processWidgetResult({
        status: 100,
        statusText: "JSONP request failure"
      });
    }
    function processWidgetResult(result) {
      console.log(result);
      var $container = $(options.ContainerSelector);
    $("#rprAvmWidget").append(result.html);
      if (
        window.rprAvmWidgetCompleteCallback &&
        typeof window.rprAvmWidgetCompleteCallback === "function"
      )
        window.rprAvmWidgetCompleteCallback(
          result.status,
          result.statusText,
          options,
          $container.get(0)
        );
      console.log(
        "AVM WIDGET: Status [" + result.status + "] > " + result.statusText
      );
    }
    function gaTrack(entityName) {
      if (typeof ga !== "function") {
        if (!window.rprIsGALoading) {
          window.rprIsGALoading = true;
          console.log("AVM WIDGET: Loading Google Analytics API...");
          (function(i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            i[r] =
              i[r] ||
              function() {
                (i[r].q = i[r].q || []).push(arguments);
              };
            i[r].l = 1 * new Date();
            a = s.createElement(o);
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://www.google-analytics.com/analytics.js",
            "ga"
          );
        }
        var gaInterval = window.setInterval(function() {
          console.log("AVM WIDGET: Checking for GA...", ga);
          if (typeof ga === "function") {
            window.clearInterval(gaInterval);
            _track();
          }
        }, 200);
      } else _track();
      function _track() {
        ga("create", "UA-12360807-2", "auto", "RPR");
        ga("RPR.send", "event", "AVM Widget", entityName);
      }
    }
  }
})(rprAvmWidgetCount, rprAvmWidgetOptions);