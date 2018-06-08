var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(cors());

var surfers=[
	{
		name:'Сапожников'
	},
	{
		name:'Смирнов'
	}
];

app.get('/surfers',function(req,res){
	res.send(surfers);
});

var server=app.listen(3000,function(){
	console.log('server is started')
});