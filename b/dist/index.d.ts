import { transformer } from "../../a";
type CreateContextOptions = {
    req: any;
    res: any;
};
/**
 * This is the actual context you'll use in your router. It will be used to
 * process every request that goes through your tRPC endpoint
 * @link https://trpc.io/docs/context
 */
export declare const createTRPCContext: (opts: CreateContextOptions) => Promise<{
    res: any;
    req: any;
    trans: typeof transformer;
}>;
export {};
//# sourceMappingURL=index.d.ts.map