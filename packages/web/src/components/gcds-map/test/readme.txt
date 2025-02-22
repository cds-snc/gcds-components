use this command to only run this file:

 npx stencil test --e2e  --no-build src/components/gcds-map/test/gcds-map.e2e.ts --silent --listTests

OR

change the test script in package.json to this:

    "test": "stencil test --no-build --e2e --silent --max-workers=8 gcds-map.e2e.ts",

has been found to to pass the gcds-map.e2e.ts path to jest which then only runs that test. If you
don't specify --max-workers, stencil invokes jest and adds the --max-workers option to the end of the
jest cli, in which case the gcds-map-e2e.ts is ignored, and all e2e tests are run

the --silent (jest option) prevents browser console logs from echoing to the terminal output

--no-build is actually a stencil option, but it also gets passed to jest for some reason
it speeds up the iterative testing process by not re-building the src/components which takes
a long time.  You can manually build before the first test run and it seems to work.


