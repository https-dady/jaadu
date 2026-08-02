// ============================================================================
// asyncHandler
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Express async functions me baar baar
// try-catch likhne ki zarurat nahi padegi.
//
// Example:
//
// BEFORE
//
// try{
//    ...
// }catch(err){
//    ...
// }
//
// AFTER
//
// asyncHandler(async(req,res)=>{
//
// })
//
// ============================================================================

const asyncHandler = (requestHandler) => {

    return (req, res, next) => {

        Promise

            .resolve(

                requestHandler(req, res, next)

            )

            .catch(next);

    };

};

module.exports = asyncHandler;