const shell = require('shelljs')

shell.cp('-R', 'src/public/', 'dist/public/')
shell.cp('-R', 'views', 'dist/views')
