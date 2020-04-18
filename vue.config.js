const path = require("path")
if(process.env.NODE_ENV === 'production'){
    module.exports = {
        publicPath: process.env.NODE_ENV === 'production' ? 'https://prasannabrabourame.github.io/covid19-tamilnadu' : '',
        outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, "./docs") : '/'
    }
}
