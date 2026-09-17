

export async function isValidPostData(req, res, next) {
    try {   
        const {userName,email,password} = req.body;
        
        if((!userName || typeof userName !== "string") || (!email || typeof email !== "string") || (!password || typeof password !== "string")){
                       return res.status(400).json({message:"invalid request"})
        }
        if(password.length < 6) return res.status(400).json({message:"password must be 6 chars"})

        return next();
    } catch (error) {
        console.error(error);
        
    }
    
}


export async function isValidGetData(req,res,next) {
    try {      
        const {userName,email,password} = req.body;
        
        if((!userName || typeof userName !== "string") || (!email || typeof email !== "string") || (!password || typeof password !== "string")){
                       return res.status(400).json({message:"invalid request"})
        }

        if(password.length < 1) return res.status(400).json({message:"password is required"})

        return next();
    } catch (error) {
        console.error(error);
        
    }
}


// export async function isValidPostData(schema) {
//     console.log(typeof schema);
    
//     return (req, res, next) => {
//         const body = req.body;
//         const result = schema.safeParse({
//             userName: body.userName,
//             email: body.email,
//             password: body.password
//         })

//         if (!result.success) {
//            return res.status(400).json({message:"invalid request"})
//         }

//         if (result.data.body) {
//             req.body = result.data.body;
//         }

//         next();
//     }
// }