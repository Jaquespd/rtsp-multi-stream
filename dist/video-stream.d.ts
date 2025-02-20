/// <reference types="node" />
import { EventEmitter } from 'node:events';
import { Mpeg1Muxer, MuxerOptions } from './mpeg1-muxer';
interface StreamOptions extends Omit<MuxerOptions, 'url'> {
    wsPort?: number;
    server?: any;
}
export declare class VideoStream extends EventEmitter {
    liveMuxers: Map<string, Mpeg1Muxer>;
    private wsServer?;
    private readonly options?;
    private liveMuxerListeners;
    constructor(opt?: StreamOptions);
    start(): void;
    stop(): void;
}
export {};
