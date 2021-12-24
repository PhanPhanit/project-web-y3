const uploadImageLocal = async (req, res) => {
    res.send("upload image local");
}

const uploadImageCloud = async (req, res) => {
    res.send("upload image cloud")
}

module.exports = {
    uploadImageLocal,
    uploadImageCloud
}