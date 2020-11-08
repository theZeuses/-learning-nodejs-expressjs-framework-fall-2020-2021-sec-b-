const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	
	//req.session.uname != null
	if(req.cookies['uname'] != null){
		
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})


router.get('/userlist', (req, res)=>{

	if(req.cookies['users'] == null){
		var users = [
			['1','alamin', 'SE', '2.4'],
			['2','xyz', 'CSE', '2.3'],
			['3','abc', 'CIS', '2.5']
		];
		res.cookie('users', users);
	}else{
		var users = req.cookies['users'];
	}
	

	res.render('home/userlist', {userlist: users});
});

module.exports = router;