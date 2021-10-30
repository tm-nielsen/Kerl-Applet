var buildUrl = "./";
export var config = {
  dataUrl: './app/' + buildUrl + "/Kerl.data", // relative to application directory
  loaderUrl: buildUrl + "/Kerl.loader.js", // relative to Unity plugin
  frameworkUrl: './app/' + buildUrl +"/Kerl.framework.js",
  codeUrl: './app/' + buildUrl + "/Kerl.wasm",
//#if MEMORY_FILENAME
 // memoryUrl: buildUrl + "/{{{ MEMORY_FILENAME }}}",
//#endif
//#if SYMBOLS_FILENAME
//  symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
//#endif
  streamingAssetsUrl: "StreamingAssets",
  companyName: "{{{ COMPANY_NAME }}}",
  productName: "{{{ Kerl }}}",
  productVersion: "{{{ PRODUCT_VERSION }}}",
};