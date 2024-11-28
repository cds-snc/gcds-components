const fs = require('fs');
const path = require('path');

const patchFiles = [
  {
    path: path.join(
      __dirname,
      '../src/components/stencil-generated/react-component-lib/utils/index.tsx',
    ),
    target: 'return React.forwardRef(forwardRef);',
    replace: '// @ts-expect-error\n  return React.forwardRef(forwardRef);',
  },
  {
    path: path.join(
      __dirname,
      '../src/components/stencil-generated/react-component-lib/createOverlayComponent.tsx',
    ),
    target: 'return <Overlay {...props} forwardedRef={ref} />;',
    replace:
      '// @ts-expect-error\n    return <Overlay {...props} forwardedRef={ref} />;',
  },
];

patchFiles.forEach(file => {
  // Read the file
  fs.readFile(file.path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Replace the specific line
    const result = data.replace(file.target, file.replace);

    // Write the updated content back to the file
    fs.writeFile(file.path, result, 'utf8', err => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
    });
  });
});
