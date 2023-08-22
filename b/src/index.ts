import { transformer } from "../../a";

type CreateContextOptions = {
    req: any;
    res: any;
    // res: NextApiResponse<any>
    // req: NextApiRequest
};

const transi = transformer;

const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        // prisma,
        res: opts.res,
        req: opts.req,
        trans: transi,
    };
};

// const createInnerTRPCContext = (opts: CreateContextOptions):
// {
//     res: any;
//     req: any;
//     trans: typeof transformer;
// } => {
//     return {
//         // prisma,
//         res: opts.res,
//         req: opts.req,
//         trans: transformer,
//     };
// };

/**
 * This is the actual context you'll use in your router. It will be used to
 * process every request that goes through your tRPC endpoint
 * @link https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateContextOptions) => {
    const { req, res } = opts;

    return createInnerTRPCContext({
        res,
        req,
    });
};