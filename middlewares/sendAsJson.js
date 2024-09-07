
// let sendAsJson = () => async (err, req, res, next) => {
//     console.log(err)
//     if (process.env.NODE_ENV === 'production') {
//         if (err.statusCode !== 500) {
//             return res.status(err.statusCode).json({
//                 code: err.statusCode,
//                 status: false,
//                 name: err.name,
//                 message: err.message
//             })
//         } else {
//             return res.status(500).send("SERVER ERROR");
//         }
//     } else {
//         next(err);
//     }
// }

const sendAsJson = () => async (err, req, res, next) => {
    return res.status(err.statusCode).json({
        code: err.statusCode,
        status: false,
        name: err.name,
        message: err.message
    })
}

module.exports = sendAsJson;