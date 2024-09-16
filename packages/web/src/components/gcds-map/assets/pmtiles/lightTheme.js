const sheet = new protomapsL.Sheet(`
<html>
  <body>
    <svg id="icon_0" width="99px" height="97px" xmlns="http://www.w3.org/2000/svg">
      <image href="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl82NCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgPGltYWdlIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBMlVsRVFWUjRuTldQTVdvQ1lSQ0Z2MElDZ2xZaFZnRUwzZmNyZGlsczBteVJUdkFLa2xaSXdKM2ZpTjE2aGhoeUFCRkVjZ2J2WUtFbmtCUkpiNWtFSlRheXNNdFd5WVBYRFBPOW1RZC9YcjVHSlRkc1Rhb21wdm12TzBZbVB1T1FRcjRQeE5yRXR3L29wQzdITFM1TVRFd3NEdmFPdHdOOERCRGIwenh5eklkMWJoSkQraTFLWHN4T1lJSjN2a0dZM2ozZ1BnRmVqUnRjWnVvK2ROeWVCM2l4Skt0TXZQeUNtMGc4bS9neXNYOXlsRlBoT0tUZ3hZYzVYZ2ZYRkkrVnhKMkpkeE85MUlDQmFFZU83dm44b2M2VkQzak1YT1AvNkFmS0Ywd3dXeU9Oc3dBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPgogICAgPC9zdmc+" width="99" height="97" />
    </svg>
  </body>
</html>
`);
const pmtilesRules = new Map();
const pmtilesRulesReady = sheet.load().then(() => {
  pmtilesRules.set(
    'https://data.source.coop/protomaps/openstreetmap/tiles/v3.pmtiles',
    { theme: { theme: 'light' } }
  );
  return pmtilesRules;
});

export { pmtilesRules, pmtilesRulesReady };
