const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey:"private_NPnbJein4sV9C1nyG+WfGMGph8U="
})

async function uploadfiles(buffer){
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "My-file.jpg"
    })
    return result;
}
module.exports = uploadfiles;