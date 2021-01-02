/* eslint-disable no-console */
import app from "./app";

import "dotenv/config";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
