import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server);
    await platform.listen();

    $log.debug("Server initialized");
  } catch (error) {
    $log.error({
      event: "SERVER_BOOTSTRAP_ERROR",
      message: error.message,
      stack: error.stack,
    });
  }
}

bootstrap();

export default async function startServer() {
  const platform = await bootstrap();
  return platform;
}
