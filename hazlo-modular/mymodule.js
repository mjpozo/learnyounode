
module.exports = function('cosa/','txt',function(err, files) {
		if (err) throw err;
		var extension;
		var list = [];
		for (i=0 ; i<files.length ; i++){
			extension = files[i].split(".")[1];
			if (extension == process.argv[3]){
				list.push(files[i]);
			}
		}
		console.log(list.join("\n"));
	}