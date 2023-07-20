const minify = require('@node-minify/core');
const uglifyES = require('@node-minify/uglify-es');
const glob = require("glob");

var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

getDirectories('src/components', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
    res.forEach(element => {
        if (element.includes(".js") && (!element.includes("i18n") && !element.includes(".min.js") && !element.includes("stories"))) {
            minify({
                compressor: uglifyES,
                input: element,
                output: `${element.replace(".js", "")}.min.js`,
                callback: function(err, min) {}
              });
        }
    });
  }
});
