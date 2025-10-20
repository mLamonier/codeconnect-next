import { createLogger, format, transports } from "winston";

// para usar o logger.js da forma correta, é importante manter essa estrutura
// criar um arquivo logger.js, e outros 2 na raiz do projeto: "combined.log" e "error.log"

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new transports.File({ filename: "error.log", level: "error" }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new transports.File({ filename: "combined.log" }),
  ],
});

export default logger

/*
    Um ponto importante: devemos sempre usar níveis apropriados de log para identificar a criticidade dos eventos.

    Os níveis básicos são:

    error - erro,
    warning - aviso,
    info - informação,
    debug - depuração
    trace - rastreamento.
*/
