let mgs=require('mongoose');
mgs.connect(cfg.dbPath);
mgs.connection.on('connected', ()=>{
	debug('mongoose connected to: '+cfg.dbPath);
});

mgs.connection.on('connected', (err)=>{
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

require('locs');
