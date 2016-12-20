let mgs=require('mongoose');
mgs.connect(process.env.dbPath);
mgs.connection.on('connected', ()=>{
	debug('mongoose connected to: '+process.env.dbPath);
});

mgs.connection.on('error', (err)=>{
	debug('mongoose connect error: '+err);
});
mgs.connection.on('disconnected', ()=>{
	debug('mongoose disconnect');
});

function close(msg, cb){
	mgs.connection.close(()=>{
		debug('db closed through '+msg);
		cb();
	});
}

process.once('SIGUSR2', ()=>{
	close('nodemon restart', ()=>{
		process.kill(process.pid, 'SIGUSR2');
	});
});
process.once('SIGINT', ()=>{
	close('app terminate', ()=>{
		process.exit(0);
	});
});

require('./locs');
