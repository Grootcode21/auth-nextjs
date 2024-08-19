

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }
}