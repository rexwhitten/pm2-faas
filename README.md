# PM2 FaaS

1. Configure `functions` to do their job, stop when they fail, and run to successfull completion and stop.
2. A way to manage adding/removing `function scripts`
3. a tiny REST API to invoke functions `/api/function/<name>'
4. running HTTP POST 'api/function/<name>' should run the `function` and the return the result.
