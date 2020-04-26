"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../emulator/types");
const constants_1 = require("./constants");
const triple_beam_1 = require("triple-beam");
const WebSocket = require("ws");
const TransportStream = require("winston-transport");
const logger = require("../logger");
const ansiStrip = require("cli-color/strip");
class LoggingEmulator {
    constructor(args) {
        this.args = args;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.transport = new WebSocketTransport();
            this.transport.start(this.getInfo());
            logger.add(this.transport);
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            logger.remove(this.transport);
            if (this.transport && this.transport.wss) {
                const wss = this.transport.wss;
                return new Promise((resolve, reject) => {
                    wss.close((err) => {
                        if (err)
                            reject(err);
                        else
                            resolve();
                    });
                });
            }
        });
    }
    getInfo() {
        const host = this.args.host || constants_1.Constants.getDefaultHost(types_1.Emulators.LOGGING);
        const port = this.args.port || constants_1.Constants.getDefaultPort(types_1.Emulators.LOGGING);
        return {
            host,
            port,
        };
    }
    getName() {
        return types_1.Emulators.LOGGING;
    }
}
exports.LoggingEmulator = LoggingEmulator;
LoggingEmulator.LOGGING_EMULATOR_ENV = "FIREBASE_LOGGING_EMULATOR_HOST";
class WebSocketTransport extends TransportStream {
    constructor(options = {}) {
        super(options);
        this.connections = [];
        this.history = [];
        this.setMaxListeners(30);
    }
    start(options) {
        this.wss = new WebSocket.Server(options);
        this.wss.on("connection", (ws) => {
            this.connections.push(ws);
            this.history.forEach((bundle) => {
                ws.send(JSON.stringify(bundle));
            });
        });
    }
    log(info, next) {
        setImmediate(() => this.emit("logged", info));
        const bundle = {
            level: info.level,
            data: {},
            timestamp: new Date().getTime(),
            message: "",
        };
        const splat = [info.message, ...(info[triple_beam_1.SPLAT] || [])]
            .map((value) => {
            if (typeof value == "string") {
                try {
                    bundle.data = Object.assign(Object.assign({}, bundle.data), JSON.parse(value));
                    return null;
                }
                catch (err) {
                    return value;
                }
            }
            else {
                bundle.data = Object.assign(Object.assign({}, bundle.data), value);
            }
        })
            .filter((v) => v);
        bundle.message = ansiStrip(splat.join(" "));
        if (bundle.data && bundle.data.system && bundle.data.system.level) {
            bundle.level = bundle.data.system.level.toLowerCase();
        }
        else {
            bundle.level = bundle.level.toLowerCase();
        }
        this.history.push(bundle);
        this.connections.forEach((ws) => {
            ws.send(JSON.stringify(bundle));
        });
        if (next) {
            next();
        }
    }
}
