// "Data extends Object" helps to make Data always be of an object type

type ApiResponse<Data extends Object = {status : number}> = {
    data : Data,
    isError : boolean
}

const response : ApiResponse<{ name : string}> = {
    data : {
        name : "Zero",
    },
    isError: false
}

console.log(response)