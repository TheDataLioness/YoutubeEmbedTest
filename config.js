function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
   return r;
}

var urlvar = querystring("url")[0];

document.getElementById("iframe_embed").url = urlvar;

