var compressor = require('node-minify');
const glob = require("glob");

var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

getDirectories('src/components', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
    res.forEach(element => {
        if (element.includes(".js") && (!element.includes("i18n") && !element.includes(".min.js"))) {
            compressor.minify({
                compressor: 'terser',
                input: element,
                output: `${element.replace(".js", "")}.min.js`,
                callback: function(err, min) {}
              });
        }
    });
  }
});
