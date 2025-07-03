const express =require('express');
const app =express();
const path= require('path');
const fs =require('fs')

app.set("view engine", "ejs" );
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    fs.readdir(`./files`, function(err,files){
         res.render("index",{files : files});
    })
   
})


app.get('/file/:filename', function(req,res){
   fs.readFile(`./files/${req.params.filename}`,"utf-8", function(err,filedata){
    res.render('show', {filename:req.params.filename,filedata:filedata});
   })
   
})

// edit
app.get('/edit/:filename', function(req,res){
   res.render('edit',{filename: req.params.filename});
   
})
app.post('/edit', function(req, res) {
  const oldPath = `./files/${req.body.previous}`;
  const newPath = `./files/${req.body.new.split(' ').join('')}.txt`;

  fs.rename(oldPath, newPath, function(err) {
    if (err) console.error(err);
    res.redirect('/');
  });
});


app.post('/create', function(req, res) {
    const fileName = req.body.title.split(' ').join('') + '.txt';
    const fileContent = req.body.details;

    fs.writeFile(`./files/${fileName}`, fileContent, function(err) {
        if (err) {
            console.error('File creation error:', err);
            return res.status(500).send("File could not be created.");
        }
        res.redirect('/');
    });
});

app.listen(3000);