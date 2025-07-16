const multer = require('multer');

// Use memoryStorage instead of diskStorage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
