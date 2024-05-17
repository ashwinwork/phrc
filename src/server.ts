import app from "./app";
import logger from "./utils/logger";

const PORT = process.env.PORT || 8082;

app.listen(PORT, async () => {
    logger.info(`Running on PORT: ${PORT}`);
});
