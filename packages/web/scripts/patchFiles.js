/**
 * This is a script to prevent typescript from identifying previously valid typescript code as an error by adding '// @ts-expect-error' before each line with an error.
 * This error prevents the @gcds-core/components-react package from building.
 *
 * This script will only be required as long as we use @stencil/react-output-target@0.5.3.
 * Once we chose to update to a newer version the react output target will no longer have need of the files causing issues.
 */

(async () => {
  const path = require('path');
  const replace = await import('replace-in-file');

  const filesToPatch = [
    {
      files: path.join(
        __dirname,
        '../../react/src/components/stencil-generated/react-component-lib/utils/index.tsx',
      ),
      from: 'return React.forwardRef(forwardRef);',
      to: '// @ts-expect-error\n  return React.forwardRef(forwardRef);',
    },
    {
      files: path.join(
        __dirname,
        '../../react/src/components/stencil-generated/react-component-lib/createOverlayComponent.tsx',
      ),
      from: 'return <Overlay {...props} forwardedRef={ref} />;',
      to: '// @ts-expect-error\n    return <Overlay {...props} forwardedRef={ref} />;',
    },
  ];

  filesToPatch.map(async file => {
    try {
      const results = await replace.replaceInFile(file);
      console.log('Replacement results:', results);
    } catch (error) {
      throw new Error(error);
    }
  });
})();
