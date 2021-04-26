let {PythonShell} = require('python-shell')

PythonShell.run('script.py', null, function(err, result){
    if(result != null){
       console.log(result)
    }else{
        console.log(err)
    }
})