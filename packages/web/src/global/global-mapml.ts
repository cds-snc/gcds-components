export default function globalMapMLScript() {
  function loadMapMLIfNeeded() {
    if (document.querySelector('mapml-viewer')) {
      const scriptId = 'mapml-loader';
      const stylesheetId = 'mapml-client-styles';
      if (!document.getElementById(scriptId)) {
        try {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = new URL('gcds-map/mapml.js', import.meta.url).href;
          script.crossOrigin = 'anonymous';
          script.id = scriptId;
          document.head.appendChild(script);
          const stylesheetLink = document.createElement('link');
          stylesheetLink.rel = 'stylesheet';
          stylesheetLink.href = new URL('gcds-map/gcds-map.css', import.meta.url).href;
          stylesheetLink.id = stylesheetId;
          document.head.appendChild(stylesheetLink);
          script.onload = () => console.log('MapML module dynamically loaded');
          script.onerror = (err) => console.error('Error loading MapML module:', err);
        } catch (err) {
          console.error('Error injecting MapML script:', err);
        }
      }
    }
  }

  // Run on page load
  window.addEventListener('DOMContentLoaded', loadMapMLIfNeeded);
}
